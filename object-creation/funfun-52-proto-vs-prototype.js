let cat = {
  breed: 'munchkin cat'
}

let myCat = {
  name: 'fluffykins'
}

Object.setPrototypeOf(myCat, cat);
// console.log(myCat.breed);

cat.legs = 4;

console.log(myCat.__proto__);
