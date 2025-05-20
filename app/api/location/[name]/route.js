import { NextResponse } from "next/server";
import { getLocation, getLocatonByName } from "../location-util";

export async function GET(request, { params: { name } }) {
  const allLocations = getLocation();
  const location = getLocatonByName(name);
  if (Object.keys(location).length === 0 && location.constructor === Object) {
    return NextResponse.json(allLocations);
  }
  return NextResponse.json(location);
}
