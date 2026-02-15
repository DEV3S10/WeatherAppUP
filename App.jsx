import { useEffect, useState } from "react";
import { useWeather } from "./hooks/useWeather";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import HourlyForecast from "./components/HourlyForecast";
import DailyForecast from "./components/DailyForecast";
import "./index.css";

function App() {
    const { weather, city, loading, fetchByCity, fetchByCoords } =
        useWeather();
    const [dark, setDark] = useState(false);

    useEffect(() => {
        fetchByCity("Bishkek");
    }, []);

    const useMyLocation = () => {
        navigator.geolocation.getCurrentPosition((pos) => {
            fetchByCoords(pos.coords.latitude, pos.coords.longitude);
        });
    };

    if (loading || !weather)
        return <div className="loading">Loading...</div>;

    return (
        <div className={dark ? "app dark" : "app"}>
            <h1>Weather App 👽🍀🤖</h1>

            <SearchBar
                onSearch={fetchByCity}
                onLocation={useMyLocation}
                toggleTheme={() => setDark(!dark)}
                dark={dark}
            />

            <CurrentWeather data={weather} city={city} />
            <HourlyForecast data={weather} />
            <DailyForecast data={weather} />
        </div>
    );
}

export default App;
