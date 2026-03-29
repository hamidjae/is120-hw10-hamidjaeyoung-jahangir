const forecastContainer = document.querySelector("#forecast");
const randomizeBtn = document.querySelector("#randomizeBtn");

function getWeatherCategory(temp) {
  if (temp < 40) {
    return "Cold";
  } else if (temp <= 75) {
    return "Mild";
  } else {
    return "Hot";
  }
}

function getDateLabel(num) {
  const today = new Date();
  today.setDate(today.getDate() + num);

  return today.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

function generateRandomTemperatures(days) {
  let randomTemps = [];

  for (let i = 0; i < days; i++) {
    let randomTemp = Math.floor(Math.random() * 101);
    randomTemps.push(randomTemp);
  }

  return randomTemps;
}

function displayForecast() {
  forecastContainer.innerHTML = "";

  for (let i = 0; i < temperatures.length; i++) {
    let temp = temperatures[i];
    let category = getWeatherCategory(temp);

    let card = document.createElement("div");
    card.classList.add("card");

    if (category === "Cold") {
      card.classList.add("cold");
    } else if (category === "Mild") {
      card.classList.add("mild");
    } else {
      card.classList.add("hot");
    }

    card.innerHTML = `
      <h2>${getDateLabel(i)}</h2>
      <div class="temp">${temp}°F</div>
      <div class="category">${category}</div>
    `;

    forecastContainer.appendChild(card);
  }
}

randomizeBtn.addEventListener("click", function () {
  temperatures = generateRandomTemperatures(5);
  displayForecast();
});

displayForecast();
