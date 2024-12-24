import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { API_URL, doApiGet, doApiMethod } from '../services/apiService';
import { addIfShowNav, addIsAdmin, addName } from '../featuers/myDetailsSlice';

const HomeClient = () => {
    const myName = useSelector(state => state.myDetailsSlice.name);
    const IsAdmin = useSelector(state => state.myDetailsSlice.isAdmin);
    const nav = useNavigate();
    const [myInfo, setmyInfo] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addIfShowNav({ ifShowNav: true }));
        console.log(myName);
        
        doApi()
    }, []);

    const doApi = async () => {
        let url = API_URL + "/users/myInfo";
        try {
            let data = await doApiGet(url);
            setmyInfo(data.data);
            dispatch(addName({ name: data.data.FirstName }));
            if (data.data.role == "admin") {
                dispatch(addIsAdmin({ isAdmin: true }));
            }
        } catch (error) {
            console.log(error);
        }
    }

    const toUpload = () => {
        nav("/upload");
    }

    const toForm = () => {
        nav("/form");
    }

    return (
        <div className="container text-center" style={{ height: '100vh', padding: '20px', }}>
            <h1 className='mb-2'>Welcome {myName} {myInfo.LastName}</h1>
            <div className='w-50 d-flex justify-content-around m-auto mt-5'>
                <button onClick={toUpload} className='btn btn-success'>I have CV to upgrate</button>
                <button onClick={toForm} className='btn btn-success'>I want to do new CV</button>
            </div>
        </div>
    );
};

export default HomeClient;
