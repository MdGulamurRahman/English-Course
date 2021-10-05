import React from 'react';
import './Header.css'
import "animate.css"
import { useHistory } from 'react-router';
const Header = () => {
    const history = useHistory()
    const visitHandler = ()=>{
        history.push('/service')
    }
    return (
        <div className="header-container">
            <div className="title">
                <h1 className="animate__animated animate__backInLeft"><span className="world">World's</span> Biggest English Course</h1>
                <p className="animate__animated animate__backInRight">The Essential English Centre offers a range of facilities which includes spacious classrooms, a student room and a computer and study area – the perfect setting in which to learn and achieve.  What’s more, the school is set within a building of special architectural and historic interest on the prestigious Portland Street in the heart of Manchester city centre.</p>
                <button onClick={visitHandler}>Visit Us To Know More</button>
            </div>
        </div>
    );
};

export default Header;