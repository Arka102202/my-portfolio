import React from "react";

import appLogo from "../assets/img/as-logo.webp";
import upBlack from "../assets/logo/arrow-square-up-black-2.png";
import upWhite from "../assets/logo/arrow-square-up-white-2.png";
import contactWhite from "../assets/logo/paper-plane.png";
import contactBlack from "../assets/logo/paper-plane-black.png";

const NavbarMob = (props) => {
  const up = props.mode ? upWhite : upBlack;
  const contact = props.mode ? contactWhite : contactBlack;
  const changeMode = () => props.setMode((state) => !state);
  const goTop = () => {
    document.querySelector(".layer--1").scrollIntoView({ behavior: "smooth" });
  };
  const clickHandler = () => {
    if (!props.showForm)
      document.querySelector("body").style.overflow = "hidden";
    else document.querySelector("body").style.overflowY = "auto";
    props.setShowForm((state) => !state);
    props.setShowBackdrop((state) => !state);
  };

  return (
    <div
      className={`${props.mode ? "navbar-mob" : "navbar-mob navbar-mob--dark"}`}
    >
      <button
        className={`${
          props.mode
            ? "navbar-mob__btn"
            : "navbar-mob__btn navbar-mob__btn--dark"
        }`}
      >
        <img src={up} alt="" onClick={goTop} />
      </button>
      <button className="logo" onClick={changeMode}>
        <div className="logo--dummy">
          <img src={appLogo} alt="app logo" />
        </div>
      </button>
      <button
        className={`${
          props.mode
            ? "navbar-mob__btn"
            : "navbar-mob__btn navbar-mob__btn--dark"
        }`}
        onClick={clickHandler}
      >
        <img src={contact} alt="" />
      </button>
    </div>
  );
};

export default React.memo(NavbarMob);
