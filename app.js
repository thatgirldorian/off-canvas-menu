//create a way to store the button state
const menuButton = document.querySelector('.menuBtn')
const sideMenu = document.querySelector('.sidebar')
const infoBar = document.querySelector('.info-bar')
const header = document.querySelector('.header-container')


//Show only information bar when page is loaded
window.onload = () => {
    sideMenu.classList.toggle('toggle')
    header.classList.toggle('clicked')
};

//Add an event listen to the button to hide sidebar when clicked
menuButton.addEventListener('click', () => {
    sideMenu.classList.toggle('toggle')
    header.classList.toggle('clicked')
    menuButton.classList.toggle('clicked')

    if (menuButton.innerHTML === "Menu") {
        menuButton.innerHTML = "Close"
    } else {
        menuButton.innerHTML = "Menu"
    }
})