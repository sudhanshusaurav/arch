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

gsap.registerPlugin(ScrollTrigger);

gsap.from(".heritage", {
  duration: 1,
  opacity: 0,
  ease: "power2.out",
  scrollTrigger: { trigger: ".heritage", start: "top center" },
});

gsap.from(".leader", {
  duration: 1,
  opacity: 0,
  ease: "power2.out",
  scrollTrigger: { trigger: ".leader", start: "top center" },
});

gsap.from(".footer", {
  duration: 1,
  opacity: 0,
  ease: "power2.out",
  scrollTrigger: { trigger: ".footer", start: "top bottom" },
});
