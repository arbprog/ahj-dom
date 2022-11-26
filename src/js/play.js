export default class Play {
  constructor(element) {
    this.element = element;
    this.fields = document.getElementsByClassName('field');
    this.hit = document.querySelector('.hit');
    this.miss = document.querySelector('.miss');
  }

  reload() {
    this.hit.textContent = 0;
    this.miss.textContent = 0;
  }

  inactive() {
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= this.fields.length; i++) {
      const field = document.getElementById(`f${i}`);

      field.addEventListener('click', () => {
        if (field.classList.contains('goblin')) {
          this.hit.textContent = +this.hit.textContent + 1;
        } else {
          this.miss.textContent = +this.miss.textContent + 1;
        }

        if (this.hit.textContent === '10') {
          // eslint-disable-next-line no-alert
          alert('WINNER!');
          this.reload();
        }

        if (this.miss.textContent === '5') {
          // eslint-disable-next-line no-alert
          alert('SORRY, YOU ARE LOSE!');
          this.reload();
        }
      });
    }
  }
}
