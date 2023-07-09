var guestList = ["Qadir", "Afnan", "Faizan"];
// Print an invitation message to each person
for (var i = 0; i < guestList.length; i++) {
    var guest = guestList[i];
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner. Please join us on Saturday at 7 PM."));
}
