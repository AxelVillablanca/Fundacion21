$('.option').click(function(){
    $('.option').removeClass('active');
    $(this).addClass('active');
});









//SLIDER



var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.boton');
let slideUbi = 1;

//SLIDE MANUAL



var manualNav = function(manual){
slides.forEach((slide)=>{
    slide.classList.remove('S-activo');

    btns.forEach((boton)=>{
        boton.classList.remove('S-activo');
    });
});

    slides[manual].classList.add('S-activo');
    btns[manual].classList.add('S-activo');
}

btns.forEach((boton,i)=> {
    boton.addEventListener('click', ()=> {
        manualNav(i);
        slideUbi = i;
    });
});




//SLIDE AUTO
var repeat = function (activeClass) {
  let activo = document.getElementsByClassName("S-activo");
  let i = 1;

  var repeater = () => {
    setTimeout(function () {
        [...activo].forEach((activeSlide) =>{
            activeSlide.classList.remove('S-activo');
        });

      slides[i].classList.add("S-activo");
      btns[i].classList.add("S-activo");
      i++;

      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 15000);
  };
  repeater();
};
repeat();

