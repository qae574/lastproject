import React from "react";
// import "./Slide.css";

export default function Slide({ props, bgColor }) {
  return (
    <div className="slide" style={{ backgroundColor: bgColor }}>
      {props}
    </div>
  );
}
