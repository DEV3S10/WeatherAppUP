import { useState } from "react";
import axios from "axios";

export function useWeather() {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchByCity = async (cityName) => {
        try {
            setLoading(true);

            const geo = await axios.get(
                `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`
            );

            if (!geo.data.results) {
                alert("City not found");
                return;
            }

            const { latitude, longitude, name } = geo.data.results[0];

            const res = await axios.get(
                `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,pressure_msl,wind_speed_10m,weather_code&hourly=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto`
            );

            setCity(name);
            setWeather(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const fetchByCoords = async (lat, lon) => {

        const res = await axios.get(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,pressure_msl,wind_speed_10m,weather_code&hourly=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto`
        );
        setCity("My location");
        setWeather(res.data);
    };

    return { weather, city, loading, fetchByCity, fetchByCoords };
}
