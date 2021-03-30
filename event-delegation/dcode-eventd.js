let myList = document.getElementById('myList');

myList.addEventListener('click', function (e) {
  const target = e.target;
  if (target.matches('li')) {
    target.style.backgroundColor = 'red';
  }
})
