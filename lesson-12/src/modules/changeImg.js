 const changeImg = () => {
   const imgCommandElem = document.querySelectorAll('.command__photo');
   let oldimage;
   imgCommandElem.forEach((elem) => {
     elem.addEventListener('mouseenter', (event) => {
       oldimage = event.target.src;
       event.target.src = event.target.dataset.img;
     });
   });
   imgCommandElem.forEach((elem) => {
     elem.addEventListener('mouseleave', (event) => {
       event.target.src = oldimage;
     });
   });

 };

  export default changeImg;