import React from 'react';
import { useHistory } from 'react-router';
import './Enroll.css'
const Enroll = () => {
    const history = useHistory()
    const aboutHandler = ()=>{
        history.push('/about')
    }
    return (
        <div className="container my-5">
            <div className="enroll">
                <h1 style={{color: 'rgb(26, 41, 53)'}}>Enroll For Our Various Online Courses <br />
                Anywhere From The World</h1>
                <p className="text-secondary">This is one of our best campuses which is very popular all over the world</p>
                <button onClick={aboutHandler}>ABOUT US</button>
            </div>
        </div>
    );
};

export default Enroll;