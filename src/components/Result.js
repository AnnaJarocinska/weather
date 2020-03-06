import React from 'react';

const Result = (props) => {
    const { city, country, temperature, humidity, pressure, weather, wind, cloudiness, sunrise, sunset, err } = props.data
    
let resultView = (
    <div>
        <p>
            Wpisz miasto, dla którego chcesz sprawdzić aktualną pogodę
        </p>
    </div>
);

    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
if (!err && city){
resultView = (
        <div>
            
            <p>Pogoda dla miasta {city} ({country})</p>
            <p>Temperatura powietrza: {temperature}&#176;C</p>
            <p>Wilgotność powietrza: {humidity}%</p>
            <p>Ciśnienie atmosferyczne: {pressure}hPa</p>
            <p>Pogoda: {weather}</p>
            <p>Prędkość wiatru: {wind} m/s</p>
            <p>Zachmurzenie: {cloudiness}%</p>
            <p>Wschód słońca: {sunriseTime}</p>
            <p>Zachód słońca: {sunsetTime}</p>
        </div>
    )}

    return (
        <>
            <div>
                {err ? `Brak danych na temat pogody w mieście ${city}` : resultView}
            </div>
        </>
    );
}
export default Result;