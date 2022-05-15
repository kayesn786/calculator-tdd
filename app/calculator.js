class Calculator {
  add(numString) {
    if (typeof numString !== 'string') return 'Invalid type';
    if (numString.startsWith('\n')) {
      numString = numString.slice(1, numString.length + 1);
    }
    let delimeter = /[\n,]/;
    //custom delimeter
    if (numString.startsWith('//')) {
      const _index = numString.indexOf('\n');
      delimeter = numString.slice(2, _index);
      numString = numString.slice(_index + 1);
    }
    //split the numbers based on comma and new line
    const numbers = numString.split(delimeter);
    const negiveNumbers = [];
    //loop through the array of string numbers
    let sum = 0;
    for (let number of numbers) {
      //To consider empty as zero
      number = parseFloat(number);
      //check for negative number
      if (number < 0) {
        //collect all negative number to show in the message
        negiveNumbers.push(number);
        continue;
      }
      //check for emptyness in between the string an consider it as zero
      if (isNaN(number)) return (sum = 0);
      //if there are negative numbers, then dont perform the add operation
      if (!negiveNumbers.length) sum += number;
    }
    //throw the exception if there are any negative numbers
    if (negiveNumbers.length) {
      throw new Error(`negatives not allowed- ${negiveNumbers.join(' ')}`);
    }
    return sum;
  }
}

calc = new Calculator();
console.log('Addition of 1,2 is: ', calc.add('1,2'));
module.exports = Calculator;
