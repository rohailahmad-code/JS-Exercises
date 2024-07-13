// Roman Numeral Coverter

/* As we know in Roman: 
{
   I = 1,
   IV = 4,
   V = 5,
   IX = 9,
   X = 10,
   XL = 40,
   L = 50,
   XC = 90,
   C = 100,
   CD = 400,
   D = 500,
   CM = 900,
   M = 1000
}
*/

// Alogrithm

/* 

- Write a Function and pass a perameeter
- Create Array of Objects - Each Object Consist of 
  Numerical Numbers and Roman Numbers Which are equivalent to each other
- For loop to iterate each object in an array
- While loop to compare the given numbers with the object values

*/

const convertNumeralToRoman = (num) => {
  // Array of Objects - Consists Numbers along with Roman
  const numeralInRoman = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' },
  ];

  let romanNumber = '';

  // Loop - to iterate each object
  for (let i = 0; i < numeralInRoman.length; i++) {
    // Loop - comparing the given number with the objects values
    // and assigning the specific Roman number/symbol to it
    // and subtracting the value from from num
    while (num >= numeralInRoman[i].value) {
      romanNumber += numeralInRoman[i].symbol;
      num -= numeralInRoman[i].value;
    }
  }

  return romanNumber;
};

console.log(convertNumeralToRoman(11));
