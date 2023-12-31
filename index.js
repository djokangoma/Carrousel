const buttons=document.querySelectorAll(".btn");
const slides=document.querySelectorAll(".slide");


buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
         const calNextslide = e.target.id==="next" ? 1 : -1;
         const slideActive = document.querySelector(".active");

         newIndex = calNextslide + [...slides].indexOf(slideActive); 

         if(newIndex < 0) newIndex = [... slides].length-1;
         if(newIndex >= [...slides].length) newIndex=0;
         slides[newIndex].classList.add("active");

         slideActive.classList.remove("active")
        
    })
})