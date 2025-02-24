const fruitButton = document.querySelector("#fruit");
const furnitureButton = document.querySelector("#furniture");
const phoneButton = document.querySelector("#phones");
const todosButton = document.querySelector("#todos");

let fruits = [];

const fetchFruits = async () => {
  /* await fetch() 함수는 항상 어떤 값을 return합니다.
        그래서 return 하는 값을 어떤 변수에 담아서 사용합니다 */
  const res = await fetch("http://127.0.0.1:5500/fruits.json");

  const data = await res.json();
  console.log(data);
  fruits = data;
  return data;
};

fruitButton.onclick = fetchFruits;

let phones = [];
const fetchPhones = async () => {
  const res = await fetch("http://127.0.0.1:5500/phones.json");

  const data = await res.json();
  console.log(data);
  phones = data;
  return data;
};

phoneButton.onclick = fetchPhones;

let Furnitures = [];
const fetchFurnitures = async () => {
  const res = await fetch("http://127.0.0.1:5500/furnitures.json");

  const data = await res.json();
  console.log(data);
  phones = data;
  return data;
};

furnitureButton.onclick = fetchFurnitures;

let Todos = [];
const fetchTodos = async () => {
  const res = await fetch("http://127.0.0.1:5500/todos.json");

  const data = await res.json();
  console.log(data);
  phones = data;
  return data;
};

todosButton.onclick = fetchTodos;
