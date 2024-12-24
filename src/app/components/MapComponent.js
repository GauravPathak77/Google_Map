"use client";

import { useEffect } from "react";

const MapComponent = ({ location }) => {
  useEffect(() => {
    if (location && window.google) {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
          lat: location.geometry.location.lat,
          lng: location.geometry.location.lng,
        },
      });

      new window.google.maps.Marker({
        position: {
          lat: location.geometry.location.lat,
          lng: location.geometry.location.lng,
        },
        map,
        title: location.name,
      });
    }
  }, [location]);

  return <div id="map" className="map-container"></div>;
};

export default MapComponent;
