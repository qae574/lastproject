import React from "react";
import "./Middle.css";
import CompareCars from "./CompareCars";
import Content from "./Content";
import Abt from "./Abt";
import Service from "./Service";
import Tester from "./Tester";
import ContactUs from "./ContactUs";
import FooterMiddel from "./FooterMiddel";
const Middle = () => {
  return (
    <div className="item">
      <div className="HeadItem">
        <div className="writtingItem">
          <h3>Recommended Cars</h3>
          <a href="">New</a>
        </div>
        <CompareCars />
      </div>
      <Content />
      <Abt />
      <Service />
      <Tester />
      <ContactUs />
      <FooterMiddel />
    </div>
  );
};

export default Middle;
