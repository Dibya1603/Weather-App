document.getElementById('search-btn').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    if (city) {
        fetchWeatherData(city);
    } else {
        alert('Please enter a city name');
    }
});

function fetchWeatherData(city) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key from OpenWeatherMap or another service
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('city-name').textContent = data.name;
                document.getElementById('temp').textContent = `Temperature: ${data.main.temp}°C`;
                document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
                document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
                document.getElementById('wind').textContent = `Wind Speed: ${data.wind.speed} m/s`;
            } else {
                alert('City not found, please try again');
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            alert('Something went wrong, please try again later');
        });
}
