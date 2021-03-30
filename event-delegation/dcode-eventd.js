let myList = document.getElementById('myList');

myList.addEventListener('click', function (e) {
  const target = e.target;
  if (target.matches('li')) {
    target.style.backgroundColor = 'red';
  }
})

const newLi = document.createElement('li');
newLi.textContent = 'dcode';

myList.appendChild(newLi);