import React from "react";
import { useNavigate } from "react-router-dom";

function HeaderAdmin() {
  let nav = useNavigate();

  const onHomeClick = () => {
    nav("/homeClient");
  };
  const onDashboardAdminClick = () => {
    nav("/admin");
  };

  return (
    <div
      className="nav-container p-2  border border-bottom border-light-subtle"
      style={{
        width: "100%",
        // boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        //borderRadius: "8px",
        backgroundColor: "white", // Ensure visibility
      }}
    >
      <div className="p-2 container " style={{ width: "60%" }}>
        <div className="d-flex justify-content-around ">
          <button
            className="btn  border-black "
            onClick={onDashboardAdminClick}
          >
            Home Admin
          </button>
          <button className="btn  border-black " onClick={onHomeClick}>
            Home Client
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderAdmin;
