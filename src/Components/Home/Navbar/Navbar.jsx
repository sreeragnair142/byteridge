import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar-container ">
      <img 
        src="https://byteridge.com/wp-content/uploads/2023/11/Byteridge-logo.png"
        alt=" "
      />
      <ul className="navbar-menu">
        <div className="list">
          <li>Services</li>
          <li>Knowledge center</li>
          <li>Careers</li>
          <li>About us</li>
          <li>Contact uss</li>
          
          <div className="logo">
            <img
              src="https://byteridge.com/wp-content/uploads/2023/11/Great-place-to-work-2024-2025-badge-e1714665866122.webp "
              alt=""
            />
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
