import React, { useState, useEffect } from "react";
import "./Loading.css";
import { useNavigate } from "react-router-dom";
import { Image } from "react-bootstrap";
import opta from "../../Assets/Images/eyeLoad.png";
import orto from "../../Assets/Images/OrthoLoad.png";
import dero from "../../Assets/Images/muscleman.png";
import spine from "../../Assets/Images/spineLoad.svg";

// Define the screens outside the component
const screens = [
  {
    heading: "Orthopaedics",
    image: orto,
  },
  {
    heading: "Ophthalmology",
    image: opta,
  },
  {
    heading: "Spine",
    image: spine,
  },
  {
    heading: "and more...",
    image: null, // No image for this screen
  },
  {
    heading: null, // No heading for this screen
    image: dero,
  },
];

function Loading() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const navigation = useNavigate();
  const maxScreenNumber = screens.length;
  useEffect(() => {
    const maxScreenNumber = screens.length;
  
    const transitionScreens = (screenNumber) => {
      if (screenNumber <= maxScreenNumber) {
        setCurrentScreen(screenNumber);
        setTimeout(() => {
          transitionScreens(screenNumber + 1);
        }, 2000);
      } else {
        navigation("/");
      }
    };
  
    const timeoutId = setTimeout(() => {
      transitionScreens(1);
    }, 2000);
  
    // Clean up the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, [navigation]);

  return (
    <div className="loading-container">
      {currentScreen <= maxScreenNumber && (
        <div className={`screens screens${currentScreen}`}>
          <div style={{ display: "flex", flexDirection: "row", gap: "26px" }}>
            <h2 className="load_heading">{screens[currentScreen - 1].heading}</h2>
            {screens[currentScreen - 1].image && (
              <Image src={screens[currentScreen - 1].image} alt="Screen Logo" />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Loading;
