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
    if (target.matches('.dog')) {
      getData(dog)
        .then((response) => {
          if(response.status !== 200) {
            throw new Error('Похоже не получили фото');
          }
           return (response.json());
          })
          .then((img) => {
            let image = img.url;
            console.log(image);
            cardElem.style.cssText = `background-image: url(${image}); 
            background-size: auto;
            background-repeat: no-repeat;
            background-position: center;`;
          })
          .catch((error) => {
            console.error(error);
          });
        
    } else if (target.matches('.cat')) {
       getData(cat)
         .then((response) => {
           if (response.status !== 200) {
             throw new Error('Похоже не получили фото');
           }
           return (response.json());
         })
         .then((img) => {
           let image = img.file;
           cardElem.style.cssText = `background-image: url(${image}); 
           background-size: auto;
           background-repeat: no-repeat;
           background-position: center;`;
         })
         .catch((error) => {
           console.error(error);
         });
    }else if (target.matches('.fox')) {
      const getData = (fox) => {
        return fetch(fox, {
          method: 'GET',
          mode: 'no-cors',
          cache: 'default',
        });
      };
      getData(fox)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error('Похоже не получили фото');
          }
          console(response.json());
        })
        .then((img) => {
           let image = img;
           console.log(image);
           cardElem.style.cssText = `background-image: url(${image}); 
           background-size: auto;
           background-repeat: no-repeat;
           background-position: center;`;
          console.log(img);
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


  });
};


