$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var items = ["item1", "item2", "item3", "item4", "item5", "item6"];
    var itemArray = [];
    items.forEach(function(item) {
      var userInput = $("input#" + item).val();
      $("." + item).text(userInput);
      itemArray.push(userInput);
      });
      lastArray = itemArray.sort();
      console.log(itemArray);
      $("#shopping").show();

      event.preventDefault();
    });
  });
