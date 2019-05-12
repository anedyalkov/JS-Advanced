function makeCard(face, suit) {
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = ['H', 'S', 'D', 'C'];
    if (!faces.includes(face)) {
        throw new Error("Invalid face");
    }
    if (!suits.includes(suit)) {
        throw new Error("Invalid suit");
    }

    let card = {
        face: face,
        suit: suit,
        toString: function () {
            let chars = {
                S: "\u2660",
                H: "\u2665",
                D: "\u2666",
                C: "\u2663"
            };
            return `${this.face}${chars[suit]}`
        }
    };
    return card;
}

try {
    console.log('' + makeCard('J', 'S'));
} catch (err) {
    console.log(err.message);
    console.log(err.name);
    console.log(err.stack);
}