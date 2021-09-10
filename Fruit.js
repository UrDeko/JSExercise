function fruit(fruit, grams, pricePerKilo) {

    let kilograms = grams / 1000;
    let money = kilograms * pricePerKilo;

    console.log(`I need $${money.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}`);

}
fruit('orange', 2500, 1.80);