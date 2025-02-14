# form이란?

양식을 제출한다.

1. 인풋창 입력하고 Enter 했을때 작동하면 양식 : 폼

2. ctrl + shift + c 개발자도구로 form 태그 확인하기

   - 예시 : 회원가입 폼
   - 인스타 댓글 폼
   - 카톡 메시지 엔터 : 폼

3. 용도 : 추가/수정 create/update

4. 사용법 :
   -label+input+select: 내용물
   -button : 동작하는 버튼

5. 특징 : 제출했을때 무조건 새로고침
   - 해결 : 새로고침 방지 (js)

## input

1. type: 글자 또는 비밀번호 암호화 가능 ctrl+space bar
2. label 태그와 연결가능
   -label의 for 값과 input의 id 값을 같게 주면 됨

## select

1. label 와 연결하면 좋음
2. option 태그와 사용함
<select>
<option value="옵션1">option1</option>
</select>

- option 을 선택할 때 보이는 글자가 아니라 option
  태그 안의 value 값을 받아옴

3. value를 입력하지 않은 option태그를 placeholder처럼 사용
   -placeholder : 예시를 적을 때 사용, 사용 설명
4. selected 속성을 부여해서 미리 값을 정해줄 수 있음 -중복되게 부여한다면 마지막 옵션을 선택해줌

## 제출버튼

1.button
-type 속성의 기본값이 submit임 **form 태그 안에서 됨** -양식 제출 안하게 하려면 type button; -초기화 => reset
2.input button
-value값에 이름을 넣어줘야함. 제출 ㄴㄴ
