function make_sandwich(items) {
    console.log("Sandwich Order:");
    console.log("Bread");
    for (var i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
    console.log("Bread\n");
}
make_sandwich(["Ham", "Cheese"]);
make_sandwich(["Turkey", "Lettuce", "Tomato", "Mayonnaise"]);
make_sandwich(["Peanut Butter", "Jelly"]);
