export default class Board {
  constructor(element) {
    this.element = element;
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    const max = 16;
    const board = document.querySelector('.board');

    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= max; i++) {
      const field = `<div class="field" id="f${i}"></div>`;
      board.innerHTML += field;
    }
  }
}
