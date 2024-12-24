import { useState, useEffect } from "react";

const useGoogleMaps = () => {
  const [google, setGoogle] = useState(null);

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (window.google) {
        setGoogle(window.google);
      } else {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = () => setGoogle(window.google);
        document.body.appendChild(script);
      }
    };

    loadGoogleMaps();
  }, []);

  return google;
};

export default useGoogleMaps;
