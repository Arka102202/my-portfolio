import React, { useEffect, useState } from "react";

import emailLogoWhite from "../../../assets/logo/email-white-1.png";
import emailLogoBlack from "../../../assets/logo/email-black-1.png";
import githubLogoWhite from "../../../assets/logo/github-white.png";
import githubLogoBlack from "../../../assets/logo/github-black.png";
import linkedinLogoWhite from "../../../assets/logo/linkedin-white.png";
import linkedinLogoBlack from "../../../assets/logo/linkedin-black.png";

const Footer = (props) => {
  const email = props.mode ? emailLogoBlack : emailLogoWhite;
  const linkedin = props.mode ? linkedinLogoBlack : linkedinLogoWhite;
  const github = props.mode ? githubLogoBlack : githubLogoWhite;

  const [style, setStyle] = useState();

  useEffect(() => {
    const width = getComputedStyle(document.querySelector(".layer--1")).width;

    setStyle({ width: `calc(${width} - 2rem)` });

    window.addEventListener("resize", () => {
      const width = getComputedStyle(document.querySelector(".layer--1")).width;
      setStyle({ width: `calc(${width} - 2rem)` });
    });
  }, []);

  return (
    <div
      className={`${
        props.mode ? "footer__box" : "footer__box footer__box--dark"
      }`}
    >
      <footer style={style}>
        <div className="footer__row">
          <div
            className={`${
              props.mode
                ? "footer__row__me-info"
                : "footer__row__me-info footer__row__me-info--dark"
            }`}
          >
            <p className="footer__row__me-info__text">Arkadyuti Sikdar</p>
            <p className="footer__row__me-info__text">web developer</p>
          </div>
          <div className="footer__row__logos">
            <a
              rel="noopener noreferrer"
              href="https://github.com/Arka102202"
              target="_blank"
            >
              <img src={github} alt="" />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://linkedin.com/in/arkadyuti-sikdar-1a5853185"
              target="_blank"
            >
              <img src={linkedin} alt="" />
            </a>
            <a
              rel="noopener noreferrer"
              href="mailto:arka.online1995@gmail.com"
              target="_blank"
            >
              <img src={email} alt="" />
            </a>
          </div>
        </div>
        <div
          className={`${
            props.mode
              ? "footer__row--copy-info"
              : "footer__row--copy-info footer__row--copy-info--dark"
          }`}
        >
          <p className="footer__row__text">
            &copy; Arkadyuti. All right reserved.
          </p>
          <p className="footer__row__text">
            All the images and icons are downloaded from
          </p>
          <div className="footer__row__links">
            <a
              rel="noopener noreferrer"
              href="https://www.freepik.com"
              target="_blank"
              className="footer__row__link"
            >
              freepik
            </a>
            <a
              rel="noopener noreferrer"
              href="https://unsplash.com"
              target="_blank"
              className="footer__row__link"
            >
              unsplash
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.flaticon.com/"
              target="_blank"
              className="footer__row__link"
            >
              flaticon
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
