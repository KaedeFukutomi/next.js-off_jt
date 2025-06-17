const apiUrl = "https://jsonplaceholder.typicode.com/users";

// ユーザーリストを表示する要素
const userList = document.getElementById("user-list");
const statusText = document.getElementById("status");

// Fetch APIを使用してデータを取得
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTPエラー！ステータスコード: ${response.status}`);
    }
    return response.json();
  })
  .then((users) => {
    statusText.style.display = "none";
    userList.innerHTML = "";
    for (const user of users) {
      const listItem = document.createElement("li");
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    }
  })

  .catch((error) => {
    console.error("データの取得中にエラーが発生しました:", error);
  });
