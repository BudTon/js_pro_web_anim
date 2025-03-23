export default class createdLikeBox {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    this.element.insertAdjacentHTML('beforeend', this.createdElement());
  }

  // eslint-disable-next-line class-methods-use-this
  createdElement() {
    return `
    <div class="like-box">
      <button class="btn-like">Like</button>
    </div> 
    `;
  }
}
