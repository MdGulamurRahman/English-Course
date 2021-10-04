import React from 'react';
import './NotFound.css'
import img from '../../images/not.png'
import { useHistory } from 'react-router';
const NotFound = () => {
    const history = useHistory()
    const homeFoundHandler = ()=>{
        history.push('/home')
    }
    const backFoundHandler = ()=>{
        history.push('/service')
    }
    return (
        <div className="notFound">
            <img src={img} alt="" />
            <button onClick={homeFoundHandler} className="mx-4 button1">Home Page</button>
            <button onClick={backFoundHandler} className="button2">Back</button>
        </div>
    );
};

export default NotFound;