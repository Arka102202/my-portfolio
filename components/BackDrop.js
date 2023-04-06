import React, { useEffect, useState } from "react";

const Backdrop = (props) => {
  const [y, setY] = useState(0);
  useEffect(() => {
    setY(window.scrollY);
  }, []);
  const clickHandler = () => {
    document.querySelector("body").style.overflowY = "auto";
    props.setShowForm((state) => !state);
    props.setShowBackdrop((state) => !state);
  };
  return (
    <div
      className="backdrop"
      style={{
        top: `${y}px`,
      }}
      onClick={clickHandler}
    ></div>
  );
};

export default Backdrop;
