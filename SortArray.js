function sortArray(array, sortOrder) {
    
    if (sortOrder === "asc") {
        return array.sort((a, b) => {
            return a - b;
        });
    } else {
        return array.sort((a, b) => {
            return b - a;
        });
    }

}

console.log(sortArray([7, 45, 27, 5, 105, 2, 25, 1], "desc"));