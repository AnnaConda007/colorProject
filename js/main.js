 new Swiper (`.swiper`, {
  navigation:{
    nextEl:`.swiper-button-next`, 
    prevEl:`.swiper-button-prev` //  не работает !!!
  },

  pagination:{
    el:`.swiper-pagination`,
       type: `progressbar`   , 
    /*clickable: true, */
 /*dynamicBullets:true,  */
  

    scrollbar:{                        
    el:`.swiper-scrollbar`,
    draggable:true       // не работает
  }  
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