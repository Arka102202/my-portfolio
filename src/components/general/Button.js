import React from "react";

import send from "../../assets/logo/paper-plane.png";

const Button = (props) => {
  const clickHandler = () => {
    document.querySelector("body").style.overflow = "hidden";
    props.setShowForm(true);
  };
  return (
    <div
      className={`${
        props.mode ? "btn-bg btn-bg--light" : "btn-bg btn-bg--dark"
      }`}
    >
      <button
        className={`${props.mode ? "btn btn--light" : "btn btn--dark"}`}
        onClick={clickHandler}
      >
        {props.mode && (
          <>
            <p className="btn__text">Contact me</p>
            <div className="btn__bar"></div>
          </>
        )}
        {!props.mode && (
          <>
            <p className="btn__text">Contact me</p>
            <img src={send} alt="paper plane" className="btn__logo" />
          </>
        )}
      </button>
    </div>
  );
};

export default Button;
