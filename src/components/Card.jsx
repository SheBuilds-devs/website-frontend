import React from "react";
import "../styles/Card.css";
import logo from "../assets/arrow.png";
function Card({ image, title, link }) {
  return (
    <div>
      <a href={link}>
        <div className="card">
          <div className="card--image">
            <img src={image} alt="" />
          </div>
          <span className="card--title">{title}</span>
          <img src={logo} alt="" className="arrow" />
        </div>
      </a>
    </div>
  );
}

export default Card;
