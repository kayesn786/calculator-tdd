class Calculator {
  add(numSting) {
    if (typeof numSting !== 'string') return 'Invalid type';
    //split the numbers based on delimeter
    const numbers = numSting.split(',');
    const negiveNumbers = [];
    //loop through the array of string numbers
    let sum = 0;
    for (let number of numbers) {
      number = parseFloat(number);
      if (number < 0) {
        negiveNumbers.push(number);
        continue;
      }
      if (isNaN(number)) return (sum = 0);
      if (!negiveNumbers.length) sum += number;
    }
    // const sum = numbers.reduce((prev, curr) => {
    //   //check for floating point integrs
    //   if (curr.includes('.')) curr = parseFloat(curr);
    //   curr = parseInt(curr);
    //   if (curr === NaN) {
    //     return 0;
    //   }
    //   return prev + curr;
    // }, 0);
    if (negiveNumbers.length) {
      throw new Error(`negatives not allowed- ${negiveNumbers.join(' ')}`);
    }

    return sum;
  }
}

calc = new Calculator();
console.log(calc.add('1'));
module.exports = Calculator;
