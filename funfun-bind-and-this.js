// let dog = {
//   sound: 'woof',
//   talk: function () {
//     console.log(this.sound)
//   }
// }

// dog.talk();


let dog = {
  sound: 'woof',
  talk: function () {
    console.log(this.sound)
  }
}

// dog.talk();
let talkFunction = dog.talk;
talkFunction(); // calling talkFunction on global object which does not have sound property, undefined