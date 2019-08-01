 const toggleMenu = () => {
   const bodyElem = document.querySelector(`body`),
     menuElem = document.querySelector(`menu`);

   const handlerMenu = () => {
     menuElem.classList.toggle('active-menu');
   };

   bodyElem.addEventListener('click', (e) => {
     if (e.target.matches(`.menu > img`) || e.target.matches(`.close-btn`) || e.target.matches(`ul > li > a`)) {
       handlerMenu();
     } else if (e.target.closest(`menu`) === null) {
       menuElem.classList.remove(`active-menu`);
     }
     return;
   });
 };

 export default toggleMenu;