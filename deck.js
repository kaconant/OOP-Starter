/*
Deck constructor:
A deck is also represented as a collection of cards, 
but it would also be convenient for it to be able to shuffle itself, 
and be asked to draw a card. 

also create:
draw
shuffle
numCardsLeft
*/


function Deck() {
    this.cards = [];
    var suits = ['clubs','hearts','spades','diamonds'];
    for (var i=0; i<52; i++) {
        var currentSuit = suits[Math.floor(i/13)] // round down  -- 0, 1, 2, 3
        var currentPoint = (i%13) + 1; // adding the +1 make it start at 1 and not 0
        this.deck.push(new Card(currentPoint, currentPoint));
        };
    this.shuffle();
    };

Deck.prototype.shuffle = function() {
    this.cards.sort(function(a, b) { // expect call back function with 2 parameters - must be a negative or positive number
        return Math.random() - 0.5;  // math.random does 0-1 // the .5 provides more range around 0. 
    });
};  
    

Deck.prototype.draw = function() {
    return this.cards.pop();
};

Deck.prototype.numCardsLeft = function() {
    return this.cards.length;
};