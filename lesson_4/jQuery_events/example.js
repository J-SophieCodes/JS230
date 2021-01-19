// $(function() {
//   let $p = $('p');
//   const OUTPUT = 'Your favorite fruit is ';

//   $('a').on('click', function(event) {
//     event.preventDefault();
//     let $anchor = $(this);
//     $p.text(OUTPUT + $anchor.text());
//   });

//   $('form').on('submit', function(event) {
//     event.preventDefault();
//     let $input = $(this).find('input[type=text]');
//     $p.text(OUTPUT + $input.val());
//   });
// });

// using event delegation and convenience method
$(function() {
  var $p = $('p');
  var OUTPUT = 'Your favorite fruit is ';

  $('ul').on('click', 'a', function(e) {  // event delegation
    e.preventDefault();
    var $event = $(this);
    $p.text(OUTPUT + $event.text());
  });

  $('form').submit(function(e) {  // convenience method for .on('click', callback)
    e.preventDefault();
    var $input = $(this).find('input[type=text]');
    $p.text(OUTPUT + $input.val());
  });
});