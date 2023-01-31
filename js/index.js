var lnkContacto            =  document.getElementById('a-contacto')
var lnkAptitudes           =  document.getElementById('a-aptitudes')
var lnkHabilidades         =  document.getElementById('a-habilidades')
var modalContacto          =  document.getElementById('modalContacto')
var modalAptitudes         =  document.getElementById('modalAptitudes')
var modalHabilidades       =  document.getElementById('modalHabilidades')
var popUp                  =  document.getElementById('popup')
var cerrarPopUpContacto    =  document.getElementById('btn-cerrar-contacto')
var cerrarPopUpAptitudes   =  document.getElementById('btn-cerrar-aptitudes')
var cerrarPopUpHabilidades =  document.getElementById('btn-cerrar-habilidades')
const navToggle            =  document.querySelector('.nav-toggle')
const navMenu              =  document.querySelector('.ul-menu')


function mostrarOcultarToggle() {
  navMenu.classList.toggle("ul-menu_visible")
} 

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle('ul-menu_visible')
})

lnkContacto.addEventListener('click', () => {
  modalContacto.classList.add('active')
  mostrarOcultarToggle()
})

lnkAptitudes.addEventListener('click', () => {
  modalAptitudes.classList.add('active')
  mostrarOcultarToggle()
})

lnkHabilidades.addEventListener('click', () => {
  modalHabilidades.classList.add('active')
  mostrarOcultarToggle()
})

cerrarPopUpContacto.addEventListener('click', () => {
  modalContacto.classList.remove('active')
})

cerrarPopUpAptitudes.addEventListener('click', () => {
  modalAptitudes.classList.remove('active')
})

cerrarPopUpHabilidades.addEventListener('click', () => {
  modalHabilidades.classList.remove('active')
})
