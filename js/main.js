 new Swiper (`.swiper`, {
  navigation:{
    nextEl:`.swiper-button-next`, // не работает !!!
    prevEl:`.swiper-button-prew`
  },

  pagination:{
    el:`.swiper-pagination`, /* */
    /*clickable: true,        ????  ниначто не влияет*/
 /*dynamicBullets:true,  */
   type: `progressbar`   ,   /*    заполнение линии наверху*/ 
  /* scrollbar:{                    скрол не работает      
    el:`.swiper-scrollbAr`,
    draggable:true
  } */
  },
  keyboard:{
    enabled:true,
    onlyInViewport:true,
    pageUpDown:true
  },
  mousewheel:{
    sensitivity:1,
  },
  slidesPerView:3,

  spaceBetween:30,

  loop: true,


})