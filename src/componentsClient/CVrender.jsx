import React from "react";

const CVrender = ({ data }) => {
  return (
    <>
      {data.map((el, i) => {
        return (
          <div key={i}>
            <h1>{el.key}:</h1>
            <p>{el.value}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default CVrender;
