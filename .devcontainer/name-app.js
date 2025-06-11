document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("confirmedBtn");
  const input = document.getElementById("yourName");
  const confirm = document.getElementById("Confirm");

  button.addEventListener("click", () => {
    const name = input.value.trim();

    if (name) {
      confirm.textContent = `こんにちは ${name} さん！`;
      confirm.classList.remove("hidden");
    } else {
      confirm.textContent = "名前を入力してください。";
      confirm.classList.remove("hidden");
    }
  });
});
