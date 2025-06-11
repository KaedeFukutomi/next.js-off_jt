// document.addEventListener("DOMContentLoaded", () => {
//   // htmlの内容を読み込んでから処理を開始する
//   // const input = document.getElementById("myName");
//   const confirmedBtn = document.getElementById("confirmedBtn");
//   const resultMessage = document.getElementById("resultMessage");

//   button.addEventListener("click", () => {
//     // const name = input.value.trim();
//     // result.classList.toggle("hidden");
//     alert("こんにちは${myName}さん！");
//   });
// });

// confirmedBtn.sddEventListener("click", () => {
//   resultMessage.classList.toggle("hidden");
// });

const btn = document.querySelector(".ConfirmButton");
btn.addEventListener("click", () => {
  const more = document.querySelector(".more");
  more.classList.toggle("appear");

  if (btn.textContent === "名前を入力してください") {
  } else {
    btn.textContent = "こんにちは${myName}さん！";
  }
});
