import React from "react";
import "./Header.css"

const Header = () => {
  return <div onClick={()=>{window.scroll(0,0)}} className="Header">Movies App</div>;
};

export default Header;
