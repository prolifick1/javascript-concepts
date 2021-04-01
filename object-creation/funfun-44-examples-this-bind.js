function talk() {
  console.log(this.sound);
}

let boromir = {
  talk,
  sound: 'one does not simply walk into mordor'
}

boromir.talk();
