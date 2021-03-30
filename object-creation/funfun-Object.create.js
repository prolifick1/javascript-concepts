let cat = {
  sound: 'meow',
  talk() {
    console.log(this.sound);
  }
}


let mark = Object.create(cat);
Object.defineProperty(mark, 'sound', { value: 'MEAOWGE'});
let grouch = Object.create(cat);
Object.defineProperty(grouch, 'sound', { value: 'GROUCH!'});
grouch.talk();