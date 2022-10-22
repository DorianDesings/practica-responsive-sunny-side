const toggleMenuElement = document.getElementById('toggle-menu');
const menuElement = document.getElementById('menu');

toggleMenuElement.addEventListener('click', () => {
  menuElement.classList.toggle('menu--show');
});

window.addEventListener('resize', ()=>{
  if(menuElement.classList.contains('menu--show')&& window.matchMedia("(min-width: 768px)").matches){
    menuElement.classList.remove('menu--show')
  }
})
