const APIkey = '3d9cbbaa2c744ad8b91912d8c0979261';
const URLDinamicRequest = `https://api.openweathermap.org/data/2.5/forecast?q=berazategui&units=metric&appid=${APIkey}`;

const weatherData = async () => {
  const data = await fetch(URLDinamicRequest);
  const res = await data.json();

  console.log(res);
};
