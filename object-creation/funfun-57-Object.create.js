let cat = {
  sound: 'meow',
  talk() {
    console.log(this.sound);
  }
}


// let mark = Object.create(cat);
// Object.defineProperty(mark, 'sound', { value: 'MEAOWGE'});
// let grouch = Object.create(cat);
// Object.defineProperty(grouch, 'sound', { value: 'GROUCH!'});
// grouch.talk();

// console.log(cat.isPrototypeOf(mark));

let objectCreate = function(prot) {
  let obj = {};
  Object.setPrototypeOf(obj, prot)
  return obj;
}
let mark = objectCreate(cat);
console.log(mark.sound);