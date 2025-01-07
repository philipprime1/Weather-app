

const apikey ='45161785b5d7f7a531ac5a032973fc75'

document.getElementById('searchBtn').addEventListener('click',() => {
    const city = document.getElementById('city').value;
    getWeather(city);
});

async function getWeather(city) {
    const url =`http://api.weatherstack.com/current?access_key=45161785b5d7f7a531ac5a032973fc75&query=${city}`;
    try{
        const response = await fetch(url);
        if (!response.ok) throw new Error('city not found');
        const data = await response.json();
        console.log(data)
        displayWeather(data);
    }catch (error) {
        alert('Error: ' + error.message);
    }
}

function displayWeather(data) {
    document.getElementById('image').setAttribute('src', data.current.weather_icons);
    document.getElementById('location').textContent =`Location: ${data.location.name},${data.location.country}`;

    document.getElementById('temperature').textContent =`Temperature: ${data.current.temperature}°C`;

    document.getElementById('description').textContent = ` Description: ${data.current.weather_descriptions }`;

   document.getElementById('humidity').textContent = `Humidity: ${data.current.humidity}% `;
    
    

    

    

}