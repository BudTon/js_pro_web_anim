export default class CreatedCallbackChat {
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
    <div class="callback-chat"></div>
    <div data-widget="subscribe" class="widget-create-form shadow hidden">
      <form data-id="subscribe-form" class="create-form popup">
        <div class="title-box">
          <p class="title">Напишите нам</p>
          <i class="close-icon">×</i>
        </div>
        <textarea data-id="description" name="description" class="input-textarea" required></textarea>
        <div class="button-box">
          <button class="btn-widget">Отправить</button>
        </div>
      </form>
    </div>
    `;
  }
}
