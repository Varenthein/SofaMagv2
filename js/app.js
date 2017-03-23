const container = document.querySelector('.content'); //get magazine container
let issue = ""; //global issue variable

/* A few helping functions */


//Adding files function
function loadFile(file_name, file_type) {
    if (file_type=="js"){ //if filename is a external JavaScript file

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
    else if (file_type=="css"){ //if filename is an external CSS file
        var file=document.createElement("link")
        file.setAttribute("rel", "stylesheet")
        file.setAttribute("href", file_name)
        document.head.appendChild(file);
    }
}

Element.prototype.scrollTo = function(to,speed) {
  if(this.scrollLeft < to) {
    this.scrollLeft += 1;
    console.log(this.scrollLeft);
    setTimeout(function() { this.scrollTo(to,speed)}, speed);
  }
}

function animate(property,to,i) {
  if(property < to) {
    property += i;
    document.body.scrollLeft = property;
    console.log(property);
    setTimeout(function() { animate(property,to,i++)}, 1);
  }
}

function test() {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  document.body.scrollTo(w, 100);
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
     <article>
        ${item.content}
     </article>
     `;

  }).join('');

//plug play action to "play" button
 container.querySelector(".front_page button").addEventListener("click",test,false);

}

function errorPage(message) {

  let errorPage = document.createElement('article'); //create "page" for 404 not found
  errorPage.className = "not_found"; //add class not_found for css styling
  errorPage.innerHTML = `<h1>${message}</h1>`; //add error message
  document.querySelector('.content').appendChild(errorPage); //append new page to .content

}

/* HELPING FUNCTIONS END */

//A little hack for creating window.$_GET helper ;)
window.$_GET = location.search.substr(1).split("&").reduce((o,i)=>(u=decodeURIComponent,[k,v]=i.split("="),o[u(k)]=v&&u(v),o),{}); //get data from $_GET


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

             console.info('Pages loaded properly!')
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
          document.querySelector('.content').appendChild(errorPage); //append new page to .content
      });

      loadFile(`templates/${issue.template}/style.css`,"css");
      loadFile(`${issue.url}/style.css`,"css");

  }
}

/* end of loading magazine */
