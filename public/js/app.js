console.log("Client side javascript file is loaded!");

fetch("http://localhost:3000/weather?address=delhi").then((response) => {
  response.json().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.location);
      console.log(data.forecast);
    }
  });
});

const WeatherForm = document.querySelector("form");
const locationInput = document.querySelector("input");
const messageOne = document.querySelector("#message1");
const messageTwo = document.querySelector("#message2");

WeatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = locationInput.value;

  messageOne.textContent = "Loading.....";
  messageTwo.textContent = "";

  fetch("/weather?address=" + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
  });
});
