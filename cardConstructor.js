function Card(point, suit) {
    this.point = point;
    this.suit = suit;
};

Card.prototype.getImageURL = function() {
    return "<img src = 'images/card.png' /> "
}

function Hand() {
    this.hand = [];
}

Hand.prototype.addCard = function(card) {
    this.hand.push(card);
    this.points += card.point;
};

Hand.prototype.getPoints = function() {
    return this.points;
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

Deck.prototype.draw = function() {
    var drawCard = this.deck.pop();
    return drewCard;
};

Deck.prototype.shuffle = function() {
    return this.deck.sort(function(a,b) {
        return .5 - Math.random()
    });
};

Deck.prototype.numCardsLeft = function() {
    return this.deck.length;
};

var myCard = new Card(point,suit);
