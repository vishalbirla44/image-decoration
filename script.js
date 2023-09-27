const mobile_nav = document.querySelector('.toogle-btn');
const nav_header = document.querySelector('.header')

const tooggleNavbar = () => {
  // alert("plzzz");
  nav_header.classList.toggle("active")
}


mobile_nav.addEventListener("click", () => tooggleNavbar());