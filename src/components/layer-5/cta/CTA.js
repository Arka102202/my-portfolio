import React from "react";

import ctaImgLight from "../../../assets/img/cta-img-light.webp";
import ctaImgDark from "../../../assets/img/cta-img-dark.webp";

const CTA = (props) => {
  const ctaImg = props.mode ? ctaImgLight : ctaImgDark;

  const clickHandler = () => {
    document.querySelector("body").style.overflow = "hidden";
    props.setShowForm(true);
    props.setShowBackdrop(true);
  };

  return (
    <section className={`${props.mode ? "cta" : "cta cta--dark"}`}>
      <div className={props.mode ? "cta__info" : "cta__info cta__info--dark"}>
        <div className="cta__info__text-link">
          <p
            className={`${
              props.mode
                ? "cta__info__text__h2 cta__info__text__h2--1"
                : "cta__info__text__h2 cta__info__text__h2--1 cta__info__text__h2--dark"
            }`}
          >
            Are you
          </p>
          <p
            className={`${
              props.mode
                ? "cta__info__text__h2 cta__info__text__h2--2"
                : "cta__info__text__h2 cta__info__text__h2--2 cta__info__text__h2--dark"
            }`}
          >
            convinced ?
          </p>
          <p
            className={`${
              props.mode
                ? "cta__info__text__text"
                : "cta__info__text__text cta__info__text__text--dark"
            }`}
          >
            I know you are,
          </p>
          <p
            className={`${
              props.mode
                ? "cta__info__text__text"
                : "cta__info__text__text cta__info__text__text--dark"
            }`}
          >
            So, without wasting any time
          </p>
          <p
            className={`${
              props.mode
                ? "cta__info__text__text cta__info__text__text--3"
                : "cta__info__text__text cta__info__text__text--3 cta__info__text__text--dark"
            }`}
          >
            let’s discuss about your next big project.
          </p>
          <p
            className={`${
              props.mode
                ? "cta__info__text__text--special"
                : "cta__info__text__text--special cta__info__text__text--special--dark"
            }`}
          >
            *By the way this website is also build by me from scratch.
          </p>
          <button className="btn" onClick={clickHandler}>
            <p
              className={`${
                props.mode ? "btn__text" : "btn__text btn__text--dark"
              }`}
            >
              Contact me
            </p>
            <div className="btn__bar"></div>
          </button>
        </div>
        <div
          className={`${
            props.mode
              ? "cta__info__img"
              : "cta__info__img cta__info__img--dark"
          }`}
        >
          <img src={ctaImg} alt="" />
        </div>
      </div>
      <div
        className={`${props.mode ? "cta__bg" : "cta__bg cta__bg--dark"}`}
      ></div>
    </section>
  );
};

export default CTA;

// {`${props.mode ? "" : " --dark"}`}
