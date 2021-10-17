// global campus
const globalCampusItems = [{
        name: 'london',
        imgs: [
            './images/london.png',
            './images/london2.jpg',
            './images/london3.jpg'
        ]
    },
    {
        name: 'newyork',
        imgs: [
            './images/newyork.png',
            './images/newyork1.jpg'
        ]
    },
    {
        name: 'washington',
        imgs: [
            './images/washington.png',
            './images/washington1.jpg'
        ]
    }
]


// select all required element from global campus section
const globalCampusContent = document.querySelector('.global-campus-content')

// read data dynamically
const globalCampus = () => {
    const firstImgs = globalCampusItems.map(item => {
        return `<div class="cart">
                <img src="${item.imgs[1]}" alt="${item.name}">
                <p class="title">landon</p>
            </div>`
    }).join(' ')

    globalCampusContent.innerHTML = firstImgs
}


// display global campus items
window.addEventListener('DOMContentLoaded', globalCampus)