const form = document.querySelector("body>form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //새로고침 방지
  const ID = document.querySelector("#i");
  console.log(ID.value);

  const PS = document.querySelector("#p");
  console.log(PS.value);

  const cp = document.querySelector("#c");
  console.log(cp.value);

  const birth = document.querySelector("#b");
  console.log(birth.value);

  if (ID.value.length === 0) {
    alert("아이디를 입력하세요");
    return ID.focus();
  }
  if (PS.value.length === 0) {
    alert("비밀번호를 입력하세요");
    return PS.focus();
  }

  if (cp.value.length === 0) {
    alert("비밀번호를 확인해주세요.");
    return cp.focus();
  }

  if (PS.value !== cp.value) {
    alert("비밀번호를 확인해주세요");
    return cp.focus();
  }

  if (birth.value.length < 8) {
    alert("생년월일을 다시 입력하세요 ");
    return birth.focus();
  }

  const message = `${ID.value},${PS.value}가 맞으십니까?`;
  if (confirm(message)) {
    alert("회원가입을 축하합니다!");
  } else {
    alert("회원가입에 실패하였습니다.");
  }
});
