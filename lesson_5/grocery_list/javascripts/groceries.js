(function groceryListManager() {  // IIFE to isolate namespace
  $(function() {
    let groceryItem = Handlebars.compile($('#groceryItem').html());

    $('form').submit(function(event) {
      event.preventDefault();
      let name = $('#name').val();
      let quantity = $('#quantity').val() || 1;
      let item = {name, quantity};

      $('#grocery-list').append(groceryItem(item));
      this.reset();
    });
  });
})();