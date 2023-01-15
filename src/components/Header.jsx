import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h3>
          <a href="/">Chinami Toda</a>
        </h3>
      </div>
      {/* <nav>
        <ul>
          <li>
            <a href="/">Profile</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Skill</a>
          </li>
          <li>
            <a href="/">Portfolio</a>
          </li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;
