function talk() {
  console.log(this.sound);
}

let animal = {
  talk
}

let cat = {
  sound: 'meow'
}

let dog = {
  sound: 'woof'
}

Object.setPrototypeOf(cat, animal);
cat.talk();

let prairedog = {
  howl: function() {
    console.log(this.sound.toUpperCase());
  }
}

Object.setPrototypeOf(prairedog, dog);

prairedog.howl();