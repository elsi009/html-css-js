const root = document.querySelector("#root");
const title = document.querySelector("body > #root > h1");
const button = document.querySelector("button");
const con = document.querySelector(".con");

const message = ["안내면 진다!", "가위", "바위", "보"];
let msgIndex = 0;

let intervalId = null;
let time = 0;

const span1 = document.createElement("span");
const span2 = document.createElement("span");

let imgIndex = 0;
let imgIndex2 = 2;

const img = document.querySelectorAll("img");

const imgs = [
  "https://cdn-icons-png.flaticon.com/128/15686/15686578.png",
  "https://cdn-icons-png.flaticon.com/128/13992/13992554.png",
  "https://cdn-icons-png.flaticon.com/128/12355/12355903.png",
];

img.forEach((i, index) => (i.src = imgs[index]));
img[0].src = imgs[0];

root.append(span1);
root.append(span2);

button.onclick = () => {
  title.innerText = message[msgIndex];
  if (msgIndex === message.length) {
    return (title.innerText = "이겼다!");
  }
  msgIndex += 1;

  intervalId = setInterval(() => {
    console.log("time is ticking...");
    time += 0.25;

    if (time >= 3) {
      clearInterval(intervalId);
    }
    if (imgIndex === 2) {
      imgIndex = 0;
    } else {
      imgIndex += 1;
    }
    if (imgIndex2 === 2) {
      imgIndex2 = 0;
    } else {
      imgIndex2 += 1;
    }
    span1.innerText = time;

    const n1 = Math.floor(Math.random() * 3);
    const n2 = Math.floor(Math.random() * 3);

    imgIndex = n1;
    imgIndex2 = n2;

    img[0].src = imgs[imgIndex];
    img[2].src = imgs[imgIndex2];
  }, 250);

  con.innerHTML = null;
  const h2 = document.createElement("h2");
  h2.innerText = "VS";
  con.append(img[0], h2, img[2]);
};

const number = Math.floor(Math.random() * 3);

console.log(number);
