function sumCoordinates(point) {
  const [x, y] = point;
  return x + y;
}

function logUserInfo(user) {
  const { name, email } = user;
  console.log(`Имя: ${name}, Email: ${email}`);
}

function getBookInfo(book) {
  const {
    title,
    author: { name },
  } = book;
  return `Книга: ${title}, Автор: ${name}`;
}

function multiplySecondAndFourth(numbers) {
  const [, secod, , fourth = 0] = numbers;
  return secod * fourth;
}

function getOrderDetails({ product, price, ...rest }) {
  return `Продукт: ${product}, Цена: ${price}`;
}

function sumRest(numbers) {
  const [first, ...rest] = numbers;
  return rest.reduce((acc, value) => {
    return acc + value;
  }, 0);
}

export const runTasksDestructuring = () => {
  // Задача 1: Деструктуризация массива координат
  const point = [10, 20];
  console.log(point);

  // Задача 2: Деструктуризация объекта пользователя
  const user = { name: "Алекс", age: 25, email: "alex@tg.dunice.net" };
  logUserInfo(user);

  // Задача 3: Деструктуризация вложенного объекта
  const book = {
    title: "Война и мир",
    author: { name: "Лев Толстой", birthYear: 1828 },
    year: 1865,
  };
  console.log(getBookInfo(book));

  // Задача 4: Деструктуризация массива с пропуском элементов
  const numbers = [1, 2, 3, 4];
  console.log(multiplySecondAndFourth(numbers));
  const numbers2 = [1, 2, 3];
  console.log(multiplySecondAndFourth(numbers2));

  // Задача 5: Деструктуризация параметров функции
  const order = { id: 1, product: "Книга", price: 300, quantity: 2 };
  console.log(getOrderDetails(order));

  // Задача 6: Деструктуризация с rest/spread
  const numbers3 = [1, 2, 3, 4, 5];
  console.log(sumRest(numbers3));

  // Кал
  const { a: b = 5 } = { a: 1 };
  // console.log(a); // ERROR
  console.log(b);
  
};
