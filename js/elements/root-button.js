class RootButton {
  constructor ( tagName = 'div') {
    this.element = document.createElement( tagName );
  }

  append () {
    document.querySelector('main').insertAdjacentElement('beforeend', this.element);
  }

}

