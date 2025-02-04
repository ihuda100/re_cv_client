import React from "react";
import { useNavigate } from "react-router-dom";
import { addIfShowNav } from "../featuers/myDetailsSlice";
import { useDispatch, useSelector } from "react-redux";

function HeaderClient() {
  let nav = useNavigate();
  const dispatch = useDispatch();
  const IfShowNav = useSelector((state) => state.myDetailsSlice.ifShowNav);
  const IsAdmin = useSelector((state) => state.myDetailsSlice.isAdmin);

  const onWelcomeClick = () => {
    nav("/");
  };
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
    <div className="p-2 container " style={{ width: "100%", backgroundColor: "#333" }}>
      <div className="d-flex justify-content-between ">
        {IfShowNav ? (
          " "
        ) : (
          <button
            className="btn border-black "
            style={{ backgroundColor: "gold", color: "black" }}
            onClick={onWelcomeClick}
          >
            Welcome
          </button>
        )}
        {IfShowNav ? (
          <button
            className="btn border-black "
            style={{ backgroundColor: "gold", color: "black" }}
            onClick={onHomeClick}
          >
            Home
          </button>
        ) : (
          ""
        )}
        <button
          className="btn border-black"
          style={{ backgroundColor: "gold", color: "black" }}
          onClick={onHelpClick}
        >
          help
        </button>

        {IfShowNav ? (
          <button
            className="btn border-black"
            style={{ backgroundColor: "gold", color: "black" }}
            onClick={onlogout}
          >
            logout
          </button>
        ) : (
          ""
        )}

        {IfShowNav ? (
          <button
            className="btn border-black"
            style={{ backgroundColor: "gold", color: "black" }}
            onClick={onHistory}
          >
            History
          </button>
        ) : (
          ""
        )}

        {IfShowNav && IsAdmin ? (
          <button
            className="btn border-black"
            style={{ backgroundColor: "gold", color: "black" }}
            onClick={onAdminClick}
          >
            Admin
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default HeaderClient;
