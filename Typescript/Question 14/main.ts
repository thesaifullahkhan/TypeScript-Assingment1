const guestList: string[] = ["Qadir", "Afnan", "Faizan"];

// Print an invitation message to each person
for (let i = 0; i < guestList.length; i++) {
  const guest = guestList[i];
  console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us on Saturday at 7 PM.`);
}
