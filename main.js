import "./comments.js";
import "./products.js";
import "./homework-6.js";
import "./homework-7.js";
import "./homework-8.js";
import "./homework-9.js";
import "./homework-10.js";
import "./homework-11.js";
import { Modal } from './modal.js';
import { Form } from './form.js';

class Phone {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  getInfo() {
    return `${this.brand} ${this.model} ${this.price} $`;
  }
  makeCall(number) {
    console.log(`Звонок на номер ${number} с ${this.brand} ${this.model}...`);
  }
}

class Smartphone extends Phone {
  constructor(brand, model, price, storage, os) {
    super(brand, model, price);
    this.storage = storage;
    this.os = os;
  }
  getInfo() {
    return `${super.getInfo()}, Память: ${this.storage} ГБ, ОС: ${this.os}`;
  }
  installApp(appName) {
    console.log(`Установите приложения "${appName}" на ${this.brand} ${this.model} (${this.os})...`);
  }
}

const myPhone = new Smartphone('Samsung', 'Galaxy S25', 1000, 256, 'Android');
console.log(myPhone.getInfo());
myPhone.makeCall('+77077077070');
myPhone.installApp('Telegram');

const registrationModal = new Modal('modal');
const openButton = document.querySelector('.open-modal-btn');

if (openButton) {
  openButton.addEventListener('click', () => {
    registrationModal.open();
  });
}

const registrationForm = new Form('register-form');
