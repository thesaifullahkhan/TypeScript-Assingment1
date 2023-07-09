var personName = "John Doe";
console.log("Lowercase: " + personName.toLowerCase());
console.log("Uppercase: " + personName.toUpperCase());
console.log("Titlecase: " + toTitleCase(personName));
function toTitleCase(name) {
    var words = name.split(" ");
    var titlecasedWords = [];
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        var titlecasedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        titlecasedWords.push(titlecasedWord);
    }
    return titlecasedWords.join(" ");
}
