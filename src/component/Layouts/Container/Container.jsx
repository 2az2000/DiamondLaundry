import React from "react";


import logo from '../../../assets/image/Logo.jpg';
import backgroydImg from "../../../assets/image/preview.png";

import picture from "../../../assets/image/m1.png";
import picture1 from "../../../assets/image/1.png";
import "./container.css";
export const Container = ({ children }) => {
  return (
    <div className="container">
      <div className="containerForm">
        <div className="container-logo">
          <img src={logo} alt="logo" />
        </div>
        {children}
      </div>

      <div className="container-picture">
        <img src={backgroydImg} alt="" />
      </div>
    </div>
  );
};
