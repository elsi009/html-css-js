const apiUrl = "http://api.seibro.or.kr/openapi/service/StockSvc";

const serviceKey =
  "MW5AXazYOfZoz46a1oVy%2FFPMg3H%2BA0o010oRwOwTSOVEyVdSSNAQ%2BZEI6PATXgaXh7GX8YR87w93PK9KBB74jw%3D%3D";

// json()
const fetchSido = async (url, container, targets) => {
  //! /로 주소를 구분함 endpoint
  //Todo 1. url 인자값 받기

  const res = await fetch(url);
  console.log(res);

  if (!res.ok) {
    return alert(res.statusText);
  }

  //! const data = await res.json(); json으로 전달받은 데이터만 가공해줌

  const data = await res.text();

  console.log(typeof data, data);

  const domParser = new DOMParser();
  const node = domParser.parseFromString(data, "text/xml");

  //Todo : 가져올 태그 이름 확인하기
  //! item

  const items = node.getElementsByTagName("item"); //Todo 2.컨테이너 이름

  console.log(items);

  let cities = [];
  //Todo : 가져올 값 이름 확인하기
  //! orgCd, orgdownNm

  for (let city of items) {
    let item = {};
    const targets = ["orgCd", "orgdownNm"];

    for (let target of targets) {
      item[target] = city.getElementsByTagName(target)[0].textContent;
    }
    cities.push(item);
  }
  console.log(item);
};

fetchSido(`${apiUrl}/sido?serviceKey=${serviceKey}`, "item", [
  "orgCd",
  "orgdownNm",
]);

const url2 = `${apiUrl}/shelter?serviceKey=${serviceKey}&upr_cd=6110000&org_cd=3220000`;

const targets2 = ["careRegNo", "careNm"];
fetchSido(url2, "item", targets2);

const url3 = `${apiUrl}/abandonmentPublic?serviceKey=${serviceKey}`;

const t3 = ["noticeNo", "age", "weight", "kindCd", "specialMark"];

fetchSido(url3, "item", t3);
