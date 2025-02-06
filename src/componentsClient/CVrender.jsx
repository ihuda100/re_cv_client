import React from "react";

const CVrender = ({ data, _color }) => {
  return (
    <>
      {data.map((el, i) => {
        return (
          <div key={i} className="px-4">
            <h4 style={{ color: _color }}>{el.key}:</h4>
            <p>{el.value}</p>
            {i != data.length - 1 && <hr />}
          </div>
        );
      })}
    </>
  );
};

export default CVrender;
