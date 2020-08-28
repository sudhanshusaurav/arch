/* page title */
gsap.from(".header__page__title", {
  y: -500,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  ease: "elastic",
});
/* end page title */

/* Navigation */

const burger = document.querySelector(".menu__burger");
const menu_items = document.querySelector(".menu__bar__items");
const lines = document.querySelector(".line");

burger.addEventListener("click", function () {
  if (menu_items.classList.contains("menu__bar__items__open")) {
    menu_items.classList.remove("menu__bar__items__open");
  } else {
    menu_items.classList.add("menu__bar__items__open");
  }

  if (lines.classList.contains("line__open")) {
    lines.classList.remove("line__open");
  } else {
    lines.classList.add("line__open");
  }
});
/* end Navigation */
