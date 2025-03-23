export default function taskCallbackChat() {
  const widgetCreateForm = document.querySelector('.widget-create-form');
  const callbackChat = document.querySelector('.callback-chat');
  const closeIcon = document.querySelector('.close-icon');

  callbackChat.addEventListener('click', () => {
    callbackChat.classList.add('hidden');
    widgetCreateForm.classList.remove('hidden');
  });

  closeIcon.addEventListener('click', () => {
    widgetCreateForm.classList.add('hidden');
    callbackChat.classList.remove('hidden');
  });
}
