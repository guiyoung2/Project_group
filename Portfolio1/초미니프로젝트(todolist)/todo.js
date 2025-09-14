const btn = document.getElementById("btn");
let addValue = document.getElementById("addvalue");
let result = document.getElementById("result");

// 버튼 , 밸류값, 추가된 값

function addTodo() {
  if (addValue.value == false || addValue.value == "") {
    alert("내용을 입력해주세요!");
  } else {
    let list = document.createElement("li");
    let del = document.createElement("button");
    list.innerText = addValue.value;
    result.appendChild(list); //추가된 할일에 할일 리스트 추가하기
    list.appendChild(del); //할일 리스트 추가시 삭제버튼도 추가
    del.innerText = "x"; //삭제버튼에 들어갈 'x'자 문자
    del.style.fontSize = "20px";
    del.style.border = "none";
    del.style.float = "right";
    del.style.right = "17px";
    del.style.marginTop = "10px";
    del.style.cursor = "pointer";
    del.addEventListener("click", deleteList); //삭제버튼 클릭시 리스트지우기 이벤트 실행
    del.style.position = "relative";

    addValue.value = ""; //할일 입력창 초기화
    addValue.focus(); //강제 커서 깜빡임
    list.addEventListener("click", function () {
      //할일 완료 후 클릭시 밑줄로 표시
      list.style.textDecoration = "line-through";
      list.style.color = "gray"; //클릭시 색변환
    });
  }
}

function enterkey(e) {
  if (addValue.value == false) {
    alert("내용을 입력해주세요!");
  } else if (e.keyCode == 13) {
    // 엔터키가 눌렸을 때
    let list = document.createElement("li");
    let del = document.createElement("button");
    list.innerText = addValue.value;
    result.appendChild(list); //추가된 할일에 할일 리스트 추가하기
    list.appendChild(del); //할일 리스트 추가시 삭제버튼도 추가
    del.innerText = "x"; //삭제버튼에 들어갈 'x'자 문자
    del.style.fontSize = "20px";
    del.style.border = "none";
    del.style.float = "right";
    del.style.right = "17px";
    del.style.marginTop = "10px";
    del.style.cursor = "pointer";
    del.addEventListener("click", deleteList); //삭제버튼 클릭시 리스트지우기 이벤트 실행
    del.style.position = "relative";

    addValue.value = ""; //할일 입력창 초기화
    addValue.focus(); //강제 커서 깜빡임
    list.addEventListener("click", function () {
      //할일 완료 후 클릭시 밑줄로 표시
      list.style.textDecoration = "line-through";
      list.style.color = "gray"; //클릭시 색변환
    });
  }
}
function deleteList(e) {
  let removeItem = e.target.parentElement;
  removeItem.remove();
}

function allClearList(e) {
  if (confirm("정말 삭제하시겠습니까?") == true) {
    //취소메시지가 true일때
    if (result.innerText == "") {
      //목록칸이 비어있다면
      alert("삭제할 목록이 없습니다");
    } else {
      //삭제할 목록이 있다면
      result.innerText = ""; //전체 삭제
    }
  } else {
    return false; //삭제 취소
  }
}

const clock = document.querySelector("#clock");
const day = document.querySelector("#date");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const today = date.toLocaleDateString();
  // const sec = String(date.getSeconds()).padStart(2, "0");
  // clock.innerText = `${hours}:${min}:${sec}`;

  let year = date.getFullYear();
  let month = ("0" + (date.getMonth() + 1)).slice(-2);
  let dayy = ("0" + date.getDate()).slice(-2);

  var dateString = year + "-" + month + "-" + dayy;

  day.innerText = `${dateString}`;
  clock.innerText = `${hours}:${min}`;
}

getClock();
setInterval(getClock, 1000);
