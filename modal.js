export class Modal {
  constructor(id) {
    this.id = id;
    this.modalElement = document.getElementById(this.id);
    if (!this.modalElement) return;
    this.overlayElement = this.modalElement.closest('.overlay');
    this._addCloseListener();
  }

  open() {
    if (this.overlayElement) {
      this.overlayElement.classList.add('open');
    }
  }

  close() {
    if (this.overlayElement) {
      this.overlayElement.classList.remove('open');
    }
  }

  isOpen() {
    if (!this.overlayElement) return false;
    return this.overlayElement.classList.contains('open');
  }

  _addCloseListener() {
    const closeButton = this.modalElement.querySelector('.close-modal-btn');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        this.close();
      });
    }
  }
}
