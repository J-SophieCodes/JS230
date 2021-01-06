// source: https://d186loudes4jlv.cloudfront.net/fe2/exercises_objects_and_dom/dom_assignment.html

/* Q1
Use JavaScript to set a class of 'heading' to the heading (the h1 element).
*/
// document.querySelector('h1').classList.add('heading');
document.getElementById('primary_heading').setAttribute('class', 'heading');

/* Q2
Use JavaScript to set the class of the ul element to 'bulleted'.
*/
document.getElementById('list').setAttribute('class', 'bulleted');

/* Q3
Toggle element with id 'notice' between visible and hidden onclick
*/
// solution 1
// document.getElementById('toggle').onclick = function() {
//   document.getElementById('notice').classList.toggle('hidden');
// };

// solution 2
let notice = document.getElementById('notice');
document.getElementById('toggle').onclick = e => {
  e.preventDefault();
  if (notice.getAttribute('class') === 'hidden') {
    notice.setAttribute('class', 'visible');
  } else {
    notice.setAttribute('class', 'hidden');
  }
};

/* Q4
Add an onclick event to the element we show and hide above. This time, the 
function should set the class of the element to 'hidden'.
*/
document.getElementById('notice').onclick = e => {
  e.preventDefault();
  e.currentTarget.setAttribute('class', 'hidden');
};

/* Q5
Locate the multiplication paragraph and change the text to the result of the 
arithmetic problem.
*/
document.getElementById('multiplication').innerText = String(13 * 9);

/* Q6
Set the ID of the body element to 'styled' to apply the rest of the styles 
from the original file. The body tag in this file doesn't have an ID, so you 
must locate it by some other means.
*/
document.body.setAttribute('id', 'styled');
