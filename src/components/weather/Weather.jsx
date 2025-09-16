import { useEffect, useState } from "react";
import Search from "../search/Search";


export default function Weather() {

    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [errorEmpty, setErrorEmpty] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    async function fetchWeatherData(params) {
        try {
            setLoading(true);
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`);
            const data = await response.json();

            // console.log(data);
            if (data.cod === 200) {
                setWeatherData(data);
                setLoading(false);
                setSearch('');
                setErrorEmpty('');
            } else if (data.cod === '400') {
                setLoading(false);
                setErrorEmpty(`City can't Empty`);
                setSearch('');
                console.log(data.message);
            } else {
                console.log(data);
            }
        } catch (e) {
            setLoading(false);
            setErrorEmpty(false);
            setError(e);
            // console.log(e.message);
        }
    }
    function handleSearch() {
        setErrorEmpty('');
        fetchWeatherData(search);
    }
    function getCurrentDate() {
        return new Date().toLocaleDateString('en-us', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });
    }
    useEffect(() => {
        fetchWeatherData('dhaka');
    }, []);

    return (
        <div>
            <h1>WEATHER STATUS</h1>
            <Search
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
            />
            <span className="emptyError">
                {
                    errorEmpty ? errorEmpty : ''
                }
            </span>

            {
                loading ? <div className="loading">Loading..</div> :
                    <div>
                        <div className="city-name">
                            <h2>
                                {weatherData?.name},
                                <span>{weatherData?.sys.country}</span>
                            </h2>
                        </div>
                        <div className="date">
                            <span>{getCurrentDate()}</span>
                        </div>
                        <div className="temp">
                            {weatherData?.main?.temp} °F
                        </div>
                        <p className="description">
                            {
                                weatherData && weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].description : ''
                            }
                        </p>
                        <div className="weather-info">
                            <div className="column">
                                <div>
                                    <p className="wind">
                                        {weatherData?.wind?.speed}
                                    </p>
                                    <p>Wind Speed</p>
                                </div>
                            </div>
                            <div className="column">
                                <div>
                                    <p className="humidity">
                                        {weatherData?.main?.humidity}%
                                    </p>
                                    <p>Humidity</p>
                                </div>
                            </div>
                        </div>
                    </div>
            }
            {
                error ? <div>{error}</div> : ''
            }
        </div>
    );
}