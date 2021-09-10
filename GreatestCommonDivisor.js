function gcd(num1, num2) {

    num1 = +num1;
    num2 = +num2;

    let greatestCommonDivisor = 0;

    for (let i = 1; i <= Math.min(num1, num2); i++) {

        if (num1 % i === 0 && num2 % i === 0) {
            greatestCommonDivisor = i;
        }

    }

    console.log(greatestCommonDivisor);

}

gcd(15, 5);