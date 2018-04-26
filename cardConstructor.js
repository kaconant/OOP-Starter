function Card (point, suit) {
    this.point = point;
    this.suit = suit;
};

Card.prototype.render = function() {
    return "<img src = 'images/card.png' /> "
}

function Deck() {
    var deck = [];
    var suits = ['clubs','hearts','spades','diamonds'];
    for (var i=0; i<52; i++) {
        var newPoint = (i%13) + 1;
        var newSuit = suits[Math.floor(i/13)]
        var newCard = (newPoint, newSuit);
        this.deck.push(newCard);
    };
};

var myCard = new Card(point,suit);
