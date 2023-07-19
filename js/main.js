// || General Functions
import toggleClass from "./components/toggleClass.js"
import addClass from "./components/addClass.js"
import removeClass from "./components/removeClass.js"

const learnMoreContent = document.querySelector('.learn-more-content-container')

// || Toggle hidden class on mobile nav element(s)
const hamburgerMenu = document.querySelector('.icon-container:nth-child(3)')
const closeButton = document.querySelector('.icon-container:last-child')

const HideShowToggleNavElements = () => {
    // Variables
    const header = document.querySelector('.main-header')
    // let headerIcons = document.querySelectorAll('.icon-container:not(.icon-container:nth-child(3))')
    const headerIcons = document.querySelectorAll('.icon-container:not(.icon-container:nth-child(3)):not(.icon-container:last-child)')
    const mobileNav = document.querySelector('nav')
    const logo = document.querySelector('.header-logo')
    
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
const navListItems = document.querySelectorAll('nav ul li')
const navListItemsArray = [...navListItems]

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
const articles = document.querySelectorAll('.home section article')
const articlesArray = [...articles]

articlesArray.forEach(article => {
    if (!article.classList.contains('in-scope')) {
        article.addEventListener('click', (e) => {
            alert("Outside of the current project scope! Try again at a later date.")
            e.preventDefault()
        })
    }
})



// || Code below is only for the learn-more page
// || Show buy dropdown menu on arrow click and close if the user scrolls
if (window.location.href.indexOf("learn-more") > -1) {
    const dropdownMenu = document.querySelector('.strawbook-buy-dropdown')
    const dropdownIcon = document.querySelector('.mini-header .icon-container')

    setInterval(()=>{
        if (!dropdownMenu.classList.contains('dom-hidden')) {
            window.onscroll = () => {
                removeClass(dropdownMenu, 'slide')
                removeClass(dropdownIcon, 'dropdown-rotate')
                removeClass(learnMoreContent, 'blur')
            }    
        }
    }, 3500)

    dropdownIcon.addEventListener('click', () => {
        toggleClass(dropdownMenu, 'slide')    
        toggleClass(dropdownIcon, 'dropdown-rotate')
        toggleClass(learnMoreContent, 'blur')
    })    



    // || Show color option label when selected but only the label of the selected option, if another option is selected, hide the previous label and show the new one.
    const colorOptions = document.querySelectorAll('.color-option')
    const colorOptionsArray = [...colorOptions]

    colorOptionsArray.forEach(colorOption => {
        colorOption.addEventListener('click', () => {
            const colorOptionLabel = colorOption.children[1]
            colorOptionsArray.forEach(colorOption => {
                const colorOptionLabel = colorOption.children[1]
                addClass(colorOptionLabel, 'vis-hidden')
            })
            toggleClass(colorOptionLabel, 'vis-hidden')
        })
    })



    // || The :checked css class is added when the user clicks the div containing the radio button.
    const radioButtons = document.querySelectorAll('.radio-button')
    const radioButtonsArray = [...radioButtons]
    
    radioButtonsArray.forEach(radioButton => {
        radioButton.addEventListener('click', () => {
            const radioButtonInput = radioButton.children[0]
            radioButtonInput.checked = true
        })
    })

    // || When the user clicks on one of the gallery-arrow-buttons divs, the gallery will slide to the left or right depending on which arrow was clicked.
    const galleryArrowButtons = document.querySelectorAll('.gallery-arrow-buttons div')
    const galleryArrowButtonsArray = [...galleryArrowButtons]
    const gallery = document.querySelector('.info-gallery-container')

    galleryArrowButtonsArray.forEach(galleryArrowButton => {
        galleryArrowButton.addEventListener('click', () => {
            if (galleryArrowButton.classList.contains('gallery-arrow-buttons-left')) {
                gallery.scrollLeft -= 300
            } else {
                gallery.scrollLeft += 300
            }
        })
    })

    // || Make the sections within the .learn-more-content-container fade in when the user scrolls to them.
    const learnMoreContentSections = document.querySelectorAll('.learn-more-content-container section')
    const learnMoreContentSectionsArray = [...learnMoreContentSections]

    const fadeInSections = () => {
        learnMoreContentSectionsArray.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top
            const sectionBottom = section.getBoundingClientRect().bottom
            const sectionHeight = section.getBoundingClientRect().height

            if (sectionTop < window.innerHeight - sectionHeight / 2 && sectionBottom > sectionHeight / 2) {
                removeClass(section, 'blur')
            } else {
                addClass(section, 'blur')
            }
        })
    }

    window.addEventListener('scroll', () => {
        fadeInSections()
    })
}













