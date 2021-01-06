// reference page: https://d3905n0khyu9wc.cloudfront.net/the_dom/polar_bear_wiki.html

function walk(node, callback) {
  callback(node);                                                   // do something with node
  for (let index = 0; index < node.childNodes.length; index += 1) { // for each child node
    walk(node.childNodes[index], callback);                         // recursively call walk()
  }
}

// Count the images on the page, then count the PNG images. Log both results.
let imgCounts = 0;
let pngCounts = 0;

walk(document, node => {
  if (node.nodeName === 'IMG') {
    imgCounts++;
    if (node.src.includes('.png')) {
      pngCounts++;
    }
  }
});

console.log(imgCounts, pngCounts);

// solution
// let images = [];
// walk(document, node => {
//   if (node.nodeName === 'IMG') {
//     images.push(node);
//   }
// });

// console.log(images.length);                      // 48 total images

// let pngCount = images.filter(img => img.getAttribute('src').match(/png$/)).length;

// console.log(pngCount);

// Change the link color to red for every link on the page.
walk(document, node => {
  if (node.nodeName === 'A') {
    node.style.color = 'red';
  }
});