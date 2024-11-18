import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import TopLayerBtn from "./components/TopLAyerBtn";
import WelcomeAnim from "./components/WelcomeAnim";

import heroBgDark from "./assets/img/layer-1-bg.webp";
import arrowSquareUpLight from "./assets/logo/arrow-square-up-black.png";
import darkMode from "./assets/logo/dark-mode-black.png";
import arrowSquareUpDark from "./assets/logo/arrow-square-up-white.png";
import lightMode from "./assets/logo/dark-mode-white.png";
import Layer1 from "./components/layer-1/Layer1";
import Services from "./components/layer-2__services/Services";
import AboutMe from "./components/layer-3__about-me/AboutMe";
import Skills from "./components/layer-4__skills/Skills";
import Layer5 from "./components/layer-5/Layer5";
import ContactMe from "./components/ContactMe";
import Backdrop from "./components/BackDrop";
import NavbarMob from "./components/NavbarMob";

function App() {
  const [displayWelcomeAnim, setDisplayWelcomeAnim] = useState(true);
  const [mode, setMode] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [style, setStyle] = useState();

  const imgs = mode
    ? [darkMode, arrowSquareUpLight]
    : [lightMode, arrowSquareUpDark];

  useEffect(() => {
    const width = getComputedStyle(document.querySelector("body")).width;

    setStyle({ width });

    window.addEventListener("resize", () =>
      setStyle({
        width: getComputedStyle(document.querySelector("body")).width,
      })
    );
    // setTimeout(() => {
    //   setDisplayWelcomeAnim(false);
    //   document.querySelector("body").style.overflowY = "auto";
    // }, 1000);

    window.addEventListener("load", () => {
      setTimeout(() => {
        setDisplayWelcomeAnim(false);
        document.querySelector("body").style.overflowY = "auto";
      }, 1000);
    });


  }, []);

  return (
    <>
      <div
        className={`${mode ? "main-body" : "main-body main-body--dark"}`}
        style={style}
      >
        {displayWelcomeAnim && <WelcomeAnim />}
        {!displayWelcomeAnim && (
          <>
            {showForm && (
              <>
                {showBackdrop &&
                  ReactDom.createPortal(
                    <Backdrop
                      setShowForm={setShowForm}
                      setShowBackdrop={setShowBackdrop}
                    />,
                    document.getElementById("backdrop--root")
                  )}
                {ReactDom.createPortal(
                  <ContactMe
                    mode={mode}
                    setShowForm={setShowForm}
                    showBackdrop={showBackdrop}
                    setShowBackdrop={setShowBackdrop}
                  />,
                  document.getElementById("overlay--root")
                )}
              </>
            )}
            <TopLayerBtn imgs={imgs} setMode={setMode} mode={mode} />
            <NavbarMob
              mode={mode}
              setMode={setMode}
              showForm={showForm}
              setShowForm={setShowForm}
              setShowBackdrop={setShowBackdrop}
            />
            <div
              className="layer--12-box"
              style={{
                backgroundImage: `url(${!mode && heroBgDark})`,
              }}
            >
              <Layer1
                mode={mode}
                setShowForm={setShowForm}
                setShowBackdrop={setShowBackdrop}
              />
              <Services mode={mode} />
            </div>
            <AboutMe
              mode={mode}
              setShowForm={setShowForm}
              setShowBackdrop={setShowBackdrop}
            />
            <Skills mode={mode} />
            <Layer5
              mode={mode}
              setShowForm={setShowForm}
              setShowBackdrop={setShowBackdrop}
            />
          </>
        )}
      </div>
    </>
  );
}

export default App;
