/* media query */
const md = window.matchMedia("(max-width: 991.98px)");
const sm = window.matchMedia("(max-width: 575.98px)");

const hero = document.querySelector("#about__hero");

if (sm.matches) {
  hero.src = "assets/about/mobile/image-hero.jpg";
} else if (md.matches) {
  hero.src = "assets/about/tablet/image-hero.jpg";
} else {
  hero.src = "assets/about/desktop/image-hero.jpg";
}

const scroll = new LocomotiveScroll({
  el: document.querySelector(".scroll__linear"),
  smooth: true,
});
