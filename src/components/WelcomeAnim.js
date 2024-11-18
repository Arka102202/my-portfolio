import React, { useEffect, useState } from "react";

import appLogo from "../assets/img/as-logo.webp";
const WelcomeAnim = (props) => {
  const [y, setY] = useState(0);
  useEffect(() => {
    setY(window.scrollY);
    document.querySelector("body").style.overflow = "hidden";
  }, []);

  return (
    <>
      <div
        className="body"
        style={{
          top: `${y}px`,
        }}
      >
        <div className="welcome-anim">
          <div className="img-box">
            <img src={appLogo} alt="app logo using alphabet a and s" />
          </div>
        </div>
        <div className="border"></div>
      </div>
    </>
  );
};

export default WelcomeAnim;
