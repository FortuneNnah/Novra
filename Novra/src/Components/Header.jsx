import React from "react";
import "../App.css";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h2>Revo</h2>
      </div>

      <div className="navbar">
        <ul className="navlinks">
          <li><a className="active" href="home">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
     </div>
      <div className="cta">
        <button>Let's Talk</button>
      </div>


    </div>
  );
};

export default Header;
