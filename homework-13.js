class Drink {
  #temperature; 

  constructor(name, size, price, initialTemp = 20) {
    if (new.target === Drink) {
      throw new Error("Абстрактный класс Drink не может иметь прямых экземпляров.");
    }
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = initialTemp;
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(value) {
    if (typeof value === "number") {
      this.#temperature = value;
    }
  }

  getInfo() {
    return `Напиток: ${this.name} | Объём: ${this.size} | Цена: ${this.price} тг | Температура: ${this.#temperature}°C`;
  }

  #prepare() {
    console.log(`[Процесс] Базовая подготовка напитка: "${this.name}"...`);
    this.#temperature = 80;
  }

  serve() {
    this.#prepare();
    console.log(`[Подача] Напиток "${this.name}" готов и подаётся клиенту.`);
  }
}

class Coffee extends Drink {
  constructor(size, price, coffeeBeans, milkType = "без молока") {
    super("Кофе", size, price, 20);
    this.coffeeBeans = coffeeBeans;
    this.milkType = milkType;
  }

  getInfo() {
    return `${super.getInfo()} | Зёрна: ${this.coffeeBeans} | Молоко: ${this.milkType}`;
  }

  serve() {
    console.log(`[Бариста] Вспениваем молоко (${this.milkType}) и мелем зёрна (${this.coffeeBeans})...`);
    super.serve();
    this.setTemperature(65);
  }
}

class Tea extends Drink {
  constructor(size, price, teaType) {
    super("Чай", size, price, 25);
    this.teaType = teaType;
  }

  getInfo() {
    return `${super.getInfo()} | Сорт: ${this.teaType}`;
  }

  serve() {
    console.log(`[Заваривание] Заливаем сорт "${this.teaType}" крутым кипятком...`);
    super.serve();
    this.setTemperature(90);
  }
}

// Лимонад
class Lemonade extends Drink {
  constructor(size, price, flavor, hasIce = true) {
    super("Лимонад", size, price, 15);
    this.flavor = flavor;
    this.hasIce = hasIce;
  }

  getInfo() {
    return `${super.getInfo()} | Вкус: ${this.flavor} | Лёд: ${this.hasIce ? "Да" : "Нет"}`;
  }

  serve() {
    console.log(`[Миксолог] Смешиваем сироп (${this.flavor}) и газировку...`);
    super.serve();
    this.setTemperature(4);
  }
}

class Juice extends Drink {
  constructor(size, price, fruitType, isPulp = false) {
    super("Сок", size, price, 18);
    this.fruitType = fruitType;
    this.isPulp = isPulp;
  }

  getInfo() {
    return `${super.getInfo()} | Фрукт: ${this.fruitType} | С мякотью: ${this.isPulp ? "Да" : "Нет"}`;
  }

  serve() {
    console.log(`[Соковыжималка] Отжимаем свежий сок из фрукта: ${this.fruitType}...`);
    super.serve();
    this.setTemperature(12);
  }
}

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    return `Кафе: "${this.name}" | Адрес: ${this.location}`;
  }

  orderDrink(drink) {
    if (!(drink instanceof Drink)) {
      console.log("Ошибочный заказ: объект не является напитком.");
      return;
    }

    console.log(`\n=== Новый заказ в "${this.name}" ===`);
    console.log(`Детали заказа: ${drink.getInfo()}`);
    
    drink.serve();
    
    console.log(`Заказ завершен. Финальное состояние: ${drink.getInfo()}`);
    console.log(`=== Спасибо за покупку! ===\n`);
  }
}

const myCafe = new Cafe("Coffee & Co", "ул. Абая, 45");
console.log(myCafe.getInfo());

const espresso = new Coffee("M", 1200, "Arabica", "Кокосовое");
const greenTea = new Tea("L", 800, "Молочный Улун");
const citrusLemonade = new Lemonade("L", 1000, "Цитрус-Мята", true);
const orangeJuice = new Juice("S", 900, "Апельсин", true);

myCafe.orderDrink(espresso);
myCafe.orderDrink(greenTea);
myCafe.orderDrink(citrusLemonade);
myCafe.orderDrink(orangeJuice);