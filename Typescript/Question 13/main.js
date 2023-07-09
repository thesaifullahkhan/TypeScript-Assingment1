var modesOfTransportation = ["car", "motorcycle", "bicycle", "train"];
// Print statements about each item in the list
for (var i = 0; i < modesOfTransportation.length; i++) {
    var transportation = modesOfTransportation[i];
    if (transportation === "car") {
        console.log("I would like to own a ".concat(transportation, "."));
    }
    else if (transportation === "motorcycle") {
        console.log("I would like to ride a ".concat(transportation, "."));
    }
    else {
        console.log("I would like to use a ".concat(transportation, "."));
    }
}
