import React from "react";
import Balancer from "react-wrap-balancer";

const CVrender = ({ data, _color }) => {
  return (
    <>
      {data.map((el, i) => {
        return (
          <div key={i} className="px-4">
            <h4 style={{ color: _color }}>{el.key}:</h4>
            <Balancer>
              {" "}
              <p className="fs-6">{el.value}</p>
            </Balancer>

            {i != data.length - 1 && <hr />}
          </div>
        );
      })}
    </>
  );
};

export default CVrender;
