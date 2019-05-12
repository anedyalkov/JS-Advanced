function solve(ticketsDescription, sortingCriteria) {
    let ticketsData = [];
    class Ticket {
        constructor(destName, price, status) {
            this.destination = destName;
            this.price = +price;
            this.status = status;
        }
    }
    for (let line of ticketsDescription) {
        let [dest, price, status] = line.split('|');
        let currTicket = new Ticket(dest, price, status);
        ticketsData.push(currTicket);
    }

    return ticketsData.sort((a, b) => {
        return a[sortingCriteria] > b[sortingCriteria];
    });

}

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination'
))