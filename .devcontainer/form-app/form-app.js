const form = document.getElementById("survey-form");
const username = document.getElementById("user-name");
const age = document.getElementById("age");
const job = document.getElementById("job");
const introduction = document.getElementById("introduction");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  document.getElementById("error-user-name").style.display = "none";
  document.getElementById("error-age").style.display = "none";
  document.getElementById("error-job").style.display = "none";

  let hasError = false;

  if (username.value.trim() === "") {
    document.getElementById("error-user-name").style.display = "block";
    hasError = true;
  }

  if (age.value.trim() === "" || age.value >= 18) {
    document.getElementById("error-age").style.display = "block";
    hasError = true;
  }

  if (job.value.trim() === "") {
    document.getElementById("error-job").style.display = "block";
    hasError = true;
  }

  const formData = {
    username: username.value.trim(),
    age: age.value.trim(),
    job: job.value,
    introduction: introduction.value.trim(),
  };

  if (import.meta.env.VITE_APP_ENV === "prod") {
    console.log =
      console.info =
      console.debug =
      console.warn =
      console.error =
        () => {};
  }
  console.log("送信データ(JSON):", JSON.stringify(formData));
});
