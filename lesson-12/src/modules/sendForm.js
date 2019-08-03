 const sendForm = () => {
   const errorMessage = 'Что то пошло не так ...',
     loadMessage = 'Загрузка ...',
     sucsessMessage = 'Спасибо! Мы скоро с Вами свяжемся.';

   const formElem = document.getElementById('form1'),
     formQuestionElem = document.getElementById('form2'),
     formPopupElem = document.getElementById('form3');

   const statusMessage = document.createElement('div');
   statusMessage.style.cssText = 'font-size: 20px; color: red;';

   const checkCurrentForm = (currentForm) => {
   currentForm.addEventListener('submit', (e) => {
     e.preventDefault();
     currentForm.appendChild(statusMessage);
     statusMessage.textContent = loadMessage;

     let formData = new FormData(currentForm);
     let body = {};
     formData.forEach((val, key) => {
       body[key] = val;
     });

     const allInput = currentForm.querySelectorAll('input');
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
  };

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

   checkCurrentForm(formElem);
   checkCurrentForm(formQuestionElem);
   checkCurrentForm(formPopupElem);
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