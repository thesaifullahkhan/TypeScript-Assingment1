var guestList = ["Albert Einstein", "Marie Curie", "Nelson Mandela"];
console.log("Good news! We found a bigger dinner table.");
guestList.unshift("Isaac Newton");
guestList.splice(Math.floor(guestList.length / 2), 0, "Galileo Galilei");
guestList.push("Rosa Parks");
console.log("New set of invitations:");
for (var i = 0; i < guestList.length; i++) {
    var guest = guestList[i];
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner. Please join us on Saturday at 7 PM."));
}
