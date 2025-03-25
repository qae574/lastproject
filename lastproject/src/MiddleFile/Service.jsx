import React from "react";
import newcare from "../assets/iconcar.png";
import used from "../assets/iconcarused.png";
import sell from "../assets/iconused.png";
import { useNavigate } from "react-router";
const Service = () => {
  const naviagate = useNavigate();
  const handelClick = () => {
    naviagate("/tab");
  };
  const handelClickSecond = () => {
    naviagate ('/tabSecond')
    }

  return (
    <div className="outService">
      <div className="headItem">
        <p>Our Service</p>
      </div>
      <div className="chooseItem">
        <div className="itemClick">
          <div className="imgNcontent" onClick={handelClick}>
            <img src={newcare} />
            <p>Buy a new car</p>
          </div>
          <div className="imgNcontent" onClick={handelClickSecond}>
            <img src={used} />
            <p>Buy an used car</p>
          </div>
          <div className="imgNcontent">
            <img src={sell} />
            <p>Sell my car</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
