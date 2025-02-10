import React from "react";
import { useNavigate } from "react-router-dom";
import { addIfShowNav } from "../featuers/myDetailsSlice";
import { useDispatch, useSelector } from "react-redux";

function HeaderClient() {
  let nav = useNavigate();
  const dispatch = useDispatch();
  const IfShowNav = useSelector((state) => state.myDetailsSlice.ifShowNav);
  const IsAdmin = useSelector((state) => state.myDetailsSlice.isAdmin);


  const onHomeClick = () => {
    nav("/homeClient");
  };
  const onHelpClick = () => {
    nav("/help");
  };
  const onlogout = () => {
    dispatch(addIfShowNav({ ifShowNav: false }));
    nav("/logout");
  };
  const onHistory = () => {
    nav("/history");
  };
  const onAdminClick = () => {
    nav("/Admin");
  };

  return (
    IfShowNav ?
      <div
        className="nav-container p-2 "
        style={{
          width: "100%",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "8px",
          backgroundColor: "white", // Ensure visibility
        }}
      >
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ height: "70px" }}
        >
          {/* <div className="d-flex justify-content-around "> */}



          <img
            src="src/assets/react.svg"
            alt="logo"
            onClick={onHomeClick}
          />


          <button
            className="btn border-black"
            onClick={onHelpClick}
          >
            help
          </button>

          <button
            className="btn border-black"
            onClick={onHistory}
          >
            History
          </button>


          {IsAdmin ? (
            <button
              className="btn border-black"
              onClick={onAdminClick}
            >
              Admin
            </button>
          ) : (
            ""
          )}

          <button
          style={{color:"red"}}
            className="btn border-danger"
            onClick={onlogout}
          >
            logout
          </button>
        </div>
        {/* </div> */}
      </div> : ""
  );
}

export default HeaderClient;
