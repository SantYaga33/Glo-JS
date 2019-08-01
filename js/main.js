const cardElem       = document.querySelector('.card'),
      allButtonsElem = document.querySelectorAll('button');

const dog = 'https://random.dog/woof.json',
      cat = 'https://aws.random.cat/meow',
      fox = 'https://randomfox.ca/floof/';

allButtonsElem.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;
    if (target.matches('.dog')) {
      getData(dog);
    } else if (target.matches('.cat')) {
        getData(cat);
    }else if (target.matches('.fox')) {
      let getFox = () => {
        return fetch('request.php', {
          method: 'GET',
          mode: 'cors',
          cache: 'default',
        });
      };
      getFox()
      .then((response) => {
          if (response.status !== 200) {
            throw new Error('Похоже не получили фото');
          }
          return (response.text());
        })
      .then((data) => {
        let myObj = JSON.parse(data);
        for (var key in myObj) {
          console.log(myObj[key]);
          cardElem.style.cssText = `background-image: url(${myObj[key]}); 
          background-size: auto;
          background-repeat: no-repeat;
          background-position: center;`;
        }
      })
      .catch((error) => {
        console.error(error);
      });
   
    }
  });
});



const getData = (type) => {
  return fetch(type, {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
  })
  .then((response) => {
      if (response.status !== 200) {
        throw new Error('Похоже не получили фото');
      }
      return (response.text());
    })
    .then((data) => {
      let myObj = JSON.parse(data);
      for (var key in myObj) {
        console.log(myObj[key]);
        cardElem.style.cssText = `background-image: url(${myObj[key]}); 
              background-size: auto;
              background-repeat: no-repeat;
              background-position: center;`;
      }
    })
    .catch((error) => {
      console.error(error);
    });
};


