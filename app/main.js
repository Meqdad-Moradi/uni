// responsive mobile menu
const app = {

    init: () => {
        window.addEventListener('DOMContentLoaded', app.load)
    },

    load: () => {
        app.toggleMenu()
    },

    toggleMenu: () => {
        // get mobile menu elements
        const headerNav = document.querySelector('.header-nav')
        const toggler = document.querySelector('#toggler-btn')

        // toggle navigation
        toggler.addEventListener('click', e => {
            const currentBtn = e.currentTarget

            if (currentBtn.classList.contains('fa-bars') && !headerNav.classList.contains('active')) {
                currentBtn.className = 'fas fa-times'
                headerNav.classList.add('active')
            } else {
                currentBtn.className = 'fas fa-bars'
                headerNav.classList.remove('active')
            }
        })

        // toggle nav
        headerNav.addEventListener('click', e => {
            if (e.target !== e.currentTarget) return

            toggler.className = 'fas fa-bars'
            headerNav.classList.remove('active')
        })
    }
}

app.init()



/////////////////////////
// blog post comments
// select all required elements

const blogForm = document.querySelector('#comment-form')

const blogPosts = {

}