var guestList = ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Marie Curie", "Nelson Mandela", "Rosa Parks"];
console.log("Unfortunately, the new dinner table won't arrive in time for the dinner.");
console.log("We can only invite two people for dinner.");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", we cannot invite you to dinner."));
}
console.log("Invitations:");
for (var i = 0; i < guestList.length; i++) {
    var guest = guestList[i];
    console.log("Dear ".concat(guest, ", you are still invited to dinner. Please join us on Saturday at 7 PM."));
}
guestList = [];
console.log("Guest list:", guestList);
