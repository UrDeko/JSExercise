function print(input) {
    
    let step = Number(input.pop());

    for (let i = 0; i < input.length; i+=step) {
        
        console.log(input[i]);
        
    }

}

print( ["dsa", "asd", "test", "tset", "2"] );