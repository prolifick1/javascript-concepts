function talk() {
  console.log(this.sound);
}

let animal = {
  talk
}

let cat = {
  sound: 'meow'
}

Object.setPrototypeOf(cat, animal);
cat.talk();