// get the document id
let pageId = document.body.id;
console.log(pageId);

// responsive mobile menu
const app = {
  init: () => {
    window.addEventListener("DOMContentLoaded", app.load);
  },

  load: () => {
    app.toggleMenu();
  },

  toggleMenu: () => {
    // get mobile menu elements
    const headerNav = document.querySelector(".header-nav");
    const toggler = document.querySelector("#toggler-btn");

    // toggle navigation
    toggler.addEventListener("click", (e) => {
      const currentBtn = e.currentTarget;

      if (
        currentBtn.classList.contains("fa-bars") &&
        !headerNav.classList.contains("active")
      ) {
        currentBtn.className = "fas fa-times";
        headerNav.classList.add("active");
      } else {
        currentBtn.className = "fas fa-bars";
        headerNav.classList.remove("active");
      }
    });

    // toggle nav
    headerNav.addEventListener("click", (e) => {
      if (e.target !== e.currentTarget) return;

      toggler.className = "fas fa-bars";
      headerNav.classList.remove("active");
    });
  },
};

app.init();

/////////////////////////
// blog post comments
// select all required elements

const blogPosts = {
  loadComment: () => {
    window.addEventListener("DOMContentLoaded", blogPosts.main);
  },

  main: () => {
    blogPosts.getEl();
  },

  getEl: () => {
    if (pageId && pageId === "blog-page") {
      const blogForm = document.querySelector("#comment-form");
      const name = document.querySelector("#name");
      const email = document.querySelector("#email");
      const message = document.querySelector("#message");

      blogPosts.createPost(blogForm, name, email, message);
    }
  },

  createPost: (form, name, email, message) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (name.value === "") {
        blogPosts.error(name, "Please insert your full name!");
        return;
      } else {
        blogPosts.success(name);
      }

      if (email.value === "") {
        blogPosts.error(email, "Please insert your e-mail!");
        return;
      } else {
        blogPosts.success(email);
      }

      if (message.value === "") {
        blogPosts.error(message, "Please leave a comment!");
        return;
      } else {
        blogPosts.success(message);
      }

      // create post comment
      let date = new Date();
      let year =
        date.getDate() + "." + date.getMonth() + "." + date.getFullYear();
      blogPosts.createComment(name.value, year, message.value);

      // clear all inputs
      name.value = "";
      email.value = "";
      message.value = "";
    });
  },

  error: (input, msg) => {
    const parentEl = input.parentElement;
    const small = parentEl.querySelector("small");

    parentEl.className = "input-container error";
    small.textContent = msg;
  },

  success: (input) => {
    const parentEl = input.parentElement;
    parentEl.className = "input-container success";
  },

  createComment: (uesrName, postDate, userMsg) => {
    const comment = document.querySelector("#comment");
    comment.innerHTML += `
            <div class="comment">
                <div class="user">
                    <i class="fas fa-user"></i>
                </div>
                <div class="user-details">
                    <h3 class="subtitle">${uesrName}<span class="details">${postDate}</span></h3>
                    <p class="body-text">${userMsg}</p>
                </div>
            </div>`;
  },
};

blogPosts.loadComment();

//////////////////////////
// post category

// all posts
let postItems = [
  {
    id: 1,
    title: "Business analytics",
    img: "./images/banner2.jpg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci id laudantium neque, quam
    quis autem soluta sint consequatur voluptate minima repellat in quas. Mollitia ratione
    molestiae doloremque cumque odio exercitationem voluptates totam corporis ducimus aperiam
    expedita non, minima quaerat, omnis amet animi. Dolore, perspiciatis eum. Eius laboriosam
    aspernatur fugit aliquid similique minima ducimus nihil aut hic nostrum tempore cum,
    quibusdam deserunt modi tempora dicta voluptates dolores ut quam facilis itaque. <br> <br>
    Doloribus
    consequatur aut est unde, blanditiis doloremque perspiciatis earum non eveniet laudantium?
    Sapiente facere tempora.`,
  },
  {
    id: 2,
    title: "Data science",
    img: "./images/data-science.jpg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci id laudantium neque, quam
    quis autem soluta sint consequatur voluptate minima repellat in quas. Mollitia ratione
    molestiae doloremque cumque odio exercitationem voluptates totam corporis ducimus aperiam
    expedita non, minima quaerat, omnis amet animi. Dolore, perspiciatis eum. Eius laboriosam
    aspernatur fugit aliquid similique minima ducimus nihil aut hic nostrum tempore cum,
    quibusdam deserunt modi tempora dicta voluptates dolores ut quam facilis itaque. <br> <br>
    Doloribus
    consequatur aut est unde, blanditiis doloremque perspiciatis earum non eveniet laudantium?
    Sapiente facere tempora, accusamus quidem velit ut nam? Optio eaque repudiandae praesentium
    explicabo in quis incidunt unde earum fuga aperiam reiciendis eligendi illum nostrum
    aliquam, non vel atque maiores excepturi dicta placeat inventore exercitationem.`,
  },
  {
    id: 3,
    title: "Machine learning",
    img: "./images/machine-learning.jpg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci id laudantium neque, quam
    quis autem soluta sint consequatur voluptate minima repellat in quas. Mollitia ratione
    molestiae doloremque cumque odio exercitationem voluptates totam corporis ducimus aperiam
    expedita non, minima quaerat, omnis amet animi. Dolore, perspiciatis eum. Eius laboriosam
    aspernatur fugit aliquid similique minima ducimus nihil aut hic nostrum tempore cum,
    quibusdam deserunt modi tempora dicta voluptates dolores ut quam facilis itaque.`,
  },
  {
    id: 4,
    title: "Computer science",
    img: "./images/computer-science.jpg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci id laudantium neque, quam
    quis autem soluta sint consequatur voluptate minima repellat in quas. Mollitia ratione
    molestiae doloremque cumque odio exercitationem voluptates totam corporis ducimus aperiam
    expedita non, minima quaerat, omnis amet animi. Dolore, perspiciatis eum. Eius laboriosam
    aspernatur fugit aliquid similique minima ducimus nihil aut hic nostrum tempore cum,
    quibusdam deserunt modi tempora dicta voluptates dolores ut quam facilis itaque.`,
  },
  {
    id: 5,
    title: "AutoCAD",
    img: "./images/autoCAD.jpg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci id laudantium neque, quam
    quis autem soluta sint consequatur voluptate minima repellat in quas. Mollitia ratione
    molestiae doloremque cumque odio exercitationem voluptates totam corporis ducimus aperiam
    expedita non, minima quaerat, omnis amet animi. Dolore, perspiciatis eum. Eius laboriosam
    aspernatur fugit aliquid similique minima ducimus nihil aut hic nostrum tempore cum,
    quibusdam deserunt modi tempora dicta voluptates dolores ut quam facilis itaque.`,
  },
  {
    id: 6,
    title: "Ecommerce",
    img: "./images/ecommerce.jpg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci id laudantium neque, quam
    quis autem soluta sint consequatur voluptate minima repellat in quas. Mollitia ratione
    molestiae doloremque cumque odio exercitationem voluptates totam corporis ducimus aperiam
    expedita non, minima quaerat, omnis amet animi. Dolore, perspiciatis eum. Eius laboriosam
    aspernatur fugit aliquid similique minima ducimus nihil aut hic nostrum tempore cum,
    quibusdam deserunt modi tempora dicta voluptates dolores ut quam facilis itaque.`,
  },
  {
    id: 7,
    title: "Journalism",
    img: "./images/journalism.jpg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci id laudantium neque, quam
    quis autem soluta sint consequatur voluptate minima repellat in quas. Mollitia ratione
    molestiae doloremque cumque odio exercitationem voluptates totam corporis ducimus aperiam
    expedita non, minima quaerat, omnis amet animi. Dolore, perspiciatis eum. Eius laboriosam
    aspernatur fugit aliquid similique minima ducimus nihil aut hic nostrum tempore cum,
    quibusdam deserunt modi tempora dicta voluptates dolores ut quam facilis itaque.`,
  },
];

const postList = document.querySelector(".category-list");
const postMainTitle = document.querySelector("#post-title");
const postText = document.querySelector("#post-text");
const postImg = document.querySelector("#post-img");

const postCategories = () => {
  const titles = postItems
    .map((item) => {
      return `<li>${item.title}</li>`;
    })
    .join(" ");

  postList.innerHTML = titles;

  //  select post list elements
  const lists = postList.querySelectorAll("li");
  lists.forEach((list, index) =>
    list.addEventListener("click", (e) => {
      postImg.src = postItems[index].img;
      postMainTitle.textContent = postItems[index].title;
      postText.textContent = postItems[index].desc;
    })
  );
};

// call post category function
if (pageId && pageId === "blog-page") {
  postCategories();
}

/////////////////////
// contact form validation
const contactPage = {
  load: () => {
    window.addEventListener("DOMContentLoaded", contactPage.main);
  },

  main: () => {
    contactPage.getEl();
  },

  getEl: () => {
    if (pageId && pageId === "contact-page") {
      const contactForm = document.querySelector("#contact-form");
      const name = document.querySelector("#name");
      const email = document.querySelector("#email");
      const message = document.querySelector("#message");

      contactPage.checkForm(contactForm, name, email, message);
    }
  },

  checkForm: (form, name, email, message) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (name.value === "") {
        contactPage.error(name, "Please insert your full name!");
        return;
      } else {
        contactPage.success(name);
      }

      if (email.value === "") {
        contactPage.error(email, "Please insert your e-mail!");
        return;
      } else {
        contactPage.success(email);
      }

      // clear all inputs
      name.value = "";
      email.value = "";
      message.value = "";
    });
  },

  error: (input, msg) => {
    const parentEl = input.parentElement;
    const small = parentEl.querySelector("small");

    parentEl.className = "input-container error";
    small.textContent = msg;
  },

  success: (input) => {
    const parentEl = input.parentElement;
    parentEl.className = "input-container success";
  },
};

contactPage.load();
