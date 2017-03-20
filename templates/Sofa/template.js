/* Sofa template */

const title_page = function() {
  this.img = "";
  this.get = () => `<img src='${issue.url}/img/cover.png' style='width:100%' alt="">`;
}

const image = function(img) {
  this.img = img;
  this.get = () => `<img src='${issue.url}/img/${img}' style='width:100%' alt="">`;
}

const page = function(page_nr = 0, text = "Empty", excerpt = "", type = "content", title = "Untitled", author = "Unknown", category = "No category", main_image = "", tags = [], license) {
  this.text = text;
  this.excerpt = excerpt;
  this.type = type;
  this.title = title;
  this.author = author;
  this.category = category;
  this.main_image = main_image;
  this.tags = tags;
  this.license = license;
  this.get = () => {
  if(this.type != "with_image") {
     return `
     <div class="text">
      <div class="content">
      ${this.text}
      </div>
    </div>
    `;
  }
  else {
    let title_len = this.title.length;
    let title_size = 100-this.title.length+'px';
    if(parseInt(title_size) < 20) title_size = "38px";

    return `
    <span class="nr"><strong>${page_nr}</strong></span>
    <header style="background:url('${issue.url}/img/${this.main_image}');background-size:cover;background-position:center center;">
      <div class="fog"></div>
      <div class="cat"><span class="romb"></span>${this.category}</div>
      <h1 style="font-size:${title_size}">${this.title}</h1>
      <div class="tags"><span class="license">${this.license}</span>${this.tags.join(", ")}</div>
    </header>
      <div class="text">
        <img alt="${this.author}" src="${issue.url}/img/authors/${this.author}.png">
        <p><strong>${this.excerpt}</strong></p>
         <div class="content">
         ${this.text}
         </div>
      </div>
    `; }
}
}

const fullpage = function(page_nr = 0, title = "Untitled", category = "No category", main_image = "", tags = [], license) {
  this.title = title;
  this.category = category;
  this.main_image = main_image;
  this.tags = tags;
  this.license = license;
  this.get = () => {

    let title_len = this.title.length;
    let title_size = 100-this.title.length+'px';

    return `
    <span class="nr"><strong>${page_nr}</strong></span>
    <header style="background:url('${issue.url}/img/${this.main_image}');background-size:cover;background-position:center center;height:100%">
      <div class="cat"><span class="romb"></span>${this.category}</div>
      <h1 style="font-size:${title_size}">${this.title}</h1>
      <div class="tags"><span class="license">${this.license}</span>${this.tags.join(", ")}</div>
    </header>
    `;
}
}

const fulltext = function(page_nr = 0, text = "Empty", excerpt = "", author) {
  this.text = text;
  this.excerpt = excerpt;
  this.author = author;
  this.get = () => {
     return `
     <div class="text">
       <img alt="${this.author}" src="${issue.url}/img/authors/${this.author}.png">
       <p><strong>${this.excerpt}</strong></p>
        <div class="content">
        ${this.text}
        </div>
     </div>
    `;

}
}
