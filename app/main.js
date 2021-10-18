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


const blogPosts = {
    loadComment: () => {
        window.addEventListener('DOMContentLoaded', blogPosts.main)
    },

    main: () => {
        blogPosts.getEl()
    },

    getEl: () => {
        // get the document id
        let page = document.body.id

        if (page && page === 'blog-page') {
            const blogForm = document.querySelector('#comment-form')
            const name = document.querySelector('#name')
            const email = document.querySelector('#email')
            const message = document.querySelector('#message')

            blogPosts.createPost(blogForm, name, email, message)
        }
    },

    createPost: (form, name, email, message) => {

        form.addEventListener('submit', e => {
            e.preventDefault()

            if (name.value === '') {
                blogPosts.error(name, 'Please insert your full name!')
                return
            } else {
                blogPosts.success(name)
            }

            if (email.value === '') {
                blogPosts.error(email, 'Please insert your e-mail!')
                return
            } else {
                blogPosts.success(email)
            }

            if (message.value === '') {
                blogPosts.error(message, 'Please leave a comment!')
                return
            } else {
                blogPosts.success(message)
            }

            // create post comment
            let date = new Date()
            let year = date.getDay() + '.' + date.getDate() + '.' + date.getFullYear()
            blogPosts.createComment(name.value, year, message.value)


            // clear all inputs
            name.value = ''
            email.value = ''
            message.value = ''
        })

    },

    error: (input, msg) => {
        const parentEl = input.parentElement
        const small = parentEl.querySelector('small')

        parentEl.className = 'input-container error'
        small.textContent = msg
    },

    success: (input) => {
        const parentEl = input.parentElement
        parentEl.className = 'input-container success'
    },

    createComment: (uesrName, postDate, userMsg) => {
        const comment = document.querySelector('#comment')
        comment.innerHTML += `
            <div class="comment">
                <div class="user">
                    <i class="fas fa-user"></i>
                </div>
                <div class="user-details">
                    <h3 class="subtitle">${uesrName}<span class="details">${postDate}</span></h3>
                    <p class="body-text">${userMsg}</p>
                </div>
            </div>`
    }
}

blogPosts.loadComment()