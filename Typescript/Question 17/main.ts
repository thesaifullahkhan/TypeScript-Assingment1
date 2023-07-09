let guestList: string[] = ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Marie Curie", "Nelson Mandela", "Rosa Parks"];

console.log("Unfortunately, the new dinner table won't arrive in time for the dinner.");
console.log("We can only invite two people for dinner.");

while (guestList.length > 2) {
  const removedGuest: string = guestList.pop()!;
  console.log(`Sorry, ${removedGuest}, we cannot invite you to dinner.`);
}

console.log("Invitations:");

for (let i = 0; i < guestList.length; i++) {
  const guest = guestList[i];
  console.log(`Dear ${guest}, you are still invited to dinner. Please join us on Saturday at 7 PM.`);
}

guestList = [];

console.log("Guest list:", guestList);
