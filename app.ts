const reverseString = (s: string): string => {
  return s.split('').reverse().join('');
};

const input = "Hello, World!";
const reversed = reverseString(input);
console.log("Reversed string:", reversed); 



const fuzzBuzz = (n: number): string[] => {
    let result: string[] = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i.toString());
        }
    }
    return result;
};

const n = 15;
const output = fuzzBuzz(n);
console.log("FizzBuzz output:", output);


const findMax = (arr: number[]): number => {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

const numbers = [3, 1, 4, 1, 5, 9];
const maxNumber = findMax(numbers);
console.log("Maximum number:", maxNumber);

const isPalindrome = (s: string): boolean => {
    let clean = s.toLocaleLowerCase().replace(/[^a-z0-9]/g, '');
    return clean === clean.split('').reverse().join('');
}

const inputPalindrome = "A man, a plan, a canal: Panama";
const result = isPalindrome(inputPalindrome);
console.log("Is palindrome:", result);


const sumArray = (arr: number[]): number => {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
};

const numbersArray = [1, 2, 3, 4, 5];
const totalSum = sumArray(numbersArray);
console.log("Sum of array:", totalSum);

const countOfVowels = (s: string): number => {
    let count = 0;
    const vowels = 'aeiouAEIOU';
    for (let char of s) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
};

const inputVowels = "Hello, World!";
const vowelCount = countOfVowels(inputVowels);
console.log("Number of vowels:", vowelCount);


const factorial = (n: number): number => {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
};

const numberForFactorial = 5;
const factorialResult = factorial(numberForFactorial);
console.log(`Factorial of ${numberForFactorial}:`, factorialResult);


const getEvenNumbers = (arr: number[]): number[] => {
    return arr.filter(num => num % 2 === 0);
};

const mixedNumbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = getEvenNumbers(mixedNumbers);
console.log("Even numbers:", evenNumbers);


