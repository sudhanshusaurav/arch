/* media query */
const md = window.matchMedia("(max-width: 991.98px)");
const sm = window.matchMedia("(max-width: 575.98px)");

const portfolio_images = document.querySelectorAll(".portfolio__img");

portfolio_images.forEach((img) => {
  let path = img.src;
  if (sm.matches) {
    let new_path = path.replace("desktop", "mobile");
    img.src = new_path;
  } else if (md.matches) {
    let new_path = path.replace("desktop", "tablet");
    img.src = new_path;
  } else {
    img.src = path;
  }
});
