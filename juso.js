const service_key = "U01TX0FVVEgyMDI0MDkyNDIxMDcwNjExNTEwODA=";

const form = document.querySelector("form");
const fetchXml = async (url, container, targets) => {
  //! /로 주소를 구분함 endpoint
  //Todo 1. url 인자값으로 받기
  const res = await fetch(url);
  console.log(res);
  if (!res.ok) {
    return alert(res.statusText);
  }
  //!   const data = await res.json() json으로 전달받은 데이터만 가공 해줌
  const data = await res.text(); //! xml 자료 받아오는 법
  const domParser = new DOMParser();
  const node = domParser.parseFromString(data, "text/xml");
  //Todo: 가져올 태그 이름 확인하기
  //! item
  const items = node.getElementsByTagName(container); //Todo 2. 컨테이너이름 인자값으로 받기
  let cities = [];
  //Todo: 가져올 값 이름 확인하기
  //! orgCd, orgdownNm
  for (let city of items) {
    let item = {};
    //Todo 3. targets 인자값으로 받기
    for (let target of targets) {
      item[target] = city.getElementsByTagName(target)[0].textContent;
    }
    cities.push(item);
  }
  console.log(cities);
};
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("form");

  const input = document.querySelector("input");
  const value = input.value;

  const url = encodeURI(
    `https://business.juso.go.kr/addrlink/addrLinkApiJsonp.do?countPerPage=20&keyword=${value}&confmKey=${service_key}&firstSort=road`
  );

  const res = await fetch(url, { method: "POST" });

  //   console.log(res);

  //   const json = await res.json();
  let text = await res.text();
  console.log(text);
  text = text.replace(`({'returnXml':'`, "").replace(`'})`, "");

  const 추출기 = new DOMParser();
  const 가공한추출기 = 추출기.parseFromString(text, "text/xml");
  const 첫번째가공데이터 = 가공한추출기.getElementsByTagName("juso");

  let data = [];

  for (let 첫번째아이템 of 첫번째가공데이터) {
    const 태그들 = ["roadAddr", "zipNo", "engAddr"];
    let 두번째추출물 = {};
    console.log(두번째추출물);

    for (let 태그 of 태그들) {
      두번째추출물[태그] =
        첫번째아이템.getElementsByTagName(태그)[0].textContent;
    }
    console.log(두번째추출물);
    data.push(두번째추출물);
  }
  console.log(data);
  const ul = document.querySelector("ul");
  ul.innerHTML = null;
  for (let 완성된아이템 of data) {
    const li = document.createElement("li");
    li.innerHTML = `<button>
    <p>${완성된아이템.roadAddr}</p>
    <p>${완성된아이템.zipNo}</p>
    <p>${완성된아이템.engAddr}</p>
    </button>`;
    ul.append(li);
  }
  document.body.append(ul);
});

// const items = ["a", "b", "c", "d"];
// const targets = ["z", "x", "y"];

// let data = [];

// for (let item of items) {
//   let itemData = {};
//   for (let target of targets) {
//     itemData[target] = target;
//   }
//   data.push(itemData);
// }
