function printArray(input) {
    
    let delimiter = input.pop();
    let result = input[0];
    
    for (let i = 1; i < input.length; i++) {
    
        result += `${delimiter}${input[i]}`;
        
    }
    
    console.log(result);
    
    }
    
    printArray( ["How about no?", "I", "will", "not", "do", "it!", "_"] );