const modesOfTransportation: string[] = ["car", "motorcycle", "bicycle", "train"];

// Print statements about each item in the list
for (let i = 0; i < modesOfTransportation.length; i++) {
  const transportation = modesOfTransportation[i];

  if (transportation === "car") {
    console.log(`I would like to own a ${transportation}.`);
  } else if (transportation === "motorcycle") {
    console.log(`I would like to ride a ${transportation}.`);
  } else {
    console.log(`I would like to use a ${transportation}.`);
  }
}
