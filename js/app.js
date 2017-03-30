const container = $('.content'); //get magazine container
let issue = ""; //global issue variable
presentPage = 0; //present page

const config = {
  "social": false,
  "text_at": window.innerHeight,
}


function setNavTo(page) {

  $('nav h2').innerText = pages[page-1].title;
  $('nav a:first-of-type').innerHTML = (pages[page-2] != undefined) ? pages[page-2].title : 'Główna';
  $('nav a:first-of-type').href = `javascript:scrollToPage(${page-1})`;
  $('nav a:last-of-type').innerHTML = (pages[page] != undefined) ? pages[page].title : 'Koniec';
  $('nav a:last-of-type').href = (page+1 <= pages.length) ? `javascript:scrollToPage(${page+1})` : 'javascript:scrollToPage(0)';

}

//scrollToPage
function scrollToPage(page = 0) {
  presentPage = page;
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) * page;
  window.scrollIt(w, 1);
  $All('.content .page').forEach((item) => item.classList.remove('active'));
  if(page <= pages.length) $(`.content article:nth-of-type(${page+1})`).classList.add("active");
  if(page > 0) setNavTo(page);
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
<a class="go-right">None</a>
`
document.body.appendChild(nav);

setTimeout(function() {
  window.scroll(0,0);
}, 100)

let social = document.createElement('div');
social.className = "social";
social.style.display = "none";
social.innerHTML = `
    <h6>Share</h6>
    <ul>
          <li><a href="#" class="icoRss" title="Rss"><i class="fa fa-heart"></i></a></li>
          <li><a href="#" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
          <li><a href="#" class="icoTwitter" title="Twitter"><i class="fa fa-twitter"></i></a></li>
          <li><a href="#" class="icoGoogle" title="Google +"><i class="fa fa-google-plus"></i></a></li>
          <li><a href="#" class="icoBookmark" title="Linkedin"><i class="fa fa-bookmark-o"></i></a></li>
    </ul>`;
  document.body.appendChild(social);

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
