import React from "react";

import frontEnd from "../../assets/logo/web-programming.png";
import htmlLogWhite from "../../assets/logo/html-white.png";
import htmlLogBlack from "../../assets/logo/html-black.png";
import cssLogWhite from "../../assets/logo/css-white.png";
import cssLogBlack from "../../assets/logo/css-black.png";
import jsLogWhite from "../../assets/logo/js-white.png";
import jsLogBlack from "../../assets/logo/js.png";
import reactLogWhite from "../../assets/logo/react-white.png";
import reactLogBlack from "../../assets/logo/laptop.png";
import uiUx from "../../assets/logo/front-end.png";
import adobePhotoShopLogWhite from "../../assets/logo/adobe-photoshop-white.png";
import adobePhotoShopLogBlack from "../../assets/logo/adobe-photoshop-black.png";
import figmaLogWhite from "../../assets/logo/figma-white.png";
import figmaLogBlack from "../../assets/logo/figma.png";
import backend from "../../assets/logo/backend.png";
import javaLogWhite from "../../assets/logo/java-white.png";
import javaLogBlack from "../../assets/logo/java-black.png";
import mysqlLogWhite from "../../assets/logo/mysql-white.png";
import mysqlLogBlack from "../../assets/logo/mysql-black.png";
import springBootLogWhite from "../../assets/logo/spring-boot-white.png";
import springBootLogBlack from "../../assets/logo/spring-boot-black.png";

const Skills = (props) => {
  const htmlLogo = props.mode ? htmlLogBlack : htmlLogWhite;
  const cssLogo = props.mode ? cssLogBlack : cssLogWhite;
  const jsLogo = props.mode ? jsLogBlack : jsLogWhite;
  const reactLogo = props.mode ? reactLogBlack : reactLogWhite;
  const adobePhotoShopLogo = props.mode
    ? adobePhotoShopLogBlack
    : adobePhotoShopLogWhite;
  const figmaLogo = props.mode ? figmaLogBlack : figmaLogWhite;
  const javaLogo = props.mode ? javaLogBlack : javaLogWhite;
  const mysqlLogo = props.mode ? mysqlLogBlack : mysqlLogWhite;
  const springBootLogo = props.mode ? springBootLogBlack : springBootLogWhite;

  return (
    <div
      className={`${
        props.mode
          ? "section-box section-box--skills"
          : "section-box section-box--skills section-box--dark"
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
            Skills
          </h2>
          <h4
            className={`${
              props.mode
                ? "section__heading__h4"
                : "section__heading__h4 section__heading__h4--dark"
            }`}
          >
            My technical knowledge base.
          </h4>
        </div>
        <div className="section__info section__info--skills">
          <div
            className={`${
              props.mode
                ? "section__info__card section__info__card--special section__info__card--skills"
                : "section__info__card section__info__card--special--dark section__info__card--skills section__info__card--skills--dark section__info__card--dark"
            }`}
          >
            {!props.mode && (
              <img
                src={frontEnd}
                alt="wire frame of browser window showing coding sign"
                className="section__info__card__logo"
              />
            )}
            <h3
              className={`${
                props.mode
                  ? "section__info__card__h3 section__info__card__h3--skills"
                  : "section__info__card__h3 section__info__card__h3--skills section__info__card__h3--dark"
              }`}
            >
              Front-end Skills
            </h3>
            <div
              className={`${
                props.mode
                  ? "section__info__card__skill"
                  : "section__info__card__skill section__info__card__skill--dark"
              }`}
            >
              <div
                className={`${
                  props.mode
                    ? "section__info__card__skill__logo"
                    : "section__info__card__skill__logo section__info__card__skill__logo--dark"
                }`}
              >
                <img src={htmlLogo} alt="html sign" />
              </div>
              <p
                className={`${
                  props.mode
                    ? "section__info__card__skill__name"
                    : "section__info__card__skill__name section__info__card__skill__name--dark"
                }`}
              >
                HTML
              </p>
            </div>
            <div
              className={`${
                props.mode
                  ? "section__info__card__skill"
                  : "section__info__card__skill section__info__card__skill--dark"
              }`}
            >
              <div
                className={`${
                  props.mode
                    ? "section__info__card__skill__logo"
                    : "section__info__card__skill__logo section__info__card__skill__logo--dark"
                }`}
              >
                <img src={cssLogo} alt="css sign" />
              </div>
              <p
                className={`${
                  props.mode
                    ? "section__info__card__skill__name"
                    : "section__info__card__skill__name section__info__card__skill__name--dark"
                }`}
              >
                CSS
              </p>
            </div>
            <div
              className={`${
                props.mode
                  ? "section__info__card__skill"
                  : "section__info__card__skill section__info__card__skill--dark"
              }`}
            >
              <div
                className={`${
                  props.mode
                    ? "section__info__card__skill__logo"
                    : "section__info__card__skill__logo section__info__card__skill__logo--dark"
                }`}
              >
                <img src={jsLogo} alt="Java Script sign" />
              </div>
              <p
                className={`${
                  props.mode
                    ? "section__info__card__skill__name"
                    : "section__info__card__skill__name section__info__card__skill__name--dark"
                }`}
              >
                Java-Script
              </p>
            </div>
            <div
              className={`${
                props.mode
                  ? "section__info__card__skill"
                  : "section__info__card__skill section__info__card__skill--dark"
              }`}
            >
              <div
                className={`${
                  props.mode
                    ? "section__info__card__skill__logo"
                    : "section__info__card__skill__logo section__info__card__skill__logo--dark"
                }`}
              >
                <img src={reactLogo} alt="react sign" />
              </div>
              <p
                className={`${
                  props.mode
                    ? "section__info__card__skill__name"
                    : "section__info__card__skill__name section__info__card__skill__name--dark"
                }`}
              >
                React
              </p>
            </div>
          </div>
          <div
            className={`${
              props.mode
                ? "section__info__card section__info__card--skills"
                : "section__info__card section__info__card--skills--dark section__info__card--skills section__info__card--dark"
            }`}
          >
            {!props.mode && (
              <img
                src={uiUx}
                alt="wire frame of computer and a browser window coming out of it"
                className="section__info__card__logo"
              />
            )}
            <h3
              className={`${
                props.mode
                  ? "section__info__card__h3 section__info__card__h3--skills"
                  : "section__info__card__h3 section__info__card__h3--skills section__info__card__h3--dark"
              }`}
            >
              UI / UX Skills
            </h3>
            <div
              className={`${
                props.mode
                  ? "section__info__card__skill"
                  : "section__info__card__skill section__info__card__skill--dark"
              }`}
            >
              <div
                className={`${
                  props.mode
                    ? "section__info__card__skill__logo"
                    : "section__info__card__skill__logo section__info__card__skill__logo--dark"
                }`}
              >
                <img src={adobePhotoShopLogo} alt="adobe photoshop sign" />
              </div>
              <p
                className={`${
                  props.mode
                    ? "section__info__card__skill__name"
                    : "section__info__card__skill__name section__info__card__skill__name--dark"
                }`}
              >
                Adobe Photoshop
              </p>
            </div>
            <div
              className={`${
                props.mode
                  ? "section__info__card__skill"
                  : "section__info__card__skill section__info__card__skill--dark"
              }`}
            >
              <div
                className={`${
                  props.mode
                    ? "section__info__card__skill__logo"
                    : "section__info__card__skill__logo section__info__card__skill__logo--dark"
                }`}
              >
                <img src={figmaLogo} alt="sign of figma app" />
              </div>
              <p
                className={`${
                  props.mode
                    ? "section__info__card__skill__name"
                    : "section__info__card__skill__name section__info__card__skill__name--dark"
                }`}
              >
                Figma
              </p>
            </div>
          </div>
          <div
            className={`${
              props.mode
                ? "section__info__card section__info__card--skills"
                : "section__info__card section__info__card--skills--dark section__info__card--skills section__info__card--dark"
            }`}
          >
            {!props.mode && (
              <img
                src={backend}
                alt="wire frame of browser window showing database sign"
                className="section__info__card__logo"
              />
            )}
            <h3
              className={`${
                props.mode
                  ? "section__info__card__h3 section__info__card__h3--skills"
                  : "section__info__card__h3 section__info__card__h3--skills section__info__card__h3--dark"
              }`}
            >
              Back-end Skills
            </h3>
            <div
              className={`${
                props.mode
                  ? "section__info__card__skill"
                  : "section__info__card__skill section__info__card__skill--dark"
              }`}
            >
              <div
                className={`${
                  props.mode
                    ? "section__info__card__skill__logo"
                    : "section__info__card__skill__logo section__info__card__skill__logo--dark"
                }`}
              >
                <img src={javaLogo} alt="java language sign" />
              </div>
              <p
                className={`${
                  props.mode
                    ? "section__info__card__skill__name"
                    : "section__info__card__skill__name section__info__card__skill__name--dark"
                }`}
              >
                Java
              </p>
            </div>
            <div
              className={`${
                props.mode
                  ? "section__info__card__skill"
                  : "section__info__card__skill section__info__card__skill--dark"
              }`}
            >
              <div
                className={`${
                  props.mode
                    ? "section__info__card__skill__logo"
                    : "section__info__card__skill__logo section__info__card__skill__logo--dark"
                }`}
              >
                <img src={mysqlLogo} alt="mysql sign" />
              </div>
              <p
                className={`${
                  props.mode
                    ? "section__info__card__skill__name"
                    : "section__info__card__skill__name section__info__card__skill__name--dark"
                }`}
              >
                Mysql
              </p>
            </div>
            <div
              className={`${
                props.mode
                  ? "section__info__card__skill"
                  : "section__info__card__skill section__info__card__skill--dark"
              }`}
            >
              <div
                className={`${
                  props.mode
                    ? "section__info__card__skill__logo"
                    : "section__info__card__skill__logo section__info__card__skill__logo--dark"
                }`}
              >
                <img src={springBootLogo} alt="spring boot sign" />
              </div>
              <p
                className={`${
                  props.mode
                    ? "section__info__card__skill__name"
                    : "section__info__card__skill__name section__info__card__skill__name--dark"
                }`}
              >
                Spring boot
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default React.memo(Skills);
