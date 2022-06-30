//create a way to store the button state
const menuButton = document.querySelector('.menuBtn')
const sideMenu = document.querySelector('.sidebar')
const infoBar = document.querySelector('.info-bar')
const header = document.querySelector('header')

//Add an event listen to the button to hide sidebar when clicked
menuButton.addEventListener('click', () => {
    sideMenu.classList.toggle('toggle')
    header.classList.toggle('clicked')
})