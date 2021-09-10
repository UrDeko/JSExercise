function demo() {

    let car = {
        model: "328",
        make: "BMW",
        color: "blue"
    };

    car.color = "red";
    car["turbo"] = "on";

    for(let element in car) {
        console.log(`key - ${element} | value - ${car[element]}`);
    }

    console.log(car);
}

demo();