import React from "react";

import pdfLogoWhite from "../../assets/logo/file-pdf.png";
import pdfLogoBlack from "../../assets/logo/file-pdf-black.png";
import paperPlaneWhite from "../../assets/logo/paper-plane.png";
import paperPlaneBlack from "../../assets/logo/paper-plane-black.png";
import myPic from "../../assets/img/my-pic.webp";
import myResume from "../../assets/pdf/Arkadyuti_Sikdar123.pdf";

const AboutMe = (props) => {
  const pdfLogo = props.mode ? pdfLogoWhite : pdfLogoBlack;
  const paperPlane = props.mode ? paperPlaneBlack : paperPlaneWhite;

  const clickHandler = () => {
    document.querySelector("body").style.overflow = "hidden";
    props.setShowForm(true);
    props.setShowBackdrop(true);
  };

  return (
    <div
      className={`${
        props.mode
          ? "section-box section-box--about-me"
          : "section-box section-box--about-me section-box--dark"
      }`}
    >
      <section className="section">
        <div className="section__heading">
          <h2
            className={`${
              props.mode
                ? "section__heading__h2--2"
                : "section__heading__h2--2 section__heading__h2--2--dark"
            }`}
          >
            About me
          </h2>
          <h4
            className={`${
              props.mode
                ? "section__heading__h4"
                : "section__heading__h4 section__heading__h4--dark"
            }`}
          >
            Why do you have to hire me!
          </h4>
        </div>
        <div
          className={`${
            props.mode
              ? "section__info section__info--about-me"
              : "section__info section__info--dark section__info--about-me"
          }`}
        >
          <div className="section__info__text-btn">
            <p
              className={`${
                props.mode
                  ? "section__info__text"
                  : "section__info__text section__info__text--dark"
              }`}
            >
              I am a highly skilled front-end web developer with extensive
              knowledge in HTML, CSS, Java-Script, React and Figma. I can
              produce and deliver stunning-looking and easy to up-gradable
              websites tailored to you and your product. So that you can upgrade
              and maintain your websites with great ease.
            </p>
            <p
              className={`${
                props.mode
                  ? "section__info__text--bold"
                  : "section__info__text--bold section__info__text--bold--dark"
              }`}
            >
              So, don't waste any time and hire me to make your next idea a
              reality.
            </p>
            <div className="section__info__btns">
              <a
                href={myResume}
                download
                className={`${
                  props.mode
                    ? "section__info__btn section__info__btn--1"
                    : "section__info__btn section__info__btn--1 section__info__btn--1--dark "
                }`}
              >
                <div className="section__info__btn--1__text">Resume</div>
                <img
                  src={pdfLogo}
                  alt="pdf written within a box shaped like a page"
                />
              </a>
              <button
                className={`${
                  props.mode
                    ? "section__info__btn section__info__btn--2"
                    : "section__info__btn section__info__btn--2 section__info__btn--2--dark"
                }`}
                onClick={clickHandler}
              >
                <p className="section__info__btn--2__text">Contact me</p>
                <img src={paperPlane} alt="paper plane origami" />
              </button>
            </div>
          </div>
          <div
            className={`${
              props.mode ? "section__img" : "section__img section__img--dark"
            }`}
          >
            <img src={myPic} alt="self portrait" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default React.memo(AboutMe);
