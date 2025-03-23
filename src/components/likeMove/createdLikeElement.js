import heart from '../../img/heart.png';

export default function createdLikeBox() {
  const likeBox = document.querySelector('.like-box');
  const movies = ['move1', 'move2', 'move3', 'move4'];
  const randomIndex = Math.floor(Math.random() * movies.length);
  const randomElement = movies[randomIndex];
  likeBox.insertAdjacentHTML('afterbegin', `<img  class="img ${randomElement}" src="${heart}">`);
}
