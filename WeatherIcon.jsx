import {
    WiDaySunny,
    WiCloud,
    WiRain,
    WiSnow,
    WiFog
} from "react-icons/wi";

function WeatherIcon({ code, size = 60 }) {
    if (code === 0) return <WiDaySunny size={size} />;
    if ([1, 2, 3].includes(code)) return <WiCloud size={size} />;
    if ([45, 48].includes(code)) return <WiFog size={size} />;
    if ([51, 53, 55, 61, 63, 65].includes(code)) return <WiRain size={size} />;
    if ([71, 73, 75].includes(code)) return <WiSnow size={size} />;

    return <WiCloud size={size} />;
}

export default WeatherIcon;
