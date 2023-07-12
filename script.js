console.log("its working");
const readMoreLinks = document.querySelectorAll('.read-more');

readMoreLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const postPreview = event.target.parentElement;
    const postContent = postPreview.querySelector('.post-content');

    // Show the remaining paragraphs
    const paragraphs = postContent.querySelectorAll('p');
    for (let i = 1; i < paragraphs.length; i++) {
      paragraphs[i].style.display = 'block';
    }

    // Hide the "Read More" link
    link.style.display = 'none';
  });
});
let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > 1; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log("Option clicked:", mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "default.css";
  }

  if (mode == "blue") {
    document.getElementById("theme-style").href = "blue.css";
  }

  if (mode == "green") {
    document.getElementById("theme-style").href = "green.css";
  }

  if (mode == "purple") {
    document.getElementById("theme-style").href = "purple.css";
  }

  localStorage.setItem("theme", mode);
}
