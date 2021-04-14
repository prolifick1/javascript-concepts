const name = 'John';
const title = 'Developer';
const salary = 120000;

const print = function() {
  console.log(`my name is ${this.name}`);
}

const developer = {
  name,
  title,
  salary,
  print
}

developer.print();