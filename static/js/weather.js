async function searchAndGet(){ 
    
let search = document.getElementById('city').value; //collects the name of the city

const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=' + search;

const options = {
method: 'GET',
headers: {
    'X-RapidAPI-Key': '3f4c92feb3msh2a1c213e7d8bdc4p15a664jsn6df0a3aa361b', //authentication required to access API
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
}

const fetchWeather = fetch(url, options);

await fetchWeather; //wait until data is fetched to run remaining code

fetchWeather.then(res => res.json())
    .then((data) => {

        let render = `<img src=${data.current.condition.icon}>`;
        console.log(data);
        render += "<ul>";
        
        render += 
        `<li>City: ${data.location.name}, ${data.location.region} - ${data.location.country}</li>
            <li>Temperature: ${data.current.temp_c} Celsius</li>
            <li>Feels like: ${data.current.feelslike_c} Celsius</li>
            <li>Condition: ${data.current.condition.text}</li>
            <li>Wind: ${data.current.wind_kph}kts</li>
            <li>Humidity: ${data.current.humidity}%</li>
            <li>Last updated: ${data.current.last_updated}</li>
            </ul>`;

            document.getElementById("display").innerHTML = render;

        }).catch(err => console.error('Location not found.' + err))
        
    ;}