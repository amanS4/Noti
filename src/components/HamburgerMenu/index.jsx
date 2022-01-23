import React, { useState } from "react";
import MenuItems from "./MenuItems";

export default function HamburgerMenu(props) {
  const [navOpen, setNavOpen] = useState(false);
  const { canvasRef, ctxRef } = props;

  const hamburgerHandler = () => {
    setNavOpen((val) => !val);
    changeThemeHandler();
  };
  const changeThemeHandler = () => {
    const root = document.documentElement;
    root.style.setProperty("--theme1", "#ef4e5e");
  };
  return (
    <>
      <div onClick={hamburgerHandler} className="navbackground">
        <div className={`navicon ${navOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <MenuItems navOpen={navOpen} />
    </>
  );
}
