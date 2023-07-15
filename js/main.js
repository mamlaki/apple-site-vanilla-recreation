// || General Functions
import toggleClass from "./components/toggleClass.js"
import addClass from "./components/addClass.js"
import removeClass from "./components/removeClass.js"

let learnMoreContent = document.querySelector('.learn-more-content-container')

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


// || Show arrow on nav item hover (if within the scope of the project)
let navListItems = document.querySelectorAll('nav ul li')
let navListItemsArray = [...navListItems]

navListItemsArray.forEach(listItem => {
    if (listItem.classList.contains('scope')) {
        listItem.addEventListener('mouseenter', () => {
            listItem.children[1].classList.remove('vis-hidden')
        })
    
        listItem.addEventListener('mouseleave', () => {
            listItem.children[1].classList.add('vis-hidden')
        })
    } else {
        listItem.addEventListener('click', (e) => {
            alert("Outside of the current project scope! Try again at a later date.")
            e.preventDefault()
        })
    }
})


// || Show alert if button is clicked that is outside of the current project scope
let articles = document.querySelectorAll('.home section article')
let articlesArray = [...articles]

articlesArray.forEach(article => {
    if (!article.classList.contains('in-scope')) {
        article.addEventListener('click', (e) => {
            alert("Outside of the current project scope! Try again at a later date.")
            e.preventDefault()
        })
    }
})


// || Show buy dropdown menu on arrow click and close if the user scrolls
if (window.location.href.indexOf("learn-more") > -1) {
    let dropdownMenu = document.querySelector('.strawbook-buy-dropdown')
    let dropdownIcon = document.querySelector('.mini-header .icon-container')
    let dropdownContainer = document.querySelector('.strawbook-buy-container')
    let miniHeader = document.querySelector('.mini-header')


    setInterval(()=>{
        if (!dropdownMenu.classList.contains('dom-hidden')) {
            window.onscroll = () => {
                removeClass(dropdownMenu, 'dropdown-slide')
                removeClass(dropdownContainer, 'dropdown-border-bottom')
                addClass(miniHeader, 'dropdown-border-bottom')
                removeClass(dropdownIcon, 'dropdown-rotate')
                removeClass(learnMoreContent, 'blur')
            }    
        }
    }, 3500)

    dropdownIcon.addEventListener('click', () => {
        toggleClass(dropdownMenu, 'dropdown-slide')
        toggleClass(dropdownIcon, 'dropdown-rotate')
        toggleClass(dropdownContainer, 'dropdown-border-bottom')
        toggleClass(miniHeader, 'dropdown-border-bottom')
        toggleClass(learnMoreContent, 'blur')
    })    
}











