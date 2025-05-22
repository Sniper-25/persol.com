import React, { useState, useEffect } from "react";
import "./ScrollingTicker.css";
const ScrollingTicker = () => {
  const [location, setLocation] = useState("");
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch("http://ip-api.com/json");
        const data = await response.json();
        setLocation(`${data.city}, ${data.country}`);
      } catch (error) {
        console.log("Error retrieving location:", error);
      }
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      };
      const formattedDateTime = now.toLocaleString(undefined, options);
      setCurrentDateTime(formattedDateTime);
    };

    const interval = setInterval(updateDateTime, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const success = (pos) => {
      setUserLocation({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    };

    const error = (err) => {
      console.error("Error getting geolocation:", err);
    };

    // Try to get the user's location
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);
  return (
    <div className="ticker-container">
      <div className="ticker-content">
        <span>{currentDateTime}</span>
        <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
        <span>{location}</span>
      </div>
    </div>
  );
};

export default ScrollingTicker;
