/* media query */

const md = window.matchMedia("(max-width: 991.98px)");
const sm = window.matchMedia("(max-width: 575.98px)");

/* hero slider */
const hero_img = document.querySelector("#hero__slider__img");
const hero_h2 = document.querySelector("#hero__text__h2");
const hero_p = document.querySelector("#hero__text__p");
const hero_btn = document.querySelector("#hero__btn");

const slide_btns = document.querySelectorAll(".slide__indicator__btn");
const slide_1 = document.querySelector("#slide__indicator-1");
const slide_2 = document.querySelector("#slide__indicator-2");
const slide_3 = document.querySelector("#slide__indicator-3");
const slide_4 = document.querySelector("#slide__indicator-4");

function changeSlide() {
  if (slide_1.classList.contains("indicator-active")) {
    if (sm.matches) {
      hero_img.src = "assets/home/mobile/image-hero-paramour.jpg";
    } else if (md.matches) {
      hero_img.src = "assets/home/tablet/image-hero-paramour.jpg";
    } else {
      hero_img.src = "assets/home/desktop/image-hero-paramour.jpg";
    }
    hero_h2.innerHTML = "Project Paramour";
    hero_p.innerHTML =
      "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.";
  } else if (slide_2.classList.contains("indicator-active")) {
    if (sm.matches) {
      hero_img.src = "assets/home/mobile/image-hero-seraph.jpg";
    } else if (md.matches) {
      hero_img.src = "assets/home/tablet/image-hero-seraph.jpg";
    } else {
      hero_img.src = "assets/home/desktop/image-hero-seraph.jpg";
    }

    hero_h2.innerHTML = "Seraph Station";
    hero_p.innerHTML =
      "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.";
  } else if (slide_3.classList.contains("indicator-active")) {
    if (sm.matches) {
      hero_img.src = "assets/home/mobile/image-hero-federal.jpg";
    } else if (md.matches) {
      hero_img.src = "assets/home/tablet/image-hero-federal.jpg";
    } else {
      hero_img.src = "assets/home/desktop/image-hero-federal.jpg";
    }

    hero_h2.innerHTML = "Federal II Tower";
    hero_p.innerHTML =
      "  A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.";
  } else {
    if (sm.matches) {
      hero_img.src = "assets/home/mobile/image-hero-trinity.jpg";
    } else if (md.matches) {
      hero_img.src = "assets/home/tablet/image-hero-trinity.jpg";
    } else {
      hero_img.src = "assets/home/desktop/image-hero-trinity.jpg";
    }

    hero_h2.innerHTML = "Trinity Bank Tower";
    hero_p.innerHTML =
      "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.";
  }
  gsap.from(hero_img, { opacity: 0, duration: 1 });
  gsap.from(hero_h2, { xPercent: 100, duration: 1, ease: "elastic" });
  gsap.from(hero_p, { xPercent: -100, duration: 1, ease: "elastic" });
  gsap.from(hero_btn, {
    yPercent: -100,
    opacity: 0,
    duration: 1,
    ease: "elastic",
    delay: 1,
  });
}

changeSlide();

function activeSlide() {
  if (slide_1.classList.contains("indicator-active")) {
    slide_1.classList.remove("indicator-active");
    slide_2.classList.add("indicator-active");
  } else if (slide_2.classList.contains("indicator-active")) {
    slide_2.classList.remove("indicator-active");
    slide_3.classList.add("indicator-active");
  } else if (slide_3.classList.contains("indicator-active")) {
    slide_3.classList.remove("indicator-active");
    slide_4.classList.add("indicator-active");
  } else {
    slide_4.classList.remove("indicator-active");
    slide_1.classList.add("indicator-active");
  }

  changeSlide();
}

function slider() {
  sId = window.setInterval(activeSlide, 5000);
}

slider();

slide_btns.forEach((slide_btn) => {
  slide_btn.addEventListener("click", function () {
    window.clearInterval(sId);
    for (let i = 0; i < slide_btns.length; i++) {
      slide_btns[i].classList.remove("indicator-active");
    }
    this.classList.add("indicator-active");
    changeSlide();
    slider();
  });
});

/* end hero slider */

/* team section */
const team_img = document.querySelector("#team__img");

if (sm.matches) {
  team_img.src = "assets/home/mobile/image-small-team.jpg";
} else if (md.matches) {
  team_img.src = "assets/home/tablet/image-small-team.jpg";
} else {
  team_img.src = "assets/home/desktop/image-small-team.jpg";
}
/* end team section */

/* features section */
const feature_img1 = document.querySelector("#feature__img-1");
const feature_img2 = document.querySelector("#feature__img-2");
const feature_img3 = document.querySelector("#feature__img-3");

if (sm.matches) {
  feature_img1.src = "assets/portfolio/mobile/image-del-sol.jpg";
  feature_img2.src = "assets/portfolio/mobile/image-228b.jpg";
  feature_img3.src = "assets/portfolio/mobile/image-prototype.jpg";
} else if (md.matches) {
  feature_img1.src = "assets/portfolio/tablet/image-del-sol.jpg";
  feature_img2.src = "assets/portfolio/tablet/image-228b.jpg";
  feature_img3.src = "assets/portfolio/tablet/image-prototype.jpg";
} else {
  feature_img1.src = "assets/portfolio/desktop/image-del-sol.jpg";
  feature_img2.src = "assets/portfolio/desktop/image-228b.jpg";
  feature_img3.src = "assets/portfolio/desktop/image-prototype.jpg";
}
/* end features section */

const scroll = new LocomotiveScroll({
  el: document.querySelector(".scroll__linear"),
  smooth: true,
});
