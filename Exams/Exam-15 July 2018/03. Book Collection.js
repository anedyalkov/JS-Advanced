class BookCollection {
    // room(String), shelfGenre(String), shelf(an array), shelfCapacity(Number)
    constructor(shelfGenre, room, shelfCapacity) {
        this.room = room;
        this.shelfGenre = shelfGenre;
        this.shelf = [];
        this.shelfCapacity = shelfCapacity;
    }

    get shelfCondition() {
        return this.shelfCapacity - this.shelf.length;
    }
    get room() {
        return this._room;
    }
    set room(val) {
        if (val !== 'livingRoom' && val !== 'bedRoom' && val !== 'closet') {
            throw new Error(`Cannot have book shelf in ${val}`)
        }
        this._room = val;
    }

    addBook(bookName, bookAuthor, genre) {
        let book = {
            bookName,
            bookAuthor,
            genre
        }
        if (this.shelfCondition > 0) {
            this.shelf.push(book);
            this.shelf.sort((a, b) => {
                return a.bookAuthor.localeCompare(b.bookAuthor);
            })
        } else {
            this.shelf.shift();
            this.shelf.push(book);
        }

        return this;
    }
    throwAwayBook(bookName) {
        this.shelf = this.shelf.filter((book) => {
            return book.bookName !== bookName;
        });
    }

    showBooks(genre) {
        let output = '';
        output += `Results for search "${genre}":\n`;
        let shelf = this.shelf.filter((book) => {
                return book.genre === genre;
            })
            .map((book) => {
                return `\uD83D\uDCD6 ${book.bookAuthor} - "${book.bookName}"`;
            });

        output += shelf.join('\n');
        return output;

    }

    toString() {
        let output = '';
        if (this.shelf.length === 0) {
            output += `It's an empty shelf`;
        } else {
            output += `"${this.shelfGenre}" shelf in ${this.room} contains:\n`;
            for (let book of this.shelf) {
                output += `\uD83D\uDCD6 "${book.bookName}" - ${book.bookAuthor}\n`
            }
        }
        return output;
    }
}

// let livingRoom = new BookCollection("Programming", "livingRoom", 5)
//     .addBook("Introduction to Programming with C#", "Svetlin Nakov")
//     .addBook("Introduction to Programming with Java", "Svetlin Nakov")
//     .addBook("Programming for .NET Framework", "Svetlin Nakov");
// console.log(livingRoom.toString());
// let garden = new BookCollection("Programming", "garden");

// Shelf's capacity: 1
// Results for search "history":
// 📖 Cuentos para pensar - "The Guns of August"
// 📖 David McCullough - "John Adams"

let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
bedRoom.addBook("John Adams", "David McCullough", "history");
bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
console.log("Shelf's capacity: " + bedRoom.shelfCondition);
console.log(bedRoom.showBooks("history"));