import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addEmail, addIfShowNav } from '../featuers/myDetailsSlice';
import { API_URL, doApiMethod } from '../services/apiService';
import { saveTokenLocal } from '../services/localService';


const loginClient = () => {
  let nav = useNavigate();
  let { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();


  const onSubForm = (data) => {
    doApi(data);
  }

  const doApi = async (_dataBody) => {
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
    }
    catch (err) {
      console.log(err.response.data.err);
      alert(err.response.data.err)
    }
  }

  let emailRef = register("email", {
    required: true,
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  });

  let passwordRef = register("password", { required: true, minLength: 3 });

  const toforgatPass = () => {
    nav("/submit");
  };

  const toSignUp = () => {
    nav("/SignUp");
  };


  return (
    <div className=" container mt-5 shadow-lg p-4 d-flex flex-column text-center" style={{ width: '80%', maxWidth: '500px', backgroundColor: 'white' }}>
      <div className="row justify-content-center">
        {/* <img src="" alt="" /> */}
        <h3 className='m-2'>Sign in</h3>

        <form onSubmit={handleSubmit(onSubForm)} className="text-center">
          <div className="m-2 flex-grow-1 text-start">
            <input {...emailRef} type="email" className="form-control" placeholder="Enter email" style={{ fontSize: '1rem' }} />
            {errors.email ? <small className='text-danger '>* Email invalid</small> : ""}
          </div>

          <div className="m-2 flex-grow-1 text-start">
            <input {...passwordRef} type="Password" className="form-control" placeholder="Password" style={{ fontSize: '1rem' }} />
            {errors.password ? <small className='text-danger'>* Enter valid password, min 3 chars</small> : ""}
            <p onClick={toforgatPass} className='mt-1 text-danger text-end'>Forgot password?</p>
          </div>

          <div className='m-2 text-center'>
            <button className="btn btn-primary btn-lg w-75">Sign In</button>
          </div>

        </form>
        <div className='m-2 text-center'>
          <p onClick={toSignUp} className='text-info'>Create account</p>
        </div>

      </div>
    </div>
  );
};

export default loginClient;