import React, { useState } from "react";
import "./index.css";

const CV = ({ width, height, src }) => {
  const [highLight, SetHighLight] = useState(false);

  const handleHover = function () {
    highLight ? SetHighLight(false) : SetHighLight(true);
  };

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className={highLight ? "borderHighLight" : "borderDef"}
    >
      <img width={width} height={height} src={src} alt="" />
    </div>
  );
};

export default CV;
