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

/* contact form validation */

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const formGroups = document.querySelectorAll(".form-group");

const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function checkInputs() {
  const u_name = name.value.trim();
  const u_email = email.value.trim();
  const u_messagge = message.value.trim();

  if (u_name === "") {
    setErrorFor(name, "can't be empty");
  } else {
    setSuccessFor(name);
  }

  if (u_email === "") {
    setErrorFor(email, "can't be empty");
  } else if (!re.test(u_email)) {
    setErrorFor(email, "invalid email");
  } else {
    setSuccessFor(email);
  }

  if (u_messagge === "") {
    setErrorFor(message, "can't be empty");
  } else {
    setSuccessFor(message);
  }

  let flag = 0;
  formGroups.forEach((fg) => {
    if (fg.classList.contains("form-group-error")) {
      flag = 1;
    }
  });

  if (flag == 0) {
    return true;
  } else {
    return false;
  }
}

const nameError = document.querySelector("#name__error");
const emailError = document.querySelector("#email__error");
const messageError = document.querySelector("#message__error");

function setErrorFor(input, message) {
  const formGroup = input.parentElement;
  const formText = formGroup.querySelector(".form-text");

  formText.innerHTML = message;
  formGroup.classList.add("form-group-error");
}

function setSuccessFor(input) {
  const formGroup = input.parentElement;
  formGroup.classList.remove("form-group-error");
}

gsap.registerPlugin(ScrollTrigger);

gsap.from(".contact", {
  duration: 1,
  opacity: 0,
  ease: "power2.out",
  scrollTrigger: { trigger: ".contact", start: "top center" },
});

gsap.from(".map", {
  duration: 1,
  opacity: 0,
  ease: "power2.out",
  scrollTrigger: { trigger: ".map", start: "top center" },
});

gsap.from(".connect", {
  duration: 1,
  opacity: 0,
  ease: "power2.out",
  scrollTrigger: { trigger: ".connect", start: "top center" },
});

gsap.from(".footer", {
  duration: 1,
  opacity: 0,
  ease: "power2.out",
  scrollTrigger: { trigger: ".footer", start: "top bottom" },
});
