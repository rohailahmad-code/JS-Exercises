// Palindrome Checker

// Algorithm for This Exercise

// - convert the string to lowercase and remove all the non-alphanumeric character
// - split the string
// - reverse the splited string
// - join the reverse string
// - now check if the string is equal to reversed string
// - if yes - true
// - else - false
// - put all these in a function and invoke it.

// First Way - Using Loop

const palindromeChecker = (str) => {
  // first find the length of the string
  const len = str.length;

  // now loop through the string to check if it is pilandrome or not...
  for (let i = 0; i < len / 2; i++) {
    // checking if the first and last string are same or not
    if (str[i] !== str[len - 1 - i]) {
      console.log(`${str} is not palindrome`);
    } else {
      console.log(`${str} is a palindrome`);
    }
  }
};

const string = prompt('Enter any String/Word : ');

console.log(palindromeChecker(string));

// Second Way - Using Built In Methods

const palindromeChecker2 = (str) => {
  const string = str.replace('/[^a-zA-Z0-9]/g', '').toLowerCase();

  const reversedStr = string.split('').reverse().join('');

  if (string === reversedStr) {
    console.log(`${str} is palindrome`);
  } else {
    console.log(`${str} is not palindrome`);
  }
};

console.log(palindromeChecker2('Hello'));
console.log(palindromeChecker2('Deed'));
