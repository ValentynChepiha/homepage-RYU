const getArrow = ( classes = [], image = '' ) => {
  if(classes.length || image.trim()) {
    return `<img class="${classes.join(' ')}" src="./images/${image}">` ;
  }
  return '';
};

const getDropdown = () => {
  return `<div class="button-lang-dropdown"> <div class="button-lang-value"></div><ul class="button-lang-items"></ul></div>`;
};