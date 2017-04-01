////////////////////////////////////////////////////////////////
///                                                          ///
///                     SofaSport Template                   ///
///                                                          ///
///  author: Paweł Zagrobelny                                ///
///  license: granted only for SofaSport.pl                  ///
///  All rights reserved                                     ///
///  version: 2.1                                            ///
///                                                          ///
////////////////////////////////////////////////////////////////



//config

config.social = true; //show social buttons
config.text_at = window.innerHeight; //determine where actual text starts

//--config end

//Standard page template
const page = function(title = "Untitled", author = "Unknown", category = "No category", main_image = "", tags = [], license, excerpt, text) {

  let title_len = title.length;
  let title_size = 120-title.length+'px';
  if(parseInt(title_size) < 20) title_size = "38px";

  this.get = () => {
  return `
  <header style="background:url('${issue.url}/img/${main_image}');background-size:cover;background-position:center center;">
    <div class="fog"></div>
    <div class="cat"><span class="romb"></span>${category}</div>
    <h1 style="font-size:${title_size}">${title}</h1>
    <span class="author">Autor: ${author}</span>
    <div class="tags"><span class="license">${license}</span><stong>Tagi: </strong> ${tags.join(", ")}</div>
  </header>
  <div class="text">
      <p><strong>${excerpt}</strong></p>
      ${text}
      <p class="please-share" style="display: none">
      <span class="fa fa-heart-o"></span>
      Spodobał Ci się tekst? Udostępnij go na fb :)</p>
  </div>
  `;
 }
}

//Standard page template
const html_default = function(text) {

  this.get = () => {
  return text;
 }
}
