import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addEmail, addIfShowNav } from "../featuers/myDetailsSlice";
import { API_URL, doApiMethod } from "../services/apiService";
import { saveTokenLocal } from "../services/localService";

const loginClient = () => {
  const [error, setError] = useState(null);
  let nav = useNavigate();
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubForm = (data) => {
    doApi(data);
  };

  const doApi = async (_dataBody) => {
    setError(null);
    console.log(_dataBody);
    let url = API_URL + "/users/login";
    try {
      let resp = await doApiMethod(url, "POST", _dataBody);
      console.log(resp.data);
      if (resp.data.token) {
        saveTokenLocal(resp.data.token);
        dispatch(addEmail({ email: _dataBody.email }));
        dispatch(addIfShowNav({ ifShowNav: true }));
        nav("/homeClient");
      }
    } catch (err) {
      if(err.message == 'Network Error'){
        setError(err.message)
      }else {
        setError(err.response.data.err);
      }
    }
  };

  let emailRef = register("email", {
    required: true,
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  });

  let passwordRef = register("password", { required: true, minLength: 3 });

  const toforgatPass = () => {
    nav("/submit");
  };

  const toSignUp = () => {
    nav("/SignUp");
  };

  return (
    <div style={{ height: "100vh" }} className="align-content-center">
      <div
        className="py-5 container shadow-lg p-4 d-flex flex-column text-center rounded rounded-4"
        style={{ width: "80%", maxWidth: "500px", backgroundColor: "white" }}
      >
        <div className="row justify-content-center">
          <img
            className="mb-4"
            style={{ height: "20%", width: "50%", }}
            src="src/assets/logo.png"
            alt="logo"
          />
          {/* <img src="" alt="" /> */}
          <h3 className="m-2">Sign in</h3>

          <form onSubmit={handleSubmit(onSubForm)} className="text-center">
            <div className="m-2 flex-grow-1 text-start">
              <input
                {...emailRef}
                type="email"
                className="form-control"
                placeholder="Enter email"
                style={{ fontSize: "1rem" }}
              />
              {errors.email ? (
                <small className="text-danger ">* Email invalid</small>
              ) : (
                ""
              )}
            </div>

            <div className="m-2 flex-grow-1 text-start">
              <input
                {...passwordRef}
                type="Password"
                className="form-control"
                placeholder="Password"
                style={{ fontSize: "1rem" }}
              />
              {errors.password ? (
                <small className="text-danger">
                  * Enter valid password, min 3 chars
                </small>
              ) : (
                ""
              )}
              <div className="d-flex justify-content-between">
                <p className="m-0">
                  {error && (
                    <p className="mt-1 text-danger text-end">{error}</p>
                  )}
                </p>
                <p onClick={toforgatPass} className="mt-1 text-danger text-end">
                  Forgot password?
                </p>
              </div>
            </div>

            <div className="m-2 text-center">
              <button className="btn border-black btn-lg w-75">Sign In</button>
            </div>
          </form>
          <div className="m-2 text-center">
            <p onClick={toSignUp} className="text-info">
              Create account
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loginClient;
