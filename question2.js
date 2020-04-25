const url = "https://api.rawg.io/api/games";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    createGames(json);
  })

  .catch(function (error) {
    console.log(error);
  });

function createGames(json) {
  const games = json.results;
  const divResults = document.querySelector(".results");
  let html = "";

  for (let i = 0; i < games.length; i++) {
    //console.log("html", html);
    html += `<div>
    <div class="game"</div>
    <h2>${games[i].name}</h2>
    <img src="${games[i].background_image}" alt="${games[i].name}"/>
    </div>`;
    divResults.innerHTML = html;
  }
}
