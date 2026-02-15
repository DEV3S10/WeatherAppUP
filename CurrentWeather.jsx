import { motion } from "framer-motion";
import WeatherIcon from "./WeatherIcon";

function CurrentWeather({ data, city }) {
    return (
        <motion.div
            className="card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2>{city}</h2>
            <WeatherIcon code={data.current.weather_code} size={90} />
            <h1>{data.current.temperature_2m}°C</h1>
            <p>Humidity: {data.current.relative_humidity_2m}%</p>
            <p>Pressure: {data.current.pressure_msl} hPa</p>
            <p>Wind: {data.current.wind_speed_10m} km/h</p>
        </motion.div>
    );
}

export default CurrentWeather;
