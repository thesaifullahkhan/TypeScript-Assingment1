// Tests for equality and inequality with strings
let Name: string = 'John';

console.log("Is name equal to 'John'? I predict true.");
console.log(Name == 'John');

console.log("Is name not equal to 'Jane'? I predict true.");
console.log(Name != 'Jane');

console.log("Is name equal to 'john'? I predict false.");
console.log(Name == 'john');

console.log("Is name not equal to 'John'? I predict false.");
console.log(Name != 'John');

// Tests using the lowercase function
let text: string = 'Hello World';

console.log("Is text in lowercase equal to 'hello world'? I predict true.");
console.log(text.toLowerCase() == 'hello world');

console.log("Is text in lowercase equal to 'HELLO WORLD'? I predict false.");
console.log(text.toLowerCase() == 'HELLO WORLD');

// Numerical tests
let number: number = 5;

console.log("Is number equal to 5? I predict true.");
console.log(number == 5);

console.log("Is number not equal to 10? I predict true.");
console.log(number != 10);

console.log("Is number greater than 2? I predict true.");
console.log(number > 2);

console.log("Is number less than 10? I predict true.");
console.log(number < 10);

console.log("Is number greater than or equal to 5? I predict true.");
console.log(number >= 5);

console.log("Is number less than or equal to 3? I predict false.");
console.log(number <= 3);

// Tests using "and" and "or" operators
let x: number = 8;
let y: number = 6;

console.log("Is x greater than 5 and y less than 10? I predict true.");
console.log(x > 5 && y < 10);

console.log("Is x greater than 10 or y less than 5? I predict false.");
console.log(x > 10 || y < 5);

// Test whether an item is in an array
let fruits: string[] = ['apple', 'banana', 'orange'];

console.log("Is 'apple' in the array? I predict true.");
console.log(fruits.includes('apple'));

console.log("Is 'grape' in the array? I predict false.");
console.log(fruits.includes('grape'));

// Test whether an item is not in an array
console.log("Is 'kiwi' not in the array? I predict true.");
console.log(!fruits.includes('kiwi'));

console.log("Is 'banana' not in the array? I predict false.");
console.log(!fruits.includes('banana'));
