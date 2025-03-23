export default class CreatedCollapsible {
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
    <button class="button button-animation">Collapse</button>
    <div class="collapsible">
      <div class="text-box">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem blanditiis impedit autem voluptate delectus est tempora, repudiandae distinctio debitis veritatis fuga architecto aliquid maxime adipisci, voluptates quas totam accusantium. Dicta.
      </div>
    </div>
    `;
  }
}
