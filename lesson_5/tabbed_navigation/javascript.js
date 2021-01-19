$(function() {
  $('nav a').on('click', function(e) {
    e.preventDefault();
    let navItem = $(this).parent();
    navItem.addClass('selected');
    $('nav li').not(navItem).removeClass('selected');
    $('article').hide().filter('[data-block=' + $(this).attr('data-block') + ']').show();
  });
});