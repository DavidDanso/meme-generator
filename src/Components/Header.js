import React from "react";
import Logo from "../images/meme.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header--logo">
        <img id="logo" src={Logo} alt="logo" />
        <h2 className="header--title">Meme Generator</h2>
      </div>
      {/* End header--logo */}
      <h6 className="header--project">开心的时光</h6>
    </div>
  );
};

export default Header;
