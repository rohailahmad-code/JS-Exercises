// Array Manipulation

/* 

Write functions to perform operations like:

- reversing an array
- finding the largest/smallest number
- removing duplicates

*/
const arr = [1, 2, 3, 4, 5, 6, 3];

console.log('Orignal Array : ' + arr);

const arrOperations = () => {
  // Reversing an array
  console.log(arr.reverse());

  //finding largest and smallest numbers
  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);

  console.log(
    `${minValue} is the smallest and ${maxValue} is the largest number/element of the array.`
  );

  // Removing the Duplicates
  // Using Set() Method - Constructor Function - is the collection of unique elements/values it doesn't accept duplicate values.
  const removeDuplicates = [...new Set(arr)];
  console.log(removeDuplicates);

  // Using indexOf() Method - Return the position of first occurrence of a value in an array.
  // If it finds the similar element/value repeated it will take index of first occurred same element/value not its own.
  const removeDuplicates2 = arr.filter(
    (item, index) => arr.indexOf(item) === index
  );
  console.log(removeDuplicates2);

  // We can do it in other multiple ways as well
};

arrOperations();
