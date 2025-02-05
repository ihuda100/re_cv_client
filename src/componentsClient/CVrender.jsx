import React from "react";

const CVrender = ({ data }) => {
  return (
    <>
      {data.map((el, i) => {
        return (
          <div key={i} className="px-4"> 
            <h4>{el.key}:</h4>
            <p>{el.value}</p>
            {i != data.length-1 && <hr />}
            
          </div>
        );
      })}
    </>
  );
};

export default CVrender;
