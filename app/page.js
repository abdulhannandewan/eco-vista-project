import { Suspense } from "react";
import LocationDetector from "./components/LocationDetector";

export default function Home() {
  return (
    <div>
      <Suspense>
        <LocationDetector />
      </Suspense>
    </div>
  );
}
