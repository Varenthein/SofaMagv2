/*******************************************************/
/*                  jsBase toolkit                     */
/*******************************************************/

/* START */

console.info("jsBase® initialized");


/* ELEMENTS - DOM */

NodeList.prototype.forEach = Array.prototype.forEach;

let $ = function (selector) {
  return document.querySelector(selector);
};

let $All = function (selector) {
  return document.querySelectorAll(selector);
};

Element.prototype.fadeIn = function(callbackF) {

  var s = this.style;
  s.opacity = parseFloat(0);
  s.display = 'block';
  (function fade(){if((s.opacity-=(-.05))>1) { if(typeof callbackF === 'function') callbackF(); } else setTimeout(fade,30)})();

}

Element.prototype.fadeOut = function(callbackF) {

  var s = this.style;
  s.opacity = 1;
  s.display = 'block';
  (function fade(){if((s.opacity-=.05)<=0) { s.display="none"; if(typeof callbackF === 'function') callbackF(); } else setTimeout(fade,30)})();


}

/* WINDOW */

Window.prototype.scrollIt = function(to,speed) {
function adjust() { this.pageXOffset = to; }
if(this.pageXOffset < to) (move = () => { if((this.pageXOffset+=10)<=to+10) { this.scroll(this.pageXOffset,0); setTimeout(move,speed); } else setTimeout(adjust, speed+1)})();
else (move = () => { if((this.pageXOffset-=10)>=to+10) { this.scroll(this.pageXOffset,0); setTimeout(move,speed); } else setTimeout(adjust, speed+1)})();
}

/* HTTP protocol */

window.$_GET = location.search.substr(1).split("&").reduce((o,i)=>(u=decodeURIComponent,[k,v]=i.split("="),o[u(k)]=v&&u(v),o),{}); //get data from $_GET

/* FILES */

function loadFile(file_name, file_type) {

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
