 const tab = () => {
   const tabHeaderElem = document.querySelector('.service-header'),
     tabElem = tabHeaderElem.querySelectorAll('.service-header-tab'),
     tabContentElem = document.querySelectorAll('.service-tab ');

   const toggleTabContent = (index) => {
     for (let i = 0; i < tabContentElem.length; i++) {
       if (index === i) {
         tabElem[i].classList.add('active');
         tabContentElem[i].classList.remove('d-none');
       } else {
         tabElem[i].classList.remove('active');
         tabContentElem[i].classList.add('d-none');
       }
     }
   };

   tabHeaderElem.addEventListener('click', (event) => {
     let target = event.target;
     target = target.closest('.service-header-tab');
     if (target) {
       tabElem.forEach((item, i) => {
         if (item === target) {
           toggleTabContent(i);
         }
       });
     }
   });

 };

 export default tab;