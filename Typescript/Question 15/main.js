var guestList = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela"];
var guestUnableToMakeIt = guestList[1];
console.log("".concat(guestUnableToMakeIt, " is unable to make it to dinner."));
guestList[1] = "Marie Curie";
console.log("New set of invitations:");
for (var i = 0; i < guestList.length; i++) {
    var guest = guestList[i];
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner. Please join us on Saturday at 7 PM."));
}
