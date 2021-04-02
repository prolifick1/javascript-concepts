let myMap = new Map();

myMap.set('foo', 'bar');
console.log(myMap.size);
console.log(myMap.get('foo'));

let myMap2 = {'foo' :'bar'}
console.log(myMap2);

myMap.set(function poop() {}, 'baz');
console.log(myMap);
