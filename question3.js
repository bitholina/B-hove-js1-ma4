const url = "https://api.rawg.io/api/games/4200";

async function createGameDetails() {
  const heading = document.querySelector("h1");

  try {
    const response = await fetch(url);
    const info = await response.json();

    heading.innerHTML = info.name;

    const image = document.querySelector(".image");
    image.style.backgroundImage = `url(${info.background_image})`;

    const description = document.querySelector(".description");
    description.innerHTML = info.description;
  } catch (error) {
    heading.innerHTML = "Don't give up. Try again.";
    console.log(error);
  }
}

createGameDetails();
