let main = document.querySelector('main');
let bodyHeader = main.nextElementSibling;
let headerh1 = document.querySelector('main h1');
document.body.insertBefore(bodyHeader, main);
bodyHeader.insertAdjacentElement('afterbegin', headerh1);

let images = document.querySelectorAll('img');
let captions = document.querySelectorAll('figcaption');
captions[0].insertAdjacentElement('beforebegin', images[1]);
captions[1].insertAdjacentElement('beforebegin', images[0]);

let figures = document.querySelectorAll('figure');
let article = document.querySelector('article');
article.insertAdjacentElement('beforeend', figures[0]);
article.insertAdjacentElement('beforeend', figures[1]);

// solution
// let header = document.querySelector("body > header");
// let h1 = document.querySelector("main > h1");
// header.insertBefore(h1, header.firstChild);
// document.body.insertBefore(header, document.body.firstChild);

// let [ chinStickFigure, babyMopFigure ] = document.querySelectorAll("figure");

// let babyMopImage = chinStickFigure.querySelector("img");
// let chinStickImage = babyMopFigure.querySelector("img");
// chinStickFigure.insertBefore(chinStickImage, chinStickFigure.firstChild);
// babyMopFigure.insertBefore(babyMopImage, babyMopFigure.firstChild);

// let article = document.querySelector("article");
// article.insertBefore(chinStickFigure, null);
// article.insertBefore(babyMopFigure, null);