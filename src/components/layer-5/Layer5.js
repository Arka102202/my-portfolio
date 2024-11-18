import React from "react";
import CTA from "./cta/CTA";
import Footer from "./footer/Footer";

const Layer5 = (props) => {
  return (
    <div className="layer--5">
      <CTA
        mode={props.mode}
        setShowForm={props.setShowForm}
        setShowBackdrop={props.setShowBackdrop}
      />
      <Footer mode={props.mode} />
    </div>
  );
};

export default React.memo(Layer5);
