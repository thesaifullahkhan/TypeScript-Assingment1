var current_users = ['john', 'alice', 'mike', 'sarah', 'emma'];
var new_users = ['john', 'emma', 'peter', 'lucas', 'kate'];
for (var i = 0; i < new_users.length; i++) {
    var new_username = new_users[i];
    var isTaken = false;
    for (var j = 0; j < current_users.length; j++) {
        if (new_username.toLowerCase() === current_users[j].toLowerCase()) {
            isTaken = true;
            break;
        }
    }
    if (isTaken) {
        console.log("The username '".concat(new_username, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_username, "' is available."));
    }
}
