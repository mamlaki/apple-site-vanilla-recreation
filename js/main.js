// || General Functions
const toggleClass = (element, className) => {
    element.classList.toggle(className)
}



// || Toggle hidden class on mobile nav element(s)
let hamburgerMenu = document.querySelector('.icon-container:nth-child(3)')
let closeButton = document.querySelector('.icon-container:last-child')

const HideShowToggleNavElements = () => {
    // Variables
    let header = document.querySelector('.main-header')
    // let headerIcons = document.querySelectorAll('.icon-container:not(.icon-container:nth-child(3))')
    let headerIcons = document.querySelectorAll('.icon-container:not(.icon-container:nth-child(3)):not(.icon-container:last-child)')
    let mobileNav = document.querySelector('nav')
    let logo = document.querySelector('.header-logo')
    
    // Class Toggle Function
    toggleClass(mobileNav, 'dom-hidden')
    
    toggleClass(logo, 'vis-hidden')

    headerIcons.forEach(icon => {
        toggleClass(icon, 'vis-hidden')
    })

    toggleClass(header, 'nav-menu-header-bg')
    toggleClass(document.querySelector('html'), 'no-scroll')

    toggleClass(hamburgerMenu, 'dom-hidden')
    toggleClass(closeButton, 'dom-hidden')
}

hamburgerMenu.addEventListener('click', () => {
    HideShowToggleNavElements()
})

closeButton.addEventListener('click', () => {
    HideShowToggleNavElements()
})



// || Show arrow on nav item hover
let navListItem = document.querySelectorAll('nav ul li')

navListItem.forEach(listItem => {
    listItem.addEventListener('mouseenter', () => {
        listItem.children[1].classList.remove('vis-hidden')
    })

    listItem.addEventListener('mouseleave', () => {
        listItem.children[1].classList.add('vis-hidden')
    })
})