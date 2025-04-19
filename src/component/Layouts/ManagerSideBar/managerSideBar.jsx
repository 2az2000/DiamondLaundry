import React, { useState } from "react";
import { NavLink , useNavigate } from "react-router-dom";
import "./managerSideBar.css";
import { CiLogout } from "react-icons/ci";
import { removeCookie} from '../../../utils/cookie'
import navlink from '../../../const/layout'

import logo from '../../../assets/image/Logo.jpg'
import { IoIosArrowDown } from "react-icons/io";

import { IoIosArrowUp } from "react-icons/io";
import SideLink from "./SideLink/SideLink";
export default function SideBarManger() {
  const [show, setShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState([]);
const navigate=useNavigate()
  function clickHandleLink(index) {
    setActiveIndex(activeIndex === index ? null : index);
  }
  const LogoutHandele=()=>{
    removeCookie()
    navigate('/')
  }
  return (
    <div className="sideBar-wrapper">
      <div className="sideBar-logo">
        <p>پنل مدیر</p>
        <img src={logo} alt="لوگو" />
      </div>

      <div>
        
        {navlink.map((link, index) => (
          <SideLink
            showLink={link.children}
            picture={link.icon}
            title={link.title}
            key={link.id}
            index={index}
            arrowUp={<IoIosArrowUp />}
            arrowDown={<IoIosArrowDown />}
            functionHandeler={clickHandleLink}
            show={show}
            activeIndex={activeIndex}
          />
        ))}
      </div>

    <div className="exist" onClick={LogoutHandele}> خروج<CiLogout/></div>
    </div>
  );
}
