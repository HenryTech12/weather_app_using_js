let result;

// Fetch API key securely from backend
const getApiKey = async () => {
    try {
        const response = await fetch('http://localhost:3000/api-key');
        const data = await response.json();
        return data.key;
    } catch (error) {
        console.error("Error fetching API key:", error);
        return null;
    }
};

// Fetch weather data using secured API key
const fetchWeather = async (country) => {
    const apiKey = await getApiKey();
    if (!apiKey) {
        console.error("No API key available");
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`);
        result = await response.json();
        console.log(result);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
};

// Example Usage
fetchWeather("London");
