import React, { useEffect, useState } from "react";

import appLogo from "../../assets/img/as-logo.webp";
import heroBgLight from "../../assets/img/as-bg.webp";
import heroImg from "../../assets/img/hero-img.webp";
import Button from "../general/Button";

const Layer1 = (props) => {
  const [sectionName, setSectionName] = useState("");
  const [showDisplay, setShowDisplay] = useState(false);
  const [style, setStyle] = useState();

  const classNameShoeDisplay = `${
    props.mode
      ? `section-name-display ${
          showDisplay ? "section-name-display--move-up" : ""
        }`
      : `section-name-display ${
          showDisplay ? "section-name-display--move-up" : ""
        } section-name-display--dark`
  }`;

  useEffect(() => {
    const width = getComputedStyle(document.querySelector(".layer--1")).width;

    setStyle({ width: `calc(${width} - 2rem)`, margin: "0 1.2rem 0 .5rem" });

    window.addEventListener("resize", () => {
      const width = getComputedStyle(document.querySelector(".layer--1")).width;
      setStyle({ width: `calc(${width} - 2rem)`, margin: "0 1.2rem 0 .5rem" });
    });

    const els = [
      document.querySelector(".layer--1"),
      document.querySelector(".section-box--services"),
      document.querySelector(".section-box--about-me"),
      document.querySelector(".section-box--skills"),
      document.querySelector(".layer--5"),
    ];

    const options = {
      threshold: 0,
      rootMargin: `0px 0px -100% 0px`,
    };
    let y = 0;

    const callback = (entries) => {
      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        if (entry.isIntersecting && entry.target === els[0]) {
          setShowDisplay(false);
        } else if (entry.isIntersecting && entry.target === els[1]) {
          setShowDisplay(true);
          setSectionName("Services");
        } else if (
          !entry.isIntersecting &&
          entry.target === els[1] &&
          sectionName === "Services"
        ) {
          setShowDisplay(false);
        } else if (entry.isIntersecting && entry.target === els[2]) {
          setShowDisplay(true);
          setSectionName("About me");
        } else if (
          !entry.isIntersecting &&
          entry.target === els[2] &&
          sectionName === "About me"
        ) {
          setShowDisplay(false);
        } else if (entry.isIntersecting && entry.target === els[3]) {
          setShowDisplay(true);
          setSectionName("Skills");
        } else if (
          !entry.isIntersecting &&
          entry.target === els[3] &&
          sectionName === "Skills"
        ) {
          setShowDisplay(false);
        } else if (entry.isIntersecting && entry.target === els[4]) {
          setShowDisplay(false);
        } else if (
          !entry.isIntersecting &&
          entry.target === els[4] &&
          sectionName === "" &&
          y > 0
        ) {
          setShowDisplay(true);
          setSectionName("Skills");
        }
      }

      if (y === 0) y++;
    };
    const observer = new IntersectionObserver(callback, options);

    els.forEach((item) => {
      observer.observe(item);
    });
  }, [sectionName]);

  const clickHandler = () => {
    document.querySelector("body").style.overflow = "hidden";
    props.setShowForm(true);
    props.setShowBackdrop(true);
  };

  return (
    <>
      <section className="layer--1">
        <div
          className={`${props.mode ? "navbar" : "navbar navbar--dark"}`}
          style={style}
        >
          <div className="logo">
            <div className="logo--dummy">
              <img src={appLogo} alt="app logo" />
            </div>
          </div>
          <p className={classNameShoeDisplay}>{sectionName}</p>
          <div className="nav">
            <button
              className={`${
                props.mode ? "nav__link" : "nav__link nav__link--dark"
              }`}
              onClick={clickHandler}
            >
              Contact me
            </button>
            <div className="nav__link--fill-bar"></div>
          </div>
        </div>
        <div
          className={`${
            props.mode ? "hero-section hero-section--light" : "hero-section"
          }`}
          style={{
            backgroundImage: `url(${props.mode && heroBgLight})`,
          }}
        >
          <div className="hero-section__info">
            <p className="hero-section__info__h3">Hi, I am,</p>
            <p
              className={`${
                props.mode
                  ? "hero-section__info__h1"
                  : "hero-section__info__h1 hero-section__info__h1--dark"
              }`}
            >
              Arkadyuti Sikdar.
            </p>
            <p
              className={`${
                props.mode
                  ? "hero-section__info__h2"
                  : "hero-section__info__h2 hero-section__info__h2--dark"
              }`}
            >
              I am a{" "}
              <span
                className={`${
                  props.mode
                    ? "hero-section__info__h2__span"
                    : "hero-section__info__h2__span hero-section__info__h2__span--dark"
                }`}
              >
                Front-end developer.
              </span>
            </p>
            <p className="hero-section__info__body-text">
              can produce production quality websites tailored to you and your
              product.
            </p>
            <Button mode={props.mode} setShowForm={props.setShowForm} />
          </div>
          {!props.mode && (
            <div div className="hero-section__img-box">
              <img src={heroImg} alt="web development abstract"></img>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default React.memo(Layer1);
