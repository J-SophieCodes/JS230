$(() => {
  let character;
  let $accordion = $('#accordion');

  $('form').submit(function(event) {
    event.preventDefault();
    character = $('#key').val();
  });

  $(document).off('keypress').on('keypress', function(event) {
    if (event.key !== character) {
      return;
    }
    $('a').trigger('click');
  });

  $('a').click(function(event) {
    event.preventDefault();
    $accordion.slideToggle();
  });
});
