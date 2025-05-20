import NoLocationInfo from "@/app/components/NoLocationInfo";
import TemperatureComponent from "@/app/components/TemperatureComponent";

import { getResolvedLatLong } from "@/lib/location-info";

const TemperaturePage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolvedLatLong(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <TemperatureComponent lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationInfo />;
  }
};

export default TemperaturePage;
