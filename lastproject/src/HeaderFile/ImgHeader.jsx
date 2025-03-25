import React, { useState, useEffect } from "react";
import bgOto1 from "../assets/bgOto1.webp";
import bgOto2 from "../assets/bgOto2.webp";
import bgOto3 from "../assets/bgOto3.png";
const slides = [
  <img src={bgOto1} />,
  <img src={bgOto2} />,
  <img src={bgOto3} />,
];

export default function AutoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Chuyển slide mỗi 3 giây

    return () => clearInterval(interval); // Cleanup interval khi unmount
  }, []);

  return (
    <div className="slider-container">
      <div className="writtenBg">
        <h3>Find your dream car</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
      <div className="slider-content">{slides[currentIndex]}</div>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
