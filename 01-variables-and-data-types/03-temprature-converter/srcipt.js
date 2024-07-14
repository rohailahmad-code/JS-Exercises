// Temprature Converter

/* In this exercise, I'm asking to enter a choice and value from user
   The choices is Pre-Defined you can choose any of it as per your need.
*/

// Choices and Formulas

// 1 - For Celsius to Fahrenheit (F = 9/5(C) + 32)
// 2 - For Fahrenheit to Celsius (C = 5/9 (F - 32))
// 3 - For Celsius to Kelvin (K = C + 273)
// 4 - For Kelvin to Celsius (C = K - 273)
// 5 - Farhenheit to Kelvin (K = 5/9 (F - 32) + 273)

const tempConverter = (choice, value) => {
  switch (choice) {
    case 1:
      const F = (9 / 5) * value + 32;
      console.log(`${value} \u00B0C is equal to ${F.toFixed(2)} \u00B0F`);
      break;
    case 2:
      const C = ((value - 32) * 5) / 9;
      console.log(`${value} \u00B0F is equal to ${C.toFixed(2)} \u00B0C`);
      break;
    case 3:
      const K = value + 273;
      console.log(`${value} \u00B0C is equal to ${K.toFixed(2)} K`);
      break;
    case 4:
      const celsius = value - 273;
      console.log(`${value} K is equal to ${celsius.toFixed(2)} \u00B0C`);
    case 5:
      const kelvin = (5 / 9) * (value - 32) + 273;
      console.log(`${value} \u00B0F is equal to ${kelvin.toFixed(2)} K`);
      break;
      break;
      defualt: console.log('Wrong Input');
  }
};

// Function to get user input and call the converter
/* Using parseInt and parseFloat while taking input 
   from the user is very important because the type
   of input is string.
*/
const userInput = () => {
  const choice = parseInt(
    prompt(
      'Enter your choice for conversion:\n1: Celsius to Fahrenheit\n2: Fahrenheit to Celsius\n3: Celsius to Kelvin\n4: Kelvin to Celsius\n5: Fahrenheit to Kelvin'
    )
  );
  const value = parseFloat(prompt('Enter the temperature value:'));

  if (isNaN(choice) || isNaN(value)) {
    console.log('Invalid input. Please enter numeric values.');
  } else {
    tempConverter(choice, value);
  }
};

userInput();
