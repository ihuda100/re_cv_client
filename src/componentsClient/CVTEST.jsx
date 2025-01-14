import React from "react";
import { useNavigate } from "react-router-dom";

const CVTEST = () => {
  let nav = useNavigate();

  const toTemp = () => {
    nav("/Template");
  };

  return (
    <div>
      <button onClick={toTemp}>click Here</button>
    </div>
  );
};

export default CVTEST;
