function aggregate(array) {
    console.log("Sum: ", array.reduce((a, b) => a + b));
    console.log("Min: ", array.reduce((a, b) => Math.min(a, b)));
    console.log("Max: ", array.reduce((a, b) => Math.max(a, b)));
    console.log("Product: ", array.reduce((a, b) => a * b));
    console.log("Join: ", array.reduce((a, b) => `${a}${b}`));

    /*console.log("Sum: ", reducer(array, (a, b) => a + b));
    console.log("Min: ", reducer(array, (a, b) => Math.min(a, b)));
    console.log("Max: ", reducer(array, (a, b) => Math.max(a, b)));
    console.log("Product: ", reducer(array, (a, b) => a * b));
    console.log("Join: ", reducer(array, (a, b) => `${a}${b}`));*/
}

/*function reducer(array, operator, initialValue) {
    let copyArray = array.slice(0);

    let result = initialValue;
    if (initialValue === undefined) {
        result = copyArray.shift();
    }

    for (let element of copyArray) {
        result = operator(result, element);
    }

    return result;
}*/

aggregate([5, -3, 20, 7, 0.5]);