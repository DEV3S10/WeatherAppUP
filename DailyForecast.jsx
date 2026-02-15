import { motion } from "framer-motion";
import WeatherIcon from "./WeatherIcon";

function DailyForecast({ data }) {
    return (
        <motion.div
            className="card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
        >
            <h3>7 day forecast</h3>

            {data.daily.time.map((day, i) => (
                <motion.div
                    key={i}
                    className="day-row"
                    whileHover={{ scale: 1.02 }}
                >
                    <span>{day}</span>

                    <WeatherIcon
                        code={data.daily.weather_code[i]}
                        size={35}
                    />

                    <span>
            {data.daily.temperature_2m_max[i]}° /
                        {data.daily.temperature_2m_min[i]}°
          </span>
                </motion.div>
            ))}
        </motion.div>
    );
}

export default DailyForecast;
