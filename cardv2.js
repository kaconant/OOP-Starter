class Card {
    constructor (suit, point) {
        this.suit = suit;
        this.point = point;
        this.initialize();
    }

    initialize() {

    };

    getImageURL() {
        return 'cards/' + this.point + this.suit[0] + '.png'; 
    }

    // get suit() {
    //     return 'my suit is ' + this.suit
    // }

    // set suit() {
    // }

};

var card = new Card('h', 3);

card.suit = 'c';

// extends -- parent child relationship
// super