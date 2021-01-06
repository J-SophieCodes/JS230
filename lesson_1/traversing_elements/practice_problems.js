// source: https://d3905n0khyu9wc.cloudfront.net/the_dom/polar_bear_wiki.html

/* Q1
Write some JavaScript code to retrieve a word count for each h2 heading on 
the page.
*/
let h2_headings = document.querySelectorAll('h2');
[].slice.call(h2_headings).map(heading => {
  return heading.textContent.trim().split(' ').length;
});


/* Q2
The page has a table of contents with the title "Contents" and links to the 
different content sections on "Naming and etymology," "Taxonomy and evolution," 
etc.

Use three different DOM methods to retrieve a reference to the div element 
that contains the table of contents.
*/

document.querySelector('#toc');
document.querySelector('.toc');
document.getElementById('toc');

/* Q3
Write some JavaScript code to change the color for every odd indexed link in 
the table of contents to green.
*/
let links = document.querySelectorAll('#toc a');
for (let idx = 1; idx < links.length; idx += 2) {
  links[idx].style.color = 'green';
}

/* Q4
Write some JavaScript code to retrieve the text of every thumbnail caption
on the page.
*/
let captionNodes = document.querySelectorAll('.thumbcaption');
let captions = [].slice.call(captionNodes).map(node => node.textContent.trim());
console.log(captions);

/* Q5
You can think of the scientific classification of an animal as a series of 
key-value pairs. Here, the keys are taxonomic ranks (Domain, Kingdom, Phylum, 
etc.). The values are the specific groups to which the animal belongs.

Write JavaScript code that extracts the classification of animals from the 
web page and logs an Object that uses the ranks as keys and the groups as 
values. You may assume the taxonomic ranks to use as keys is provided for 
you as an array.
*/
// solution 1
// let table = document.querySelector('tbody');
// let rows = table.querySelectorAll('tr');
// let textInRows = [].slice.call(rows).map(row => row.textContent.trim().replace(/\s+/g, ' '));
// let taxonomy = textInRows.filter(item => item.includes(':'))
//                          .map(item => item.split(': '));
// console.log(Object.fromEntries(taxonomy));

// solution 2
const RANKS = ['Kingdom', 'Phylum', 'Clade', 'Class', 'Order', 'Suborder', 'Family', 'Genus', 'Species'];
let tds = document.querySelectorAll('.infobox td');
let classification = {};

[].slice.call(tds).forEach(node => {
  RANKS.forEach(rank => {
    if (node.textContent.indexOf(rank) !== -1) {
      classification[rank] = node.nextElementSibling.textContent;
    }
  });
});

console.log(classification);