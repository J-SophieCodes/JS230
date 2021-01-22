/* eslint-disable max-lines-per-function */
(function() {
  const Members = {
    0: {
      firstName: "Kevin",
      lastName: "Wang",
      profile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },

    1: {
      firstName: "Louis",
      lastName: "Burton",
      profile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },

    2: {
      firstName: "Kasper",
      lastName: "Salto",
      profile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },

    3: {
      firstName: "Chris",
      lastName: "Lee",
      profile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
  };

  $(function() {
    Handlebars.registerHelper('lowercase', function(word) {
      return word.toLowerCase();
    });

    let modalTemplate = Handlebars.compile($('#modalTemplate').html());

    $('#team ul').on('click', 'a', function(event) {
      event.preventDefault();

      let $memberId = $(this).attr('data-memberId');
      let member = Members[$memberId];
      $('body').prepend(modalTemplate(member));
      $('.overlay, .modal').fadeIn(600);

      let $memberImg = $(".modal article img");
      $memberImg.width($memberImg.width() * 0.7);

      function closeModal(event) {
        event.preventDefault();
        $(document).off('keydown');
        $('.modal, .overlay').remove();
        console.log('closed!');
      }

      $('#close').click(closeModal);
      $('.overlay').click(closeModal);

      $(document).keydown(function(event) {
        event.preventDefault();
        if (event.key === "Escape") {
          console.log('Escaping!');
          $('#close').trigger('click');
        }
      });
    });
  });
})();