function addRemove(input) {
    
    let array = [];
    let number = 1;

    for (let i = 0; i < input.length; i++) {
        
        let command = input[i];
        if (command === "add") {
            array.push(number);
        } else {
            array.pop();
        }
        
        number++;
    }

    if (array.length > 0) {
        console.log(array.join("\n"));
    } else {
        console.log("Empty");
    }


}

addRemove( ["add", "add", "remove", "add", "add"] );