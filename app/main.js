//////////////////////////
// toggle the navigation bar
const headerNav = document.querySelector('.header-nav')
const headerNavList = document.querySelector('.nav-list')
const toggler = document.querySelector('#toggler-btn')


// toggler navigation
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

// header nav toggling 
headerNav.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return

    toggler.className = 'fas fa-bars'
    headerNav.classList.remove('active')
})