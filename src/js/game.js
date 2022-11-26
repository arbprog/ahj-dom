import Board from './board';
import Field from './field';
import Play from './play';

const start = document.querySelector('.start');
const status = document.querySelector('.status');

start.addEventListener('click', (evt) => {
  evt.preventDefault();

  status.classList.remove('hide');
  start.classList.add('hide');

  const board = new Board();
  board.render();

  const field = new Field();
  field.changeField();

  const play = new Play();
  play.inactive();
});
