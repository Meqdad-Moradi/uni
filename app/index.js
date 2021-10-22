// global campus
const globalCampusItems = [
  {
    name: "london",
    imgs: [
      "./images/london2.jpg",
      "./images/london.png",
      "./images/london1.jpg",
    ],
  },
  {
    name: "newyork",
    imgs: ["./images/newyork1.jpg", "./images/newyork.png"],
  },
  {
    name: "washington",
    imgs: ["./images/washington1.jpg", "./images/washington.png"],
  },
];

// select all required element from global campus section
const globalCampusContent = document.querySelector(".global-campus-content");

// global campus
const globalCampus = () => {
  const firstImgs = globalCampusItems
    .map((item) => {
      return `<div class="cart">
                <img src="${item.imgs[0]}" alt="${item.name}">
                <p class="title">${item.name}</p>
            </div>`;
    })
    .join(" ");

  globalCampusContent.innerHTML = firstImgs;
};

// display global campus items
window.addEventListener("DOMContentLoaded", globalCampus);
