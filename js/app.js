//defining variables and create a nav ist

 const navBarList = document.getElementById('navbar__list');
 const sections = Array.from(document.querySelectorAll('section'));
 


 //adding a function that creates a navbar list for each section
 function creatingNavItems() {
   for (sec of sections) {
     navItem = document.createElement('li');
     navItem.innerHTML = `<li><a href="#${sec.id}" onclick="doActive(this)"  data-nav="${sec.id}" class="menu__link">${sec.dataset.nav}</a>`
     navBarList.appendChild(navItem);
   }
 }
 creatingNavItems();
 
 
 // Styling the active stats using the getBoundingClientRect method
 
 window.onscroll = function() {
   document.querySelectorAll('section').forEach(function(active) {
 
     if (active.getBoundingClientRect().top >= -400 &&
       active.getBoundingClientRect().top <= 150) {
       active.classList.add("active");
     } else {
       active.classList.remove("active");
     }
   });
 };
 
 // when user clicks the navbar item in nav menu, the link is supposed to scroll smoothly
 
 navBarList.addEventListener("click", (toSec) => {
   toSec.preventDefault();
   if (toSec.target.dataset.nav) {
     document
       .getElementById(`${toSec.target.dataset.nav}`)
       .scrollIntoView({
         behavior: "smooth"
       });
     setTimeout(() => {
       location.hash = `${toSec.target.dataset.nav}`;
     }, 170);
   }
 });


 function doActive(elem) {
  var a = document.getElementsByTagName('a');
  for (i = 0; i < a.length; i++) {
      a[i].classList.remove('active')
  }
  elem.classList.add('active');
}