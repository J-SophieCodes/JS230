$(function() {
  $('.thumbnails').on('click', 'img', function(event) {
    event.preventDefault();
    $('.selected').toggleClass('selected');
    $('#image').stop().attr('src', $(this).attr('src')).hide().fadeIn();
    $(this).closest('li').toggleClass('selected');
  });
});