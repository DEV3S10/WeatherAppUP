import { motion } from "framer-motion";
import WeatherIcon from "./WeatherIcon";

function HourlyForecast({ data }) {
    return (
        <motion.div
            className="card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
        >
            <h3>Hourly forecast</h3>
            <div className="hourly">
                {data.hourly.time.slice(0, 12).map((time, i) => (
                    <motion.div
                        key={i}
                        className="hour-box"
                        whileHover={{ scale: 1.1 }}
                    >
                        <p>{time.slice(11, 16)}</p>
                        <WeatherIcon
                            code={data.hourly.weather_code[i]}
                            size={40}
                        />
                        <p>{data.hourly.temperature_2m[i]}°</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default HourlyForecast;
