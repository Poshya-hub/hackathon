import React from "react";
import "./style.css";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";
function Footer_part() {
  const iconStyle = {
    fontSize: "20px",
    cursor: "pointer",
  };

  return (
    <div className="footer">
      <div className="section">
        <p>Stay upto date with our news and notifications</p>
        <i style={iconStyle}>
          <BsFacebook />
        </i>
        <i style={iconStyle}>
          <AiFillLinkedin />
        </i>
        <i style={iconStyle}>
          <RiInstagramFill />
        </i>
        <i style={iconStyle}>
          <BsTwitter />
        </i>
      </div>
      <p>© UHACKATHON 4.0 | ALL RIGHTS RESERVED</p>
      <i style={iconStyle}>Terms & Conditions</i>
    </div>
  );
}

export default Footer_part;
