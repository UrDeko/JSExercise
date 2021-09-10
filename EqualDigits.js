function equalDigits(number) {

    number = number.toString();
    let firstDigit = number[0];
    let sumDigits = +firstDigit;
    let isTrue = true;

    for (let i = 1; i < number.length; i++) {

         sumDigits += +number[i];
         
         if (firstDigit !== number[i]) {
             isTrue = false;
         }
        
    }

    console.log(isTrue);
    console.log(sumDigits);

}

equalDigits(1234);