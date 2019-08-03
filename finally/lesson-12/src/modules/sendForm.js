 const sendForm = () => {
   const errorMessage = 'Что то пошло не так ...',
     loadMessage = 'Загрузка ...',
     sucsessMessage = 'Спасибо! Мы скоро с Вами свяжемся.';

   const formElem = document.getElementById('form1'),
     formQuestionElem = document.getElementById('form2'),
     formPopupElem = document.getElementById('form3');

   const statusMessage = document.createElement('div');
   statusMessage.style.cssText = 'font-size: 20px; color: red;';

   formElem.addEventListener('submit', (e) => {
     e.preventDefault();
     formElem.appendChild(statusMessage);
     statusMessage.textContent = loadMessage;

     let formData = new FormData(formElem);
     let body = {};
     formData.forEach((val, key) => {
       body[key] = val;
     });

     let allInput = formElem.querySelectorAll('input');
     allInput.forEach((elem) => {
       elem.value = '';
     });
     postData(body)
       .then((response) => {
         if (response.status !== 200) {
           throw new Error('Status network nt 200');
         }
         statusMessage.textContent = sucsessMessage;
         setTimeout(() => {
           statusMessage.textContent = '';
         }, 5000);
       })
       .catch((error) => {
         statusMessage.textContent = errorMessage;
         console.log(error);
         setTimeout(() => {
           statusMessage.textContent = '';
         }, 5000);
       });

   });
   // обработчит отправки данных для popup формы
   formPopupElem.addEventListener('submit', (e) => {
     e.preventDefault();
     formPopupElem.appendChild(statusMessage);
     statusMessage.textContent = loadMessage;

     let formData = new FormData(formPopupElem);
     let body = {};
     formData.forEach((val, key) => {
       body[key] = val;
     });

     let allInput = formPopupElem.querySelectorAll('input');
     allInput.forEach((elem) => {
       elem.value = '';
     });

     postData(body)
       .then((response) => {
         if (response.status !== 200) {
           throw new Error('Status network nt 200');
         }
         statusMessage.textContent = sucsessMessage;
         setTimeout(() => {
           statusMessage.textContent = '';
         }, 5000);
       })
       .catch((error) => {
         statusMessage.textContent = errorMessage;
         console.log(error);
         setTimeout(() => {
           statusMessage.textContent = '';
         }, 5000);
       });
   });
   // обработчик отправки данных для 2й формы (блок остались вопросы)
   formQuestionElem.addEventListener('submit', (e) => {
     e.preventDefault();
     formQuestionElem.appendChild(statusMessage);
     statusMessage.textContent = loadMessage;

     let formData = new FormData(formQuestionElem);
     let body = {};
     formData.forEach((val, key) => {
       body[key] = val;
     });

     let allInput = formQuestionElem.querySelectorAll('input');
     allInput.forEach((elem) => {
       elem.value = '';
     });

     postData(body)
       .then((response) => {
         if (response.status !== 200) {
           throw new Error('Status network nt 200');
         }
         statusMessage.textContent = sucsessMessage;
         setTimeout(() => {
           statusMessage.textContent = '';
         }, 5000);
       })
       .catch((error) => {
         statusMessage.textContent = errorMessage;
         console.log(error);
         setTimeout(() => {
           statusMessage.textContent = '';
         }, 5000);
       });

   });
   //отправка данных с помощью fetch()
   const postData = (body) => {
     return fetch('./server.php', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(body)
     });
   };
   //отправка данных с помощью promice() и XMLHttpRequest()

   // const postData = (body) => {
   //   return new Promise((resolve, reject) => {
   //     const request = new XMLHttpRequest();
   //     request.open('POST', './server.php');
   //     request.setRequestHeader('Content-Type', 'application/json');
   //     request.send(JSON.stringify(body));
   //     request.addEventListener('readystatechange', () => {
   //       if (request.readyState !== 4) {
   //         return;
   //       }
   //       if (request.status === 200) {
   //         resolve();
   //       } else {
   //         reject(request.status);
   //       }
   //     });
   //   });
   // };

 };

 export default sendForm;