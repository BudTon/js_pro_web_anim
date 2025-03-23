export default function taskCollapse() {
  const collapseBtn = document.querySelector('.button-animation');

  collapseBtn.addEventListener('click', () => {
    const collapsibleElement = document.querySelector('.collapsible');
    if (!collapsibleElement.classList.contains('open')) {
      collapsibleElement.classList.remove('close');
      collapsibleElement.classList.add('open');
    } else {
      collapsibleElement.classList.remove('open');
      collapsibleElement.classList.add('close');
    }
  });
}
