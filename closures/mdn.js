// https: //developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

//displayName() is a closure because it is an inner nested function AND has reference to outer lexical environment (name variable)


function makeFunc() {
  var name = 'Mozilla';

  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

//note that the closure displayName never executes inside of parent function, but is returned. Even after makeFunc is popped off the stack and returned closure is called, it still has access to its lexical environment

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
