function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("You have ordered a ".concat(size, "-sized T-shirt with the message \"").concat(message, "\" printed on it."));
}
// Large shirt with default message
make_shirt();
// Medium shirt with default message
make_shirt("Medium");
// Custom-sized shirt with a different message
make_shirt("Small", "Hello World!");
