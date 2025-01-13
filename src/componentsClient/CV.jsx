import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CVtemp1 from "./CVtemp1";

const CV = ({ width, height, src, cvlink }) => {
  const [highLight, SetHighLight] = useState(false);

  const handleHover = function () {
    highLight ? SetHighLight(false) : SetHighLight(true);
  };

  let nav = useNavigate();

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
