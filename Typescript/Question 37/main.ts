function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
  console.log(`You have ordered a ${size}-sized T-shirt with the message "${message}" printed on it.`);
}

// Large shirt with default message
make_shirt();

// Medium shirt with default message
make_shirt("Medium");

// Custom-sized shirt with a different message
make_shirt("Small", "Hello World!");
