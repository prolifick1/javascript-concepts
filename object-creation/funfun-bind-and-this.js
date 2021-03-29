// let dog = {
//   sound: 'woof',
//   talk: function () {
//     console.log(this.sound)
//   }
// }

// dog.talk();

// let dog = {
//   sound: 'woof',
//   talk: function () {
//     console.log(this.sound)
//   }
// }

// // dog.talk();
// let talkFunction = dog.talk;
// talkFunction(); // calling talkFunction on global object which does not have sound property, undefined (could attach property to global object by declaring global variable, but this is bad practice)

let dog = {
  sound: 'woof',
  talk: function () {
    console.log(this.sound)
  }
}

// dog.talk();
let talkFunction = dog.talk;
let boundFunction = talkFunction.bind(dog);
boundFunction();