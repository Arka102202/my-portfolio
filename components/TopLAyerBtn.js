import React from "react";

const TopLayerBtn = (props) => {
  const changeMode = () => props.setMode((state) => !state);
  const goTop = () => {
    document.querySelector(".layer--1").scrollIntoView({ behavior: "smooth" });
  };

  const btns = props.imgs.map((item, i) => {
    if (i === 0)
      return (
        <button key={i} className="btn--square" onClick={changeMode}>
          <img src={item} alt="up arrow" />
        </button>
      );
    else
      return (
        <button key={i} className="btn--square" onClick={goTop}>
          <img src={item} alt="up arrow" />
        </button>
      );
  });

  return <div className="btn-box">{btns}</div>;
};

export default React.memo(TopLayerBtn);
