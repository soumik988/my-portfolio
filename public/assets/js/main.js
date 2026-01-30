/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*Menu Show*/

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })

}
/*menu hidden*/

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')

}

navLink.forEach(n => n.addEventListener('click', linkAction))



/*=============== HOME TYPED JS ===============*/

const typedHome = new Typed('#home-typed', {
    strings: ['Web Developer', 'Freelancer', 'Designer'],
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 2000,
    loop: true,
    cursorChar: '_',

});


/*=============== ADD SHADOW HEADER ===============*/

const shadowHeader = () => {
    const header = document.getElementById('header')
    //Add a class if the  bottoom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header')
        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== CONTACT EMAIL JS ===============*/

const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    /*
    The code for sending emails is a sample test.

    Create your account at https://www.emailjs.com/ 
    and follow the instructions in the video and images 
     to send emails with your account.

    */

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_jnvim8l', 'template_5xeez3p', '#contact-form', 'jWVmLALWE1TTE_cTb')
        .then(() => {
            //show sent messsage
            contactMessage.textContent = 'Message sent successfully ✅'

            //remove message after five second
            setTimeout(() => {
                contactMessage.textContent = ''

            }, 5000);

            //clear input fields
            contactForm.reset()



        }, () => {
            //show error message
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })


}

contactForm.addEventListener('submit', sendEmail)


/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)




/*CUSTOM CURSOR*/
const cursor = document.querySelector('.cursor')
let mouseX = 0, mouseY = 0//Store mouse poisition

const cursorMove = () => {
    cursor.style.left = `${mouseX}px`
    cursor.style.top = `${mouseY}px`
    cursor.style.transform = 'translate(-50%,-50%)'

    //Upadte the cursor animation
    requestAnimationFrame(cursorMove)

}

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
})
cursorMove()

const a = document.querySelectorAll('a')

a.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursor.classList.add('hide-cursor')
    })
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hide-cursor')
    })
})

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    //reset:true,//Animations repat

})

sr.reveal(`.home__content , .resume__content:nth-child(1) , .footer__container`)
sr.reveal(`.home__data,.resume__content:nth-child(2)`, { delay: 300, origin: 'bottom' })

sr.reveal(`.about__content  , .contact__content`, { origin: 'bottom' })
sr.reveal(`.about__image , .contact__form`, { delay: 300 })

sr.reveal(`.projects__card`, { interval: 100 })

