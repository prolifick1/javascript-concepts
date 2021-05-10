let cat = {
  legs: 4
}

let myCat = {
  name: 'fluffykins'
}

Object.setPrototypeOf(myCat, cat);

console.log(myCat.__proto__);
console.log(cat.isPrototypeOf(myCat));
