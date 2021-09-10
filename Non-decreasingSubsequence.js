function subsequence(array) {

    let result = [array[0]];
    let current = array[0];
    
    for (let i = 1; i < array.length; i++) {
        
        if (array[i] >= current) {
            result.push(array[i]);
            current = array[i];
        }
        
    }

    console.log(result);

}

subsequence( [20, 3, 2, 15, 6, 1] )