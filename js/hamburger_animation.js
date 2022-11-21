
// menu-5

const menu_5 = document.querySelectorAll('.menu-5 .menu');
  menu_5.forEach (icon => {  
    icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
    });
  });


// menu-6
const menu_6 = document.querySelectorAll('.menu-6 .menu');
menu_6.forEach (icon => {  
  icon.addEventListener('click', (event) => {
  icon.classList.toggle("open");
  });
});