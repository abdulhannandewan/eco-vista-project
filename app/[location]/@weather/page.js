import NoLocationInfo from "@/app/components/NoLocationInfo";
import WeatherComponent from "@/app/components/WeatherComponent";

import { getResolvedLatLong } from "@/lib/location-info";

const CurrentWeatherPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolvedLatLong(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return (
      <WeatherComponent latitude={resolved.lat} longitude={resolved.lon} />
    );
  } else {
    return <NoLocationInfo />;
  }
};

export default CurrentWeatherPage;
