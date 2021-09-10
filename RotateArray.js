function rotate(array) {
    let rotations = Number(array.pop());

    for (let i = 0; i < rotations; i++) {
        
        let lastElement = array[array.length - 1];
        
        array.unshift(lastElement);
        array.pop();
        
        /*for (let j = array.length - 1; j > 0; j--) {

            array[j] = array[j - 1];
            
        }

        array[0] = lastElement;*/
        
        
    }

    console.log(array.join(" "));
}

rotate( ["Banana", "Orange", "Coconut", "Apple", "15"] );