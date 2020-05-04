const backToTop = () => {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -80);
    requestAnimationFrame(backToTop);
  }
};

const backToBottom = () => {
  const { clientHeight: coords } = document.documentElement;
  const { scrollHeight, offsetHeight } = document.body;
  const height = Math.max(scrollHeight, offsetHeight);

  if (window.pageYOffset < height - coords) {
    window.scrollBy(0, 80);
    requestAnimationFrame(backToBottom);
  }
};

document.addEventListener("DOMContentLoaded", event => {
  getDocument();

  const buttonUp = new NavigateButton(["button-up", "navigate-button"]).create(
    getArrow(["navigate-button-image", "navigate-button-rotate"], NavBtnImage)
  );

  const buttonDown = new NavigateButton([
    "button-down",
    "navigate-button"
  ]).create(getArrow(["navigate-button-image"], NavBtnImage));

  const buttonLang = new NavigateButton([
    "button-lang",
    "navigate-button"
  ]).create(getDropdown(listLang));

  const dropdownLang = new Dropdown(".button-lang-dropdown", listLang);

  const goBottomBtn = document.querySelector(".button-down");
  goBottomBtn.classList.add("dropdown-open");

  document.querySelector(".button-up").addEventListener("click", backToTop);
  document
    .querySelector(".button-down")
    .addEventListener("click", backToBottom);
});

window.addEventListener("scroll", e => {
  const goTopBtn = document.querySelector(".button-up");
  const goBottomBtn = document.querySelector(".button-down");

  const { pageYOffset: scrolled } = window;
  const { clientHeight: coords } = document.documentElement;
  const { scrollHeight, offsetHeight } = document.body;
  const height = Math.max(scrollHeight, offsetHeight);

  scrolled > coords
    ? goTopBtn.classList.add("dropdown-open")
    : goTopBtn.classList.remove("dropdown-open");

  height - scrolled > coords * 1.1
    ? goBottomBtn.classList.add("dropdown-open")
    : goBottomBtn.classList.remove("dropdown-open");
});
