import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { addIfShowNav } from "../featuers/myDetailsSlice";

const Welcome = () => {
    let nav = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addIfShowNav({ ifShowNav: false }));
    }, []);
    
    const toSignIn = () => {
        nav("/login");
    };
    const toSignUp = () => {
        
        nav("/SignUp");
    };

    return (
        <div className="container-fluid mt-5">
               <div className="d-flex justify-content-around p-5 m-3" style={{ height: '350px' }}>
                <div className="text-center p-3" style={{ height: '100%', width: "40%"}}>
                    <div className="m-3"> <img style={{ height: '10%', width: "10%", borderRadius:"50px"}} src="src/assets/react.svg" alt="logo" /></div>
                    <button onClick={toSignIn} className="btn btn-outline-primary m-3 w-50">Sign In</button>
                    <button onClick={toSignUp} className="btn btn-outline-primary m-3 w-50">Sign Up</button>
                </div>

                <div className="px-4" style={{ height: '100%', width: "60%" }}>
                    <div className="bg-white p-4 shadow-lg text-center" style={{ height: '100%', width: "80%", borderRadius: '16px' }}>
                        <h3 className="py-2">About Us</h3>
                        <p>At [Your Website Name], we believe that your resume should work as hard as you do.
                            Our AI-driven platform is designed to transform your experience and achievements into a compelling story that resonates with recruiters and hiring managers.
                            We’re passionate about helping individuals unlock their full potential by delivering modern, professional resumes tailored to today’s job market.
                            With our tools, you can focus on what matters most—taking the next step in your career journey.

</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;
