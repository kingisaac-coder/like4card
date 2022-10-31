import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function Cards({ title, image, description, button, Price }) {
  return (
    <div className="cards">
      <h1>{title}</h1>
      <div className="iTunes__card">
        <img src={image} alt="gift cards" />
        <p>
          {description} <br />
          {Price}
        </p>
        <Link to="/Purchase" className="btn">
          {button}
        </Link>
      </div>
    </div>
  );
}

export default Cards;
