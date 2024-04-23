let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const object in statistics) {
    if (object[0] == 'r' || statistics[object] % 2 != 0) {
        console.log(statistics[object]);
    }
}
