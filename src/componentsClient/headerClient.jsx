import React from "react";
import { useNavigate } from "react-router-dom";
import { addIfShowNav } from "../featuers/myDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
import * as bootstrap from "bootstrap";

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

  return IfShowNav ? (
    <div
      className="nav-container p-2 border border-bottom border-light-subtle"
      style={{
        width: "100%",
        // boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        // borderRadius: "8px",
        //borderBottom: "1px solid black",
        backgroundColor: "white", // Ensure visibility
      }}
    >
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ height: "40px" }}
      >
        {/* <div className="d-flex justify-content-around "> */}

        <img src="src/assets/react.svg" alt="logo" onClick={onHomeClick} />

        <button className="btn border-black" onClick={onHistory}>
          History
        </button>

        {/* Drop Down */}
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                onClick={onAdminClick}
                style={{ cursor: "pointer" }}
              >
                {IsAdmin ? "Admin" : ""}
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                onClick={onHelpClick}
                style={{ cursor: "pointer" }}
              >
                Help
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                onClick={onlogout}
                style={{ cursor: "pointer" }}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>

        {/* <button className="btn border-black" onClick={onHelpClick}>
          Help
        </button> */}

        {/* {IsAdmin ? (
          <button className="btn border-black" onClick={onAdminClick}>
            Admin
          </button>
        ) : (
          ""
        )} */}

        {/* <button
          style={{ color: "red" }}
          className="btn border-danger"
          onClick={onlogout}
        >
          logout
        </button> */}
      </div>
      {/* </div> */}
    </div>
  ) : (
    ""
  );
}

export default HeaderClient;
