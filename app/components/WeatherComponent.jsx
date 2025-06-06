import { getWeatherData } from "@/lib/weather-info";
import Image from "next/image";
import Card from "./Card";

const WeatherComponent = async ({ latitude, longitude }) => {
    const { main, description } = await getWeatherData(latitude, longitude);

    return (
        <Card>
            <h6 className="feature-name">Current Weather</h6>
            <div className="feature-main">
                <Image
                    className="max-w-20"
                    src="/icons/icon_rain.png"
                    width={200}
                    height={200}
                    alt="rain icon"
                />
                <h3 className="feature-title">{main}</h3>
                <span className="feature-name">{description}</span>
            </div>
        </Card>
    );
};

export default WeatherComponent;