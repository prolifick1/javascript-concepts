const name = 'John';
const title = 'Developer';
const salary = 120000;

const developer = {
  name,
  title,
  salary,
  print() {
    console.log(`my name is ${this.name}`);
  }
}

developer.print();