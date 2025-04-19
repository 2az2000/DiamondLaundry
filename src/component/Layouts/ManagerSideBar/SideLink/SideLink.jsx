import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./sidelink.css";

export default function SideLink({
  showLink,
  picture,
  title,
  index,
  functionHandeler,
  arrowUp,
  arrowDown,
  activeIndex,
}) {
  const handleClick = () => {
    functionHandeler(index);
  };

  return (
    <>
      {title === "داشبورد" ? (
        <div className="side-wrapper-container">
          <div className="side-wrapper-first">
            <p className="side-link-title">{title}</p>{" "}
            <img src={picture} alt={picture} />
          </div>
        </div>
      ) : (
        <>
          <div>
            <div
              className="side-wrapper-container"
              style={{ cursor: "pointer" }}
              onClick={handleClick}
            >
              <div
                className={`side-wrapper-first
                ${activeIndex === index ? "changeColor1" : "changeColornone"}`}
              >
                <p className={`side-link-title `}>{title}</p>{" "}
                <img src={picture} alt={picture} />
              </div>
              <button
                className={activeIndex === index ? "arrow-up" : "arrow-down"}
              >
                {activeIndex === index ? arrowUp : arrowDown}
              </button>
            </div>
            <div
              className={`link-side-wrapper    ${
                activeIndex === index ? "wrapper-show" : "show"
              }`}
            >
              
              {
                showLink.map((item) => (
                  <NavLink to={item.path}>{item.title}</NavLink>
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
