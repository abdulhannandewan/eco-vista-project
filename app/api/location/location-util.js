const data = [
  {
    location: "London",
    latitude: 51.5073219,
    longitude: -0.1276474,
  },
  {
    location: "Kolkata",
    latitude: 22.572646,
    latitude: 88.363895,
  },
  {
    location: "Dhaka",
    latitude: 23.8103,
    longitude: 90.4125,
  },
  {
    location: "Singapore",
    latitude: 1.3521,
    longitude: 103.8198,
  },
  {
    location: "New York",
    latitude: 40.7128,
    longitude: -74.0060152,
  },
  {
    location: "Toronto",
    latitude: 43.65107,
    longitude: -79.347015,
  },
];

const getLocation = () => {
  return data;
};
const getLocatonByName = (Location) => {
  const location = data.find(
    (location) => location.location.toLowerCase() === Location.toLowerCase()
  );
  return location || {};
};
export { getLocation, getLocatonByName };
