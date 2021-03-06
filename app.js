const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", () => {
  const userInput = document.getElementById("userInput");
  const userInput2 = userInput.value;
  const userName = userInput2.split(" ").join("");

  userInput.value = "";
  fetch("https://api.github.com/users/" + userName)
    .then((response) => response.json())
    .then((data) => display(data));
});

const display = (user) => {
  const ShowProfile = document.getElementById("ShowProfile");
  ShowProfile.innerHTML = `
  <img style="width: 200px" src="${user.avatar_url}" alt="" />
    <h1>Name : ${user.name}</h1>
    <h2>location : ${user.location}</h2>
    <h3>bio : ${user.bio}</h3>
    <h3>Twitter Username : ${user.twitter_username}</h3>
    <h3>Followers : ${user.followers}</h3>
    <h3>Public Repos : ${user.public_repos}</h3>
    <h3>URL :  <a target=_blank href="https://github.com/${user.login}"> ${user.html_url}</a></h3>
  `;
};
