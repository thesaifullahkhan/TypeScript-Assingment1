let personName: string = "John Doe";

console.log("Lowercase: " + personName.toLowerCase());
console.log("Uppercase: " + personName.toUpperCase());
console.log("Titlecase: " + toTitleCase(personName));

function toTitleCase(name: string): string {
  let words: string[] = name.split(" ");
  let titlecasedWords: string[] = [];

  for (let word of words) {
    let titlecasedWord: string = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    titlecasedWords.push(titlecasedWord);
  }

  return titlecasedWords.join(" ");
}

