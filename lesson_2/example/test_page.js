/*
You want to display an alert when the user clicks the "Alert" button.
The alert should display the current text content of the textarea element.
*/

// Steps to handle event:

/* Step 1 - Identify the event you need to handle.
We want something to happen when the user clicks on the "Alert" button,
so we need to handle the click event.
*/

/* Step 2 - Identify the element that will receive the event.
In this example, we'll use the button since that's where the interaction
will occur.
*/

/* Step 3 - Define a function to call when this event occurs.
This function displays an alert using the contents of the textarea:
*/

function displayAlert(event) {
  let message = document.getElementById('message').value;
  alert(message);
}

/* Step 4 - Register the function as an event listener.
We can call addEventListener on a reference to the button:
*/

document.addEventListener('DOMContentLoaded', () => {
  let button = document.getElementById('alert');
  button.addEventListener('click', displayAlert); // registered displayAlert as the click listener
});