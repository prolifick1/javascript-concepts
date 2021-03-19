function Person(saying) {
  this.saying = saying;
}

Person.prototype.talk = function() {
  console.log(`I say ${this.saying}`); 
}

const crockford = new Person('SEMICOLONS');

crockford.talk();