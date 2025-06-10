document.addEventListener("DOMContentLoaded", () => {
  // htmlの内容を読み込んでから処理を開始する
  const input = document.getElementById("myName");
  const button = document.getElementById("confirmedBtn");
  const result = document.getElementById("resultMessage");

  button.addEventListener("click", () => {
    // const name = input.value.trim();
    result.classList.toggle("hidden");
    alert("こんにちは${myName}さん！");
  });
});
