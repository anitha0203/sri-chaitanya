import React, { useState, useEffect } from "react";
import image1 from "../../Assets/Images/final-pics/contact1.png";
import image2 from "../../Assets/Images/contact/transition3.jpg";
import "./AppointmentImages.css";

const AppointmentImages = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length]);

  return (
    <div className="doc_layout">
      <img
        src={images[currentImageIndex]}
        alt={`${currentImageIndex + 1}`}
        className="transimg" 
        fluid ="true"/>
    </div>
  );
};

export default AppointmentImages;