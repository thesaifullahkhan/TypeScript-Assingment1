function show_magicians(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    console.log(magicians[i]);
  }
}

const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

show_magicians(magicians);
