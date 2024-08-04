let city = "Medellin";
const lang = "es";
const key = "456e45ec5772de5cf358ac18e27e77e4";

const inputCiudad = document.querySelector("#InputCiudad");
inputCiudad.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    city = inputCiudad.value;
    fetchWeather(city);
  }
});

const fetchWeather = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=${key}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayWeather(data);
    })
    .catch((error) => console.error("Error", error));
};

const displayWeather = (data) => {
  const datoCiudad = document.querySelector("#DatoCiudad");
  datoCiudad.textContent = `${data.name}`;

  const tempMax = document.querySelector("#TempMax");
  tempMax.textContent = `${(data.main.temp_max - 273.15).toFixed(1)} °c`;

  const tempMin = document.querySelector("#TempMin");
  tempMin.textContent = `${(data.main.temp_min - 273.15).toFixed(1)} °c`;

  const datoHumedad = document.querySelector("#DatoHumedad");
  datoHumedad.textContent = `${data.main.humidity} %`;

  const datoEstado = document.querySelector("#DatoEstado");
  datoEstado.textContent = `${data.weather[0].description.toUpperCase()}`;
};
