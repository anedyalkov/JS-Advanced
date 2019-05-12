function printDeckOfCards(input) {
    let deck = [];
    for (let i = 0; i < input.length; i++) {
        let face = input[i].substring(0, input[i].length - 1);
        let suit = input[i].substr(input[i].length - 1, 1);

        try {
            deck.push(makeCard(face, suit));
        } catch (err) {
            console.log("Invalid card: " + input[i]);
            return;
        }
    }

    console.log(deck.join(" "));

    function makeCard(face, suit) {
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = ['H', 'S', 'D', 'C'];
        if (!faces.includes(face)) {
            throw new Error("Invalid card");
        }
        if (!suits.includes(suit)) {
            throw new Error("Invalid card");
        }

        return {
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
    }
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['1C', '3D', 'QD', '1C']);