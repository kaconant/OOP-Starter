/*
Create a constructor Card. 
A card object will have 2 properties:
point - the point value of the card: a number between 1 and 13.
suit - the suit of the card: one of diamonds, clubs, hearts and spades.
*/

function Card(suit, point) {
    this.suit = suit;
    this.point = point;
    console.log('Card created!')
};

/*
getImageUrl()
Add a getImageUrl method to card objects by adding it as a property to Card.prototype. 
The method should return the URL path to the png image file for the card.
*/

Card.prototype.getImageURL = function() {
    return 'cards/' + this.point + this.suit[0] + '.png';
};


