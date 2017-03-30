
class Magazine {
  constructor(config, db) {
    this.config = {
      "id": config.id || undefined,
      "container": $(".content"),
      "social": config.social || false,
      "text_at": config.text_at || window.innerHeight
    }
    this.db = data;
    if(this.exists()) this.loadIssue();
  }

  /* Checks if given issue exists */
  exists() {

        if(this.config.id === undefined) { //if id isn't specified
            errorPage("404 not found...");
            return false;
        } else {
            this.issue = this.db.filter(item => item.id == this.config.id); //get issue with speicified id from data array
            if(this.issue.length < 1) { //if issue with such id doesnt exist
                errorPage("There is no such issue in the database..."); //add error message
                return false;
            } else return true;
        }
        return true;
 }

 loadFile(file_name, file_type) {

     if (file_type=="js") {

           let promise = new Promise(function(resolve, reject) {

              let file=document.createElement('script');
              file.setAttribute("src", file_name);
              document.head.appendChild(file);

              file.addEventListener('load', function() {
                  resolve(file);
              }, false);

              file.addEventListener('file', function() {
                 reject("Something went wrong. The file couldn't be loaded! Check the url");
              }, false);
          });

         return promise;
     }
     else if (file_type=="css") {

         let file=document.createElement("link")
         file.setAttribute("rel", "stylesheet")
         file.setAttribute("href", file_name)
         document.head.appendChild(file);
     }
 }

 loadIssue() {

   this.issue = this.issue[0]; //issue was still one-element array

     this.loadFile(`templates/${this.issue.template}/template.js`,"js").then(function(result) {
         //everything is okay
         this.loadFile(`${this.issue.url}/pages.js`,"js").then(function(result) {

            console.info('Pages loaded properly!')
            this.createPages(pages); //generate pages

         }, function(err) {
             console.error(err); // error while loading the file
             this.errorPage("Pages file not found..."); //add error message
         });

     }, function(err) {
         console.error(err); // error while loading the file
         let errorPage = document.createElement('article'); //create "page" for 404 not found
         errorPage.className = "not_found"; //add class not_found for css styling
         errorPage.innerHTML = "<h1>Template file not found...</h1>"; //add error message
         this.container.appendChild(errorPage); //append new page to .content
     });

     this.loadFile(`templates/${this.issue.template}/style.css`,"css");
     this.loadFile(`${this.issue.url}/style.css`,"css");

 }

 errorPage(message) {

     let errorPage = document.createElement('article'); //create "page" for 404 not found
     errorPage.className = "not_found"; //add class not_found for css styling
     errorPage.innerHTML = `<h1>${message}</h1>`; //add error message
     this.container.appendChild(errorPage); //append new page to .content

 }

  setNavTo(page) {

   $('nav h2').innerText = pages[page-1].title;
   $('nav a:first-of-type').innerHTML = (pages[page-2] != undefined) ? pages[page-2].title : 'Główna';
   $('nav a:first-of-type').href = `javascript:scrollToPage(${page-1})`;
   $('nav a:last-of-type').innerHTML = (pages[page] != undefined) ? pages[page].title : 'Koniec';
   $('nav a:last-of-type').href = (page+1 <= pages.length) ? `javascript:scrollToPage(${page+1})` : 'javascript:scrollToPage(0)';

 }

 //scrollToPage
 scrollToPage(page = 0) {
   presentPage = page;
   var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) * page;
   window.scrollIt(w, 1);
   $All('.content .page').forEach((item) => item.classList.remove('active'));
   if(page <= pages.length) $(`.content article:nth-of-type(${page+1})`).classList.add("active");
   if(page > 0) setNavTo(page);
 }

 createPages(pages) {

   //create front page
   let front_page = document.createElement('article'); //create "page"
   front_page.className = "front_page"; //add class
   front_page.innerHTML = `
     <img src="${issue.cover}" alt="cover" class="cover">
     <button><span class="fa fa-play" aria-hidden="true"></span></button>
   `;

   this.container.appendChild(front_page);

   this.container.innerHTML += pages.map((item) => { //loop every page

      //create new page
      return `
      <article class="page">
         ${item.content}
      </article>
      `;

   }).join('');

 //plug play action to "play" button
  $(".front_page button").addEventListener("click", function() { this.scrollToPage(1); },false);

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


}

let mag = new Magazine({
  "id": 1,
  "social": true
}, data);
