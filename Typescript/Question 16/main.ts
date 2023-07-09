let guestList: string[] = ["Albert Einstein", "Marie Curie", "Nelson Mandela"];

console.log("Good news! We found a bigger dinner table.");

guestList.unshift("Isaac Newton");
guestList.splice(Math.floor(guestList.length / 2), 0, "Galileo Galilei");
guestList.push("Rosa Parks");

console.log("New set of invitations:");

for (let i = 0; i < guestList.length; i++) {
  const guest = guestList[i];
  console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us on Saturday at 7 PM.`);
}
