let inventory;

(function() {
  inventory = {
    lastId: 0,
    collection: [],

    setDate: function() {
      let date = new Date();
      // $("#order_date").text(date.toUTCString());
      let orderDate = document.querySelector('#order_date');
      orderDate.textContent = date.toUTCString();
    },

    cacheTemplate: function() {
      // let $iTmpl = $("#inventory_item").remove();
      // this.template = $iTmpl.html();
      let itemTemplate = document.querySelector("#inventory_item");
      this.template = Handlebars.compile(itemTemplate.innerHTML);
      itemTemplate.remove();
    },

    add: function() {
      this.lastId++;
      let item = {
        id: this.lastId,
        name: "",
        stock_number: "",
        quantity: 1
      };
      this.collection.push(item);

      return item;
    },

    remove: function(idx) {
      this.collection = this.collection.filter(function(item) {
        return item.id !== idx;
      });
    },

    get: function(id) {
      let found_item;

      this.collection.forEach(function(item) {
        if (item.id === id) {
          found_item = item;
          return false;
        }
      });

      return found_item;
    },

    update: function(editedItem) {
      // var id = this.findID($item),
      // item = this.get(id);
      // item.name = $item.find("[name^=item_name]").val();
      // item.stock_number = $item.find("[name^=item_stock_number]").val();
      // item.quantity = $item.find("[name^=item_quantity]").val();

      let id = this.findID(editedItem);
      let item = this.get(id);
      item.name = editedItem.querySelector("[name^=item_name]").value;
      item.stock_number = editedItem.querySelector("[name^=item_stock_number]").value;
      item.quantity = editedItem.querySelector("[name^=item_quantity]").value;
    },

    newItem: function(e) {
      e.preventDefault();

      // var item = this.add(),
      // $item = $(this.template.replace(/ID/g, item.id));
      // $("#inventory").append($item);

      let inventory = document.querySelector("#inventory");
      let item = this.add();
      inventory.insertAdjacentHTML('beforeend', this.template(item));
    },

    findParent: function(e) {
      // return $(e.target).closest("tr");
      return e.target.closest("tr");
    },

    findID: function(item) {
      // return +$item.find("input[type=hidden]").val();
      return Number(item.querySelector("input[type=hidden]").value);
    },

    deleteItem: function(e) {
      // e.preventDefault();
      // var $item = this.findParent(e).remove();
      // this.remove(this.findID($item));

      if (e.target.classList.contains('delete')) {
        let item = this.findParent(e);
        item.remove();
        this.remove(this.findID(item));
      }
    },

    updateItem: function(e) {
      // var $item = this.findParent(e);
      // this.update($item);
      if (e.target.tagName === 'INPUT') {
        let item = this.findParent(e);
        this.update(item);
      }
    },

    bindEvents: function() {
      let addBtn = document.querySelector("#add_item");
      let inventory = document.querySelector("#inventory");

      addBtn.onclick = this.newItem.bind(this);
      inventory.onclick = this.deleteItem.bind(this);
      inventory.addEventListener('focusout', this.updateItem.bind(this));

      // $("#add_item").on("click", $.proxy(this.newItem, this));
      // $("#inventory").on("click", "a.delete", $.proxy(this.deleteItem, this));
      // $("#inventory").on("blur", ":input", $.proxy(this.updateItem, this));
    },

    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    }
  };
})();

// $($.proxy(inventory.init, inventory));
document.addEventListener('DOMContentLoaded', inventory.init.bind(inventory));