

$(document).ready(function () {
  $('.formOne').submit(function () {
    // we make two arrays. One is for pattern of card and the other is number from ace to king
    var patterns = ['club', 'spade', 'heart', 'diamond'];
    var numbers = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];

    // we make empty array to store every possible cards which are 52 cards (13 * 4 = 52)
    var cards = [];

    // we use nested forEach loop to enumerate whole 52 card set
    patterns.forEach(function (pattern) {
      numbers.forEach(function (number) {
        var card = (number + ' of ' + pattern);
        cards.push(card);
      });
    });

    // Here, we try to shuffle whole card set using random function in javascript.
    // In this way, we naturally avoid duplicated selection via direct random
    // selection from numbers and patterns arrays
    var shufflecards = [];
    for (i = 1; i < 53; i += 1) {
      var shuffle = cards[Math.floor(Math.random() * cards.length)];
      shufflecards.push(shuffle);
    }

    // We can see shuffled whole card deck in console.log()
    console.log(shufflecards);
    $('#cardDeck').show();
    event.preventDefault();
  });
});
