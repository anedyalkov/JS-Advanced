function solve() {
     let summary = {};

    for (let i = 0; i < arguments.length; i++) {
        let object = arguments[i];
        let type = typeof (object);
        console.log(type + ': ' + object);

        if(!summary.hasOwnProperty(type)){
            summary[type] = 1
        } else {
            summary[type]++;
        }
    }
        let sortedSummary = Object.entries(summary)
            .sort((a, b) => {
                return b[1] - a[1];
            });
        for(let [obj,occurance] of sortedSummary){
            console.log(`${obj} = ${occurance}`);
        }
}

solve({
    name: 'bob'
}, 3.333, 9.999)