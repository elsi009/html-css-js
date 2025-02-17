const imgs = [
  "https://cdn-icons-png.flaticon.com/128/15686/15686578.png",
  "https://cdn-icons-png.flaticon.com/128/13992/13992554.png",
  "https://cdn-icons-png.flaticon.com/128/12355/12355903.png",
];

const messages = ["안내면 진다!", "가위", "바위", "보!"];

const generateRandomNumber = () => Math.floor(Math.random() * 3);

let imgIndex1 = generateRandomNumber();
let imgIndex2 = generateRandomNumber();

console.log(imgIndex1, imgIndex2);

let time = 0;
let index = 0;

const root = document.querySelector("#root");
const con = document.querySelector(".con");
const h1 = document.querySelector("h1");
const button = document.querySelector("button");
const images = document.querySelectorAll("img");

images.forEach((image, index) => (image.src = imgs[index]));

// 0 가위
// 1 바위
// 2 보

const whoWins = (v1, v2) => {
  if (v1 === v2) {
    return "비김";
  }

  if (v1 === 0 && v2 === 1) {
    return "패배...";
  }
  if (v1 === 1 && v2 === 2) {
    return "패배...";
  }
  if (v1 === 2 && v2 === 0) {
    return "패배...";
  }
  return "승리!";
};

button.onclick = () => {
  const titleId = setInterval(() => {
    console.log("1초 지남");
    h1.innerText = messages[index];
    index += 1;
    time += 1;
    if (index === 4) {
      clearInterval(titleId);
    }
  }, 1000);

  const imgId = setInterval(() => {
    imgIndex1 = generateRandomNumber();
    imgIndex2 = generateRandomNumber();
    images[0].src = imgs[imgIndex1];
    images[2].src = imgs[imgIndex2];
    if (index === 4) {
      clearInterval(imgId);
      h1.innerText = whoWins(imgIndex1, imgIndex2);
      button.innerText = "한 판 더!";
      index = 0;
      imgIndex1 = generateRandomNumber();
      imgIndex2 = generateRandomNumber();
      clearInterval(titleId);
      clearInterval(imgId);
    }
  }, 100);

  con.innerHTML = null;

  const h2 = document.createElement("h2");
  h2.innerText = "VS";
  con.append(images[0], h2, images[2]);
};
