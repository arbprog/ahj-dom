export default class Field {
  constructor() {
    this.playing = true;
    this.activeField = 1;
  }

  stop() {
    this.playing = false;
  }

  // eslint-disable-next-line class-methods-use-this
  getField(index) {
    return document.getElementById(`f${index}`);
  }

  deactivateField(index) {
    return this.getField(index).classList.remove('goblin');
  }

  activateField(index) {
    return this.getField(index).classList.add('goblin');
  }

  changeField() {
    setTimeout(() => {
      if (!this.playing) {
        return;
      }

      this.deactivateField(this.activeField);
      this.activeField = Math.floor(1 + Math.random() * 16);
      this.activateField(this.activeField);
      this.changeField();
    }, 1000);
  }
}
