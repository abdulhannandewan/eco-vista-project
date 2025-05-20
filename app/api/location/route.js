import { NextResponse } from "next/server";
import { getLocation } from "./location-util";

export async function GET() {
  const getLocations = getLocation();
  return NextResponse.json(getLocations);
}
