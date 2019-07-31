const cardElem       = document.querySelector('.card'),
      allButtonsElem = document.querySelectorAll('button'),
      dogElem        = document.querySelector('.dog'),
      catElem        = document.querySelector('.cat'),
      foxElem        = document.querySelector('.fox');


const dog = 'https://random.dog/woof.json',
      cat = 'https://aws.random.cat/meow',
      fox = 'https://randomfox.ca/floof/';

allButtonsElem.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;
    if (target.contains('.dog')) {
      getData(dog);
    } else if (target.contains('.cat')) {
      getData(cat);
    }else if (target.contains('.fox')) {
      getData(fox);
    } 
  });
});

const getData = (type) => {
  return fetch(type, {
    method: 'GET',
    mode: 'cors',
    cache: 'default',

  })
  .then()
};







// postData(body)
//   .then(() => {
//     statusMessage.textContent = sucsessMessage;
//     setTimeout(() => {
//       statusMessage.textContent = '';
//     }, 5000);
//   })
//   .catch((error) => {
//     statusMessage.textContent = errorMessage;
//     console.log(error);
//     setTimeout(() => {
//       statusMessage.textContent = '';
//     }, 5000);
//   });