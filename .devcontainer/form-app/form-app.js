const form = document.getElementById("surveyForm");
const userName = document.getElementById("userName");
const age = document.getElementById("age");
const job = document.getElementById("job");
const introduction = document.getElementById("introduction");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  document.getElementById("errorUserName").style.display = "none";
  document.getElementById("errorAge").style.display = "none";
  document.getElementById("errorJob").style.display = "none";

  let hasError = false;

  if (userName.value.trim() === "") {
    document.getElementById("errorUserName").style.display = "block";
    hasError = true;
  }

  if (age.value.trim() === "" || age.value >= 18) {
    document.getElementById("errorAge").style.display = "block";
    hasError = true;
  }

  if (job.value.trim() === "") {
    document.getElementById("errorJob").style.display = "block";
    hasError = true;
  }

  // const formData = {
  //   userName: userName.value.trim(),
  //   age: age.value.trim(),
  //   job: job.value,
  //   introduction: introduction.value.trim(),
  // };
  // console.log("送信データ(JSON):", JSON.stringify(formData));
});
