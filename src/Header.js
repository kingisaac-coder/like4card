import React from "react";
import "./Header.css";
import HomeIcon from "@mui/icons-material/Home";
import MoneyIcon from "@mui/icons-material/Money";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HandshakeIcon from "@mui/icons-material/Handshake";
import logo from "./logo-sm.jpg";
import { Link } from "react-router-dom";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  return (
    <div className="header">
      <div className="header__image">
        <img
          src="https://like4card.com/assets/new_design_assets/img/logo-new.svg"
          alt=""
        />
      </div>
      <ul className="header__nav">
        <img src={logo} alt="" />
        <Link to="/" className="icon">
          <HomeIcon />
          Home
        </Link>

        <Link className="icon">
          <MoneyIcon />
          Global Cards
        </Link>
        <li className="icon">
          <HandshakeIcon />
          Join Our Merchant
        </li>
        <li className="icon">
          <ShoppingCartIcon />
          Cart
        </li>
      </ul>
      <div className="header__right">
        <img
          src="https://i.pinimg.com/originals/41/d0/2f/41d02feb585e8189344c2e0abaf223b7.gif"
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;

//   "https://likecard-space.fra1.digitaloceanspaces.com/Sliders/95053-slider1home2_1-english-1-.png"
