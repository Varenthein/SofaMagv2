const container = document.querySelector('.content'); //get magazine container
console.log('Ttest');
/* A few helping functions */


//Adding files function
function loadFile(file_name, file_type) {
    if (file_type=="js"){ //if filename is a external JavaScript file
        let file=document.createElement('script')
        file.setAttribute("src", file_name)
        document.head.appendChild(file);
    }
    else if (file_type=="css"){ //if filename is an external CSS file
        var file=document.createElement("link")
        file.setAttribute("rel", "stylesheet")
        file.setAttribute("href", file_name)
        document.head.appendChild(file);
    }
}

//A little hack for creating window.$_GET helper ;)
window.$_GET = location.search.substr(1).split("&").reduce((o,i)=>(u=decodeURIComponent,[k,v]=i.split("="),o[u(k)]=v&&u(v),o),{}); //get data from $_GET

if(window.$_GET['id'] == "undefined") { //if id isn't specified

   let errorPage = document.createElement('article'); //create "page" for 404 not found
   errorPage.className = "not_found"; //add class not_found for css styling
   errorPage.innerHTML = "<h1>404 not found...</h1>"; //add error message
   document.querySelector('content').appendChild(errorPage); //append new page to .content

} else {

  /*issue = data.filter(item => item.id == $_GET['id'] );
  if(issue.length < 1) document.querySelector('body').innerHTML = "<p>There is no such file...</p>"; //if there is no book with such id
  else {

    issue = issue[0];

    //load styling files and data
    loadFile(`templates/${issue.template}/template.js`,"js");
    loadFile(`templates/${issue.template}/style.css`,"css");
    loadFile(`${issue.url}/pages.js`,"js",true);
    loadFile(`${issue.url}/style.css`,"css");

  }*/
}
