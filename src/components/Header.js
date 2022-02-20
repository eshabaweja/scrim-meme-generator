import React from "react";


function Header() {
  return (
    <div className="Header">
      <img className="header--img" src={require("../images/troll-face.png")}/>
      <h3 className="header--title">MemeMaker</h3>
      <span className="header--line">React Course - Project 3</span>
    </div>
  );
}

export default Header;