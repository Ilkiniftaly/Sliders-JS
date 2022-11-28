let min = 0;
let back = document.querySelector("#back");
let next = document.querySelector("#next");
let slides = document.querySelector("#slides");
let max = document.querySelectorAll(".slide").length - 1;

next.addEventListener("click", () => {
  if (min < max) {
    min++;
    slides.style.left = "-" + 937 * min + "px";
  } else {
    min = 0;
    slides.style.left = "-" + 937 * min + "px";
  }

  //    for(let i =0; i < max ; i++){
  //     console.log(i);
  //     slides.style.left = '-' + 937*i + 'px';
  //    }
});

back.addEventListener('click', ()=>{
    if(min >= 0){
        min--;
        slides.style.left = "-" + 937 * min + "px";
    }
    // else{
    //     min = 2;
    //     slides.style.left = "-" + 937 * min + "px";
    // }
})