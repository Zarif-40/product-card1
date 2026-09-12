export class Form {
  constructor(formSelector) {
    this.formElement = document.querySelector(formSelector);
    if (!this.formElement) return;
    this._init();
  }

  _init() {
    this.formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      
      if (this.validate()) {
        const data = this.getFormData();
        console.log('Данные формы успешной отправлены:', data);
        this.formElement.reset();
      }
    });
  }

  validate() {
    const passwordInput = this.formElement.querySelector('#password');
    const confirmPasswordInput = this.formElement.querySelector('#confirm-password');

    if (!passwordInput || !confirmPasswordInput) return true;

    if (passwordInput.value !== confirmPasswordInput.value) {
      alert('Пароли не совпадают!');
      return false;
    }

    return true;
  }

  getFormData() {
    const formData = new FormData(this.formElement);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    return data;
  }
}
