import React from "react";

import quotaWhite from "../../assets/logo/quotation-right-mark.png";
import quotaBlack from "../../assets/logo/quote.png";
import checkBlack from "../../assets/logo/check-green.png";
import checkWhite from "../../assets/logo/check.png";
import uiUx from "../../assets/logo/resources.png";
import frontend from "../../assets/logo/layout-fluid.png";

const Services = (props) => {
  const checkImg = props.mode ? checkWhite : checkBlack;
  const quotaImg = props.mode ? quotaWhite : quotaBlack;

  return (
    <div
      className={`${
        props.mode
          ? "section-box section-box--services"
          : "section-box section-box--services section-box--dark"
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
            Services
          </h2>
          <h4
            className={`${
              props.mode
                ? "section__heading__h4"
                : "section__heading__h4 section__heading__h4--dark"
            }`}
          >
            What do I offer?
          </h4>
        </div>
        <div className="section__info section__info--service">
          <div
            className={`${
              props.mode
                ? "section__info__card"
                : "section__info__card section__info__card--dark"
            }`}
          >
            {!props.mode && (
              <img
                src={uiUx}
                alt=" wire frame of a browser showing designing aspect"
                className="section__info__card__logo"
              />
            )}
            <h3
              className={`${
                props.mode
                  ? "section__info__card__h3"
                  : "section__info__card__h3 section__info__card__h3--dark"
              }`}
            >
              UI / UX Development
            </h3>
            <div className="section__info__card__quota">
              <div className="section__info__card__quota__logo">
                <img src={quotaImg} alt="single quotation mark" />
              </div>
              <div className="section__info__card__quota__text">
                <p className="section__info__card__quota__text__quotation">
                  A user interface is like a joke. If you have to explain it,
                  then it’s not good.
                </p>
                <div className="section__info__card__quota__text__author">
                  <div
                    className={`${
                      props.mode
                        ? "section__info__card__quota__text__author__bar"
                        : " section__info__card__quota__text__author__bar section__info__card__quota__text__author__bar--dark"
                    }`}
                  ></div>
                  <p className="section__info__card__quota__text__author__name">
                    Martin LeBlanc.
                  </p>
                </div>
              </div>
            </div>
            <div className="section__info__card__why">
              <div className="section__info__card__why__logo">
                <img src={checkImg} alt="wright sign surrounded by a circle" />
              </div>
              <div className="section__info__card__why__text-box">
                <p className="section__info__card__why__text">
                  So, design the{" "}
                  <span
                    className={`${props.mode ? "span" : "span span--dark"}`}
                  >
                    most advanced and intuitive website
                  </span>{" "}
                  for your next big project with me and{" "}
                  <span
                    className={`${props.mode ? "span" : "span span--dark"}`}
                  >
                    give your client the best possible user experience.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${
              props.mode
                ? "section__info__card section__info__card--special"
                : "section__info__card section__info__card--special section__info__card--dark section__info__card--special--dark"
            }`}
          >
            {!props.mode && (
              <img
                src={frontend}
                alt="wire frame of browser with a logo of database"
                className="section__info__card__logo"
              />
            )}
            <h3
              className={`${
                props.mode
                  ? "section__info__card__h3"
                  : "section__info__card__h3 section__info__card__h3--dark"
              }`}
            >
              Front-end Development
            </h3>
            <div className="section__info__card__quota">
              <div className="section__info__card__quota__logo">
                <img src={quotaImg} alt="single quotation mark" />
              </div>
              <div className="section__info__card__quota__text">
                <p className="section__info__card__quota__text__quotation">
                  Design is not what it looks like and feels like. Design is how
                  it works.
                </p>
                <div className="section__info__card__quota__text__author">
                  <div
                    className={`${
                      props.mode
                        ? "section__info__card__quota__text__author__bar"
                        : " section__info__card__quota__text__author__bar section__info__card__quota__text__author__bar--dark"
                    }`}
                  ></div>
                  <p className="section__info__card__quota__text__author__name">
                    Steve Jobs.
                  </p>
                </div>
              </div>
            </div>
            <div className="section__info__card__why">
              <div className="section__info__card__why__logo">
                <img src={checkImg} alt="wright sign surrounded by a circle" />
              </div>
              <div className="section__info__card__why__text-box">
                <p className="section__info__card__why__text">
                  In this age of speed, it is not enough to only have a great
                  UI/UX. The{" "}
                  <span
                    className={`${props.mode ? "span" : "span span--dark"}`}
                  >
                    performance and speed of the website
                  </span>{" "}
                  are also of{" "}
                  <span
                    className={`${props.mode ? "span" : "span span--dark"}`}
                  >
                    same importance, if not more.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <p
          className={`${
            props.mode
              ? "section__conclusion"
              : "section__conclusion section__conclusion--dark"
          }`}
        >
          So, hire me as I understand the need for your website, and I will
          build{" "}
          <span className={`${props.mode ? "span" : "span span--dark"}`}>
            the best performing, easy-to-maintain, ultra-responsive website
          </span>{" "}
          for your products.
        </p>
      </section>
    </div>
  );
};

export default React.memo(Services);
