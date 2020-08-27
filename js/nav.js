/* Navigation */

const burger = document.querySelector(".menu__burger");
const menu_items = document.querySelector(".menu__bar__items");

burger.addEventListener("click", function () {
  if (menu_items.classList.contains("menu__bar__items__open")) {
    menu_items.classList.remove("menu__bar__items__open");
  } else {
    menu_items.classList.add("menu__bar__items__open");
  }
});
/* end Navigation */
