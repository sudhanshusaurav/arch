/* media query */
const md = window.matchMedia("(max-width: 991.98px)");
const sm = window.matchMedia("(max-width: 575.98px)");

/* hero section */
const hero = document.querySelector("#contact__hero");

if (sm.matches) {
  hero.src = "assets/contact/mobile/image-hero.jpg";
} else if (md.matches) {
  hero.src = "assets/contact/tablet/image-hero.jpg";
} else {
  hero.src = "assets/contact/desktop/image-hero.jpg";
}

/* end hero section */

/* map section */
const map = document.querySelector("#map__img");
if (sm.matches) {
  map.src = "assets/contact/mobile/image-map.png";
} else if (md.matches) {
  map.src = "assets/contact/tablet/image-map.png";
} else {
  map.src = "assets/contact/desktop/image-map.png";
}
/* end map section */

const scroll = new LocomotiveScroll({
  el: document.querySelector(".scroll__linear"),
  smooth: true,
});
