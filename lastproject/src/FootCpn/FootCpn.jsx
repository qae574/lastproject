import React from "react";
import "./FootCpn.css";
import fb from "../assets/fb.png";
import ins from "../assets/ins.png";
import ytb from "../assets/ytb.png";
const FootCpn = () => {
  return (
    <div className="container">
      <div className="head">
        <img src="https://s3-alpha-sig.figma.com/img/cbd1/6f02/ecd93bbc4d7b2ad92d273e350353d94e?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sMV4deqAvkH-l6DMmUDq3SQe6qoxfxSHSOlkPPpCMURx0u-OPwASgagoNozO5cpcNm7wzbTRcmOPXwmEPAAN1QOjirma7Ak9kAEv~yFFQydehwGmbm02gG22bwKz87Bwkem1~JwwcvVJQBhoQv4Glj~u5WSLxt22xOsMmyLUOS273dVzNwa7UJjl9bKRba12cpe7fj-YexwxO8icNzji-4PZnMhX8qw4I8ftAjyAdWPr2EQYsSGVK7nyjzTHw~DQAoat33PO3vOhzOfUN10f~GsIKWDSf1ZjM43kkOKtUFrW-RbMGJ7CLMsC0RKkEzY-WghAxoDqxv2hOBuOZYAPEw__" />
      </div>
      <div className="abtUs">
        <div className="clineProcessing">
          <a href="">ABOUT US</a>
          <a href="">FAQ</a>
          <a href="">CONTACT</a>
        </div>
        <div className="clineProcessing">
          <a href="">CUSTOMER SERVICE</a>
          <a href="">info@car.com</a>
          <a href="">240-865-3730</a>
        </div>
        <div className="clineProcessing">
          <a href="">
            3926 Calvin Street, Baltimore, Maryland, 21201, United State
          </a>
          <div className="controlImg">
            <img src={fb} />
            <img src={ins} />
            <img src={ytb} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootCpn;
