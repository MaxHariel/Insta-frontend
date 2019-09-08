import React from "react";
import {Link} from "react-router-dom";

// import { Container } from './styles';

import "./Header.css";

import logo from "../assests/logo.png";
import camera from "../assests/camera.png";

export default function Header() {
  return (
    <header id="main-header">
      <div className="header-content">
        <Link to="/">
          <img id="logo" src={logo} alt="" />
        </Link>
        <Link to="/new">
          <img id="camera" src={camera} alt="" />
        </Link>
      </div>
    </header>
  );
}
