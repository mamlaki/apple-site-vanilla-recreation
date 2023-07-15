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
let dropdownMenu = document.querySelector('.strawbook-buy-dropdown')
let dropdownIcon = document.querySelector('.mini-header .icon-container')


setInterval(()=>{
    if (!dropdownMenu.classList.contains('dom-hidden')) {
        window.onscroll = () => {
            dropdownMenu.classList.add('dom-hidden')
            dropdownIcon.classList.remove('dropdown-rotate')
        }    
    }
}, 3500)

dropdownIcon.addEventListener('click', () => {
    toggleClass(dropdownMenu, 'dom-hidden')
    toggleClass(dropdownIcon, 'dropdown-rotate')
})











