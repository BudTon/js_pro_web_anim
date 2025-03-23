export default class CreatedWidget {
  constructor(parent) {
    this.parent = parent;
    this.collapse = `<div class="task-collapse"> 
                      <div class="task">
                        <h2>9.1 Collapse </h2> 
                      </div>
                      <button class="btn-collapse">Go</button> 
                    </div>`;
    this.callbackChat = `<div class="task-callback-chat"> 
                          <div class="task">
                            <h2>9.2 Callback Chat*</h2>
                          </div>
                          <button class="btn-callback-chat">Go</button>
                        </div>`;
    this.liker = `<div class="task-liker"> 
                    <div class="task">
                      <h2>9.3 Liker*</h2>
                     </div>
                     <button class="btn-liker">Go</button>
                  </div>`;
    this.init();
  }

  init() {
    this.parent.insertAdjacentHTML('beforeend', '<h1>9. Домашнее задание к занятию "Анимации и CSS"</h1>');
    this.parent.insertAdjacentHTML('beforeend', this.collapse);
    this.parent.insertAdjacentHTML('beforeend', this.callbackChat);
    this.parent.insertAdjacentHTML('beforeend', this.liker);
    this.parent.insertAdjacentHTML('beforeend', ' <div class="container-task">');
  }
}
