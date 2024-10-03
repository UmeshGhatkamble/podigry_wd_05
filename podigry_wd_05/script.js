const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const getWeatherButton = document.getElementById('getWeather');
const weatherDisplay = document.getElementById('weatherDisplay');

getWeatherButton.addEventListener('click', () => {
    const locationInput = document.getElementById('locationInput').value.trim();
    if (locationInput) {
        fetchWeather(locationInput);
    } else {
        weatherDisplay.innerHTML = '<p>Please enter a location.</p>';
    }
});

async function fetchWeather(location) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
    
    if (response.ok) {
        const data = await response.json();
        displayWeather(data);
    } else {
        weatherDisplay.innerHTML = '<p>Location not found. Please try again.</p>';
    }
}

function displayWeather(data) {
    const { name } = data;
    const { main, weather } = data;
    const temperature = main.temp;
    const weatherDescription = weather[0].description;

    weatherDisplay.innerHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Condition: ${weatherDescription}</p>
    `;
}
