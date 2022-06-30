const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 5000);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1656440401665-7775f9eee002?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60" alt="hello"/>';
  title.innerHTML = "Lorem ipsum dolor sit amet";
  excerpt.innerHTML =
    " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, sunt?";
  profile_img.innerHTML =
    '<img src="https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60" alt="image "/>';

  name.innerHTML = "John Doe";
  date.innerHTML = "June 29, 2022";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
