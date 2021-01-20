const Calculate = {
  "+": function(num1, num2) {
    return num1 + num2;
  },

  "-": function(num1, num2) {
    return num1 - num2;
  },

  "/": function(num1, num2) {
    return num1 / num2;
  },

  "*": function(num1, num2) {
    return num1 * num2;
  },
};

$(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    let num1 = parseFloat($('#first-number').val());
    let num2 = parseFloat($('#second-number').val());
    let op = $('#operator').val();
    let result = Calculate[op](num1, num2);
    $('#result').text(String(result));
    console.log(result, 'done');
  });
});