const container = $('.content'); //get magazine container
let issue = ""; //global issue variable
presentPage = 0; //present page
var timer;

const config = {
  "social": false,
  "text_at": window.innerHeight,
  "timer": true,
  "timer_time": 20,
  "url": 'http://sofasport.pl/e-mag/index.html?id='+window.$_GET['id']
}


function setNavTo(page) {

  $('nav h2').innerText = pages[page-1].title;
  $('nav a:first-of-type').innerHTML = (pages[page-2] != undefined) ? pages[page-2].title : 'Główna';
  $('nav a:first-of-type').href = `javascript:scrollToPage(${page-1})`;
  $('nav a:last-of-type').innerHTML = (pages[page] != undefined) ? pages[page].title : 'Koniec';
  $('nav a:last-of-type').href = (page+1 <= pages.length) ? `javascript:scrollToPage(${page+1})` : 'javascript:scrollToPage(0)';

}

function countdown() {
  //select time
  let time = parseInt($("nav .after").innerText);
  if(time == 0) {
    clearInterval(timer);
    time = config.timer_time;
    $("nav a.go-right").click();
  } else time--;
  $("nav .after").innerText = time;
}
//scrollToPage
function scrollToPage(page = 0) {


  presentPage = page;

  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) * page;
  if(Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > 768) { //if it's not mobile
    console.log(w);
    window.scrollIt(w, 1);

    //hide .please-share and remove timer
    $All(".page .please-share").forEach((item) => item.fadeOut());
    $("nav a.go-right").classList.remove('timer');
    window.clearInterval(timer);

    $All('.content .page').forEach((item) => item.classList.remove('active'));
    if(page <= pages.length) $(`.content article:nth-of-type(${page+1})`).classList.add("active");
    if(page > 0) setNavTo(page);
  }

}

//generate html structure

function createPages(pages) {

  //create front page
  let front_page = document.createElement('article'); //create "page"
  front_page.className = "front_page"; //add class
  front_page.innerHTML = `
    <img src="${issue.cover}" alt="cover" class="cover">
    <button><span class="fa fa-play" aria-hidden="true"></span></button>
  `;

  container.appendChild(front_page);

  container.innerHTML += pages.map((item) => { //loop every page

     //create new page
     return `
     <article class="page">
        ${item.content}
     </article>
     `;

  }).join('');

//plug play action to "play" button
 $(".front_page button").addEventListener("click", function() { scrollToPage(1); },false);

 /* create navigaton */

let nav = document.createElement('nav');
nav.innerHTML = `
<a class="go-left">None</a>
<h2>Unnamed</h2>
<a class="go-right">None</a><div class="after">${config.timer_time}</div>
`
document.body.appendChild(nav);

setTimeout(function() {
  window.scroll(0,0);
}, 100)

let social = document.createElement('div');
social.className = "social";
social.style.display = "none";
social.innerHTML = `
    <ul>
          <li><h6>Share</h6></li>
          <li><a class="icoHeart" title="Heart"><i class="fa fa-heart" class="Heart"></i></a></li>
          <li><a class="icoFacebook" title="Facebook"><i class="fa fa-facebook" title="Facebook"></i></a></li>
          <li><a class="icoTwitter" title="Twitter"><i class="fa fa-twitter" title="Twitter"></i></a></li>
          <li><a class="icoGoogle" title="Google"><i class="fa fa-google-plus" title="Google"></i></a></li>
          <li><a onClick="alert('This option is inactive...')" class="icoBookmark" title="Read later"><i class="fa fa-bookmark-o"></i></a></li>
    </ul>`;
  document.body.appendChild(social);

social.addEventListener('click', function(event) {

  var link = "";
  var mobile = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 768;

  if(event.target['title'] == "Facebook") {
    if(mobile) link = `https://www.facebook.com/sharer/sharer.php?u=${config.url}`;
    else link = `https://www.facebook.com/sharer/sharer.php?u=${config.url}&page=${presentPage}`;
  }
  else if(event.target['title'] == "Twitter") {
      if(mobile) link = `https://twitter.com/home?status=`+ encodeURIComponent(`Polecam ${issue.title} - ${config.url}`);
      else link = `https://twitter.com/home?status=`+ encodeURIComponent(`${pages[presentPage].title} #SofaMagazyn ${config.url}&page${presentPage}`);
      console.log(mobile, Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
  }
  else if(event.target['title'] == "Google") {
      if(mobile) link = `https://plus.google.com/share?url=`+ encodeURIComponent(`${pages[presentPage].title} #SofaMagazyn ${config.url}`);
      else link = `https://plus.google.com/share?url=`+ encodeURIComponent(`${pages[presentPage].title} #SofaMagazyn ${config.url}&page${presentPage}`);
  }
  else if(event.target['title'] == "Heart") {

  var xhr = new XMLHttpRequest();
   xhr.open("POST", "https://formspree.io/raventhein@gmail.com", true);
   xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
   xhr.onreadystatechange = function() {//Call a function when the state changes.
       if(xhr.readyState == 4 && xhr.status == 200) {
       }
   }
   xhr.send(JSON.stringify({
       message: "Somebody liked it"
   }));
 }


  if(link != "") window.open(link);
});

 if(!isNaN(window.$_GET['page'])) {
    var p = parseInt(window.$_GET['page'])
    setNavTo(p);
    presentPage = p;
    scrollToPage(p);
  }

}

function errorPage(message) {

  let errorPage = document.createElement('article'); //create "page" for 404 not found
  errorPage.className = "not_found"; //add class not_found for css styling
  errorPage.innerHTML = `<h1>${message}</h1>`; //add error message
  $('.content').appendChild(errorPage); //append new page to .content

}

/* Scroll events */

function checkScroll() {

    if((window.scrollY > config.text_at && $('.social').style.display == "none") || (window.scrollY > config.text_at && config.social == false)) {
        if(config.social == true)$('.social').fadeIn();
        $('nav').classList.add('scrolled');
    } else if((window.scrollY < config.text_at && $('.social').style.display == "block") || (window.scrollY < config.text_at && config.social == false)) {
        if(config.social == true) $('.social').fadeOut();
        $('nav').classList.remove('scrolled');
        $All(".page .please-share").forEach((item) => item.fadeOut());
    }

    if((window.scrollY+window.innerHeight > document.body.getBoundingClientRect().height - 100) && ($(".page .please-share").style.display == "none")) {
        $All(".page .please-share").forEach((item) => item.fadeIn());
        if(config.timer) $("nav a.go-right").classList.add('timer');
        window.clearInterval(timer);
        if(config.timer) timer = setInterval(() => { countdown() }, 1000);
        if(config.timer) $('nav h2').innerHTML = `<strong>Następny:</strong> ${$('nav a.go-right').innerText}`;
    }


}

/* Event listeners */

window.addEventListener('resize', () => { scrollToPage(presentPage)});
window.addEventListener('scroll', (item) => { checkScroll()});

/* Loading magazine */
if(window.$_GET['id'] === undefined) { //if id isn't specified

   errorPage("404 not found...");


} else {

  issue = data.filter(item => item.id == window.$_GET['id']); //get issue with speicified id from data array
  if(issue.length < 1) { //if issue with such id doesnt exist

    errorPage("There is no such issue in the database..."); //add error message

  }
  else {

    issue = issue[0];

      loadFile(`templates/${issue.template}/template.js`,"js").then(function(result) {
          //everything is okay
          loadFile(`${issue.url}/pages.js`,"js").then(function(result) {

             console.info('e-Mag: Pages loaded properly!')
             createPages(pages); //generate pages

          }, function(err) {
              console.error(err); // error while loading the file
              errorPage("Pages file not found..."); //add error message
          });

      }, function(err) {
          console.error(err); // error while loading the file
          let errorPage = document.createElement('article'); //create "page" for 404 not found
          errorPage.className = "not_found"; //add class not_found for css styling
          errorPage.innerHTML = "<h1>Template file not found...</h1>"; //add error message
          $('.content').appendChild(errorPage); //append new page to .content
      });

      loadFile(`templates/${issue.template}/style.css`,"css");
      loadFile(`${issue.url}/style.css`,"css");

  }
}

/* end of loading magazine */
