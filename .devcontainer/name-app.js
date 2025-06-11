document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("confirmedBtn");
  const input = document.getElementById("yourName");
  const messageElement = document.getElementById("Confirm");

  button.addEventListener("click", () => {
    const name = input.value.trim();

    if (name) {
      messageElement.textContent = `こんにちは ${name} さん！`;
    } else {
      messageElement.textContent = "名前を入力してください。";
    }
    messageElement.classList.remove("hidden");
  });
});
