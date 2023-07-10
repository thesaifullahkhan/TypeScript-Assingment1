function show_magicians(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    console.log(magicians[i]);
  }
}

function make_great(magicians: string[]): string[] {
  const modifiedMagicians: string[] = [];

  for (let i = 0; i < magicians.length; i++) {
    modifiedMagicians.push(magicians[i] + " the Great");
  }

  return modifiedMagicians;
}

const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

const greatMagicians: string[] = make_great(magicians);

show_magicians(greatMagicians);
