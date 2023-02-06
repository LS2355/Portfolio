let activeIndex = 0;

const slides = document.getElementsByTagName("article");

const LeftClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;
  
  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
        
  currentSlide.dataset.status = "after";
  
  nextSlide.dataset.status = "becoming-active-from-before";
  
  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

const RightClick = () => {
  const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;
  
  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
  
  currentSlide.dataset.status = "before";
  
  nextSlide.dataset.status = "becoming-active-from-after";
  
  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

/* -- nav bar -- */


function Nav (index){
  document.querySelector("[data-status=active]").setAttribute("data-status", "inactive");
  document.querySelector("[data-index='" + index + "']").setAttribute("data-status", "active");
  activeIndex = index
}


/* -- Mobile Nav Toggle -- */

const nav = document.querySelector("nav");

const handleNavToggle = () => {  
  nav.dataset.transitionable = "true";
  
  nav.dataset.toggled = nav.dataset.toggled === "true" ? "false" : "true";
}

window.matchMedia("(max-width: 800px)").onchange = e => {
  nav.dataset.transitionable = "false";

  nav.dataset.toggled = "false";
};

/* -- Skills card -- */
document.getElementById("cards").onmousemove = e => {
  for(const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };
}

/* -- Project hover -- */

const projects = document.querySelectorAll(".projects");
projects.forEach(el => {
    el.addEventListener("mouseenter",(e)=>{
      console.log(e)
      var TargetL = e.target.lastElementChild.style;
      var TargetF = e.target.firstElementChild.style;
      TargetL.opacity= "1";
      TargetF.opacity="0.08";
    });
    el.addEventListener("mouseleave",(e)=>{
      var TargetL = e.target.lastElementChild.style;
      var TargetF = e.target.firstElementChild.style;
      TargetL.opacity= "0";
      TargetF.opacity="1";
    });
})

/* -- phone click -- */
const phone = document.querySelector(".phone-number");
function phoneOpen () {
  phone.style.display = "flex"
}
function phoneClose() {
  phone.style.display = "none"
}








