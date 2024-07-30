const mHead = document.querySelector('.m-head');
   const logo = document.querySelector('.logo');
   window.addEventListener('scroll',function(){
     if(window.scrollY > 400){
       mHead.classList.add('slidedown');
       logo.style.color = '#000';
   } else{
       mHead.classList.remove('slidedown');
       logo.style.color = '';
   }
   })