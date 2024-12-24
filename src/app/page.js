"use client";

import { useState } from "react";
import SearchComponent from "./components/SearchComponent";
import MapComponent from "./components/MapComponent";

export default function HomePage() {
  const [location, setLocation] = useState(null);

  return (
    <main style={{ fontFamily: "var(--font-geist-sans)", padding: "2rem" }}>
      <h1 style={{ textAlign: "center", color: "#ffd900cd" }}>Google Maps App</h1>
      <SearchComponent setLocation={setLocation} />
      <MapComponent location={location} />
    </main>
  );
}
