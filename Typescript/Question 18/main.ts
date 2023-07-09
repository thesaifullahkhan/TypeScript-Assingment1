let placesToVisit: string[] = ["Tokyo", "Paris", "New York", "Bali", "Rome"];

// Print the array in its original order
console.log("Original order:", placesToVisit);

// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...placesToVisit].sort());

// Print the array to show it's still in its original order
console.log("Original order:", placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// Print the array to show it's still in its original order
console.log("Original order:", placesToVisit);

// Reverse the order of the list
placesToVisit = placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

// Reverse the order of the list again to show it's back to its original order
placesToVisit = placesToVisit.reverse();
console.log("Original order:", placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Alphabetical order:", placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort().reverse();
console.log("Reverse alphabetical order:", placesToVisit);
