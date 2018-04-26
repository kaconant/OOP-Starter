/*
Hand constructor:
A hand is simply represented as a collection of cards, 
but it would also be convenient for a hand to be able to return it's point value. 

also create:
addCard
getPoints
*/

function Hand() {
    this.cards= [];
};

Hand.prototype.addCard = function(card) {
    this.cards.push(card);
};

Hand.prototype.getPoints = function() {
    var sum = 0;
    for (var i=0; i < this.cards.length; i++) {
        sum += this.cards[i].point;
    }
    return sum;
}
