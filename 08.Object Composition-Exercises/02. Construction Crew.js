function solve(worker) {

    if (!worker.handsShaking) {
        return Object.create(worker);

    } else {
        let newWorker = Object.create(worker);
        newWorker.bloodAlcoholLevel += worker.weight * 0.1 * worker.experience;
        newWorker.handsShaking = false;
        return newWorker;
    }
}

console.log(solve({
    weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true
}));