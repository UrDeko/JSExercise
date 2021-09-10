function diagonalAttack(array) {
    
    let arrayOfNums = array.map((element) => {
        return element.split(" ");
    });

    for (let i = 0; i < arrayOfNums.length; i++) {
        
        arrayOfNums[i] = arrayOfNums[i].map(Number);
        
    }

    let sumLeft = 0;
    let sumRight = 0;
    
    for (let i = 0; i < arrayOfNums.length; i++) {
        
        sumLeft += arrayOfNums[i][i];
        sumRight += arrayOfNums[i][arrayOfNums.length - i - 1];
        
    }

    if (sumLeft === sumRight) {
        
        for (let row = 0; row < arrayOfNums.length; row++) {
            
            for (let col = 0; col < arrayOfNums[row].length; col++) {
                
                if (row !== col && (row + col) !== arrayOfNums[row].length - 1) {
                    
                    arrayOfNums[row][col] = sumRight;

                }
                
            }
            
        }

    }

    console.log(arrayOfNums);

}

diagonalAttack([
    "5 3 12 3 1",
    "11 4 23 2 5",
    "101 12 3 21 10",
    "1 4 5 2 2",
    "5 22 33 11 1"
]);