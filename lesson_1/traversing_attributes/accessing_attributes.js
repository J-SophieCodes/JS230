function walk(node, callback) {
  callback(node);                                                   // do something with node
  for (let index = 0; index < node.childNodes.length; index += 1) { // for each child node
    walk(node.childNodes[index], callback);                         // recursively call walk()
  }
}

/* Q1
starting with the document node, use the lastChild and childNodes 
properties to change the text color to red on the On the River 
heading and set its font size 48 pixels.
*/

// let html = document.lastChild; // first child is the doctype
// let body = html.lastChild; // head, text, body
// let h1 = childNodes[1]; // first child is a text node
// h1.style.color = 'red';
// h1.style.fontSize = '48px';

/* Q2
Count the paragraphs on the page, and then log the result.
*/

// solution 1 - walking the entire tree
// let count = 0;
// walk(document, (node) => {
//   if (node.nodeName === 'P') {
//     count++;
//   }
// });
// console.log(count);

// solution 2 - shallow count within body
// let html = document.lastChild;
// let bodyNodes = html.lastChild.childNodes;
// let count = [].slice.call(bodyNodes).filter(node => node.nodeName === 'P').length;
// console.log(count);

/* Q3
Retrieve the first word from each paragraph on the page and log the entire list.
*/
// let firstWords = [];
// walk(document, node => {
//   if (node.nodeName === 'P') {
//     let text = node.textContent.trim();  // or node.firstChild.data.trim();
//     let firstWord = text.split(' ')[0];
//     firstWords.push(firstWord);
//   }
// });
// console.log(firstWords);

/* Q4
Add the class stanza to each paragraph except the first.
*/
let first = true;
walk(document, node => {
  if (node.nodeName === 'P') {
    if (first) {
      first = false;
    } else {
      node.classList.add('stanza');
    }
  }
});