let guestList: string[] = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela"];

const guestUnableToMakeIt: string = guestList[1];
console.log(`${guestUnableToMakeIt} is unable to make it to dinner.`);

guestList[1] = "Marie Curie";

console.log("New set of invitations:");

for (let i = 0; i < guestList.length; i++) {
  const guest = guestList[i];
  console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us on Saturday at 7 PM.`);
}
