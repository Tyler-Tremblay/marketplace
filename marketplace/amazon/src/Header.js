import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.template.net%2Ffree-designs%2Flogo-design%2F&psig=AOvVaw1bw-QAB-cJUYoXrPbPAnvO&ust=1600209951034000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOip1OPc6esCFQAAAAAdAAAAABAD"
      />
      <div className="header_search"></div>
    </div>
  );
}

export default Header;
