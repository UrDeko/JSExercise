function stringManipulation() {

    let string = '';

    function append(str) {
        string += str;
    }

    function removeStart(n) {
        string = string.substring(n);
    }

    function removeEnd(n) {
        string = string.substring(0, string.length - n);
    }

    function print() {
        console.log(string);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    };
}

let myString1 = stringManipulation();
let myString2 = stringManipulation();

myString1.append("Hello");
myString2.append("World");
myString1.print();
myString2.print();
myString1.removeStart(1);
myString1.removeEnd(2);
myString1.print();

console.log(typeof(myString1))