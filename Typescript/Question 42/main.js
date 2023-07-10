function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great(magicians) {
    var modifiedMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        modifiedMagicians.push(magicians[i] + " the Great");
    }
    return modifiedMagicians;
}
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
var greatMagicians = make_great(magicians);
show_magicians(greatMagicians);
