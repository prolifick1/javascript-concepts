// let x = 10; 
// let y = x;
// x = 20;

// console.log(x); //20
// console.log(y); //10


// let x = { value : 10};
// let y = x;
// x.value = 20;
// console.log(x); //20
// console.log(y); //20 , because x object is copied to y by reference, and share same address/ref in memory

// let num = 10;

// function increase(num) {
//   num++;
// }

// increase(num)
// console.log(num); // 10 , because num primitive is copied by value to function increase, not address/ref

// let num = {
//   value: 10
// }

// function increase(num) {
//   num.value++;
// }

// increase(num)
// console.log(num.value); // 11 , because num object is copied by value to function increase, not address/ref