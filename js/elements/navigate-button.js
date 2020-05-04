class NavigateButton extends RootButton {
  constructor ( classNames, tagName ) {
    super( tagName );
    this.classNames = classNames;
  }

  create( content = '' ) {
    this.classNames.forEach(className => {
      this.element.classList.add(className);
    });

    this.element.innerHTML = '';
    this.element.insertAdjacentHTML('afterbegin', content);

    this.append();
    return this;
  }
}