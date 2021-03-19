function Person(saying) {
  this.saying = saying;
}

Person.prototype.talk = function() {
  console.log(`I say ${this.saying}`); 
}

//rebuild new keyword using the spawn function
function spawn(constructor) {
  let obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  let argsArray = Array.from(arguments);
  constructor.apply(obj, argsArray.slice(1));
  return obj;
}

const crockford = new spawn(Person, 'SEMICOLONS');

crockford.talk();