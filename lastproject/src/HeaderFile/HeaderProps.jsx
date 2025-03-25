import React, { useState, useEffect } from "react";
import "./Header.css";
import car from "../assets/Frame 260.png";
import icon from "../assets/Vector.png";
import user from "../assets/user.png";
import word from "../assets/word.png";
const HeaderProps = (props) => {
  return (
    <div className="Header">
      <div className="HeaderItem">
        <a href="/home">
          <img src={props.car || car} alt="Car" />
        </a>
        <a href="/tab">New Cars</a>
        <a href="/tabSecond">Used Cars</a>
        <a href="/TabFour">Compare</a>
        <a href="">Sell</a>
        <a href="">
          Article <img src={props.icon || icon} alt="Icon" />
        </a>
        <a href="/SignIn">
          <img src={props.user || user} alt="user" />
          Sign in
        </a>
        <a href="">
          <img src={props.word || word} alt="word" />
          EN <img src={props.icon || icon} alt="Icon" />
        </a>
      </div>
    </div>
  );
};

export default HeaderProps;
