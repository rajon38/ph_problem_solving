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