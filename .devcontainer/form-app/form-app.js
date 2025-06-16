const form = document.getElementById("surveyForm");
const username = document.getElementById("username");
const age = document.getElementById("age");
const job = document.getElementById("job");
const introduction = document.getElementById("introduction");
const result = document.getElementById("result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  document.getElementById("error-username").style.display = "none";
  document.getElementById("error-age").style.display = "none";
  document.getElementById("error-job").style.display = "none";

  let hasError = false;

  if (username.value.trim() === "") {
    document.getElementById("error-username").style.display = "block";
    hasError = true;
  }

  if (age.value.trim() === "") {
    document.getElementById("error-age").style.display = "block";
    hasError = true;
  }

  if (age.value > 18) {
    document.getElementById("error-age").style.display = "block";
    hasError = true;
  }

  if (job.value.trim() === "") {
    document.getElementById("error-job").style.display = "block";
    hasError = true;
  }

  if (!hasError) {
    const formData = {
      username: username.value.trim(),
      age: age.value.trim(),
      job: job.value,
      introduction: introduction.value.trim(),
    };

    console.log("送信データ(JSON):", JSON.stringify(formData));
  }
});
