class Dropdown {
  constructor(selector, items) {
    this.element = document.querySelector(selector);
    this.items = items;

    this.element.addEventListener("click", e => {
      if (e.target.classList.contains("btn-lang-val")) {
        this.element.classList.contains("dropdown-open")
          ? this.close()
          : this.open();
        return true;
      }

      if (e.target.classList.contains("btn-lang-item")) {
        this.select(e.target.dataset.id);
      }
    });

    this.element
      .querySelector(".button-lang-value")
      .insertAdjacentHTML(
        "afterbegin",
        `<img class="btn-lang-val" src="./images/${items[0].image}">`
      );

    const listLang = items
      .map(el => {
        return `<li> <img class="btn-lang-item" data-id="${el.id}" src="./images/${el.image}"></li>`;
      })
      .join(" ");

    this.element
      .querySelector(".button-lang-items")
      .insertAdjacentHTML("afterbegin", listLang);
  }

  select(id) {
    const item = this.items.filter(el => el.id === id);
    document.querySelector(".btn-lang-val").src = `./images/${item[0].image}`;

    switch (id) {
      case "Uk":
        getDocument(resumeRyuUk);
        break;
      case "Ru":
        getDocument(resumeRyuRu);
        break;
      default:
        getDocument();
        break;
    }
    this.close();
  }

  open() {
    this.element.classList.add("dropdown-open");
  }

  close() {
    this.element.classList.remove("dropdown-open");
  }
}
