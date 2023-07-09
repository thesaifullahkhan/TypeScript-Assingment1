let current_users: string[] = ['john', 'alice', 'mike', 'sarah', 'emma'];
let new_users: string[] = ['john', 'emma', 'peter', 'lucas', 'kate'];

for (let i = 0; i < new_users.length; i++) {
  let new_username: string = new_users[i];
  let isTaken: boolean = false;

  for (let j = 0; j < current_users.length; j++) {
    if (new_username.toLowerCase() === current_users[j].toLowerCase()) {
      isTaken = true;
      break;
    }
  }

  if (isTaken) {
    console.log(`The username '${new_username}' is already taken. Please enter a new username.`);
  } else {
    console.log(`The username '${new_username}' is available.`);
  }
}
