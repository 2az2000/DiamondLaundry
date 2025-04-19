import React from "react";
import "./input.css";
import key1 from "../../../assets/image/vpn_key.png";

import Key2 from "../../../assets/image/Vector (5).png";

import { FaEye } from "react-icons/fa";
import { FaEyeLowVision } from "react-icons/fa6";
export const Input = ({ children, Icon, type, toggler, value }) => {
  return (
    <div className="user-input">
      {type === "password" ? (
        <img className="vpn-key" src={key1} alt="key" />
      ) : (
        <img className="vpn-key" src={Key2} alt="key" />
      )}

      {children}
      {type === "password" ? (
        <span className="eye-password" onClick={toggler}>
          {value ? <FaEye /> : <FaEyeLowVision />}
        </span>
      ) : null}
    </div>
  );
};
