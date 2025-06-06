import { getResolvedLatLong } from "@/lib/location-info";
import LocationInfo from "../components/Location_info";
import NoLocationInfo from "../components/NoLocationInfo";

export default async function Home({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  const resolved = await getResolvedLatLong(location, latitude, longitude);
  if (resolved?.lat && resolved?.lon) {
    return <LocationInfo lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationInfo />;
  }
}
