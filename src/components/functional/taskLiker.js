import createdLikeElement from '../likeMove/createdLikeElement';

export default function taskLiker() {
  const btmLike = document.querySelector('.btn-like');
  btmLike.addEventListener('click', () => {
    createdLikeElement();
    const heartImg = document.querySelector('.img');
    heartImg.addEventListener('animationend', () => {
      heartImg.remove();
    });
  });
}
