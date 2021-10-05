import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Courses.css'
import "animate.css"
const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(()=>{
        fetch('course.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className="container">
            <div className="offer-text">
               <h1 className="animate__animated animate__heartBeat"><span style={{color: 'tomato'}}>Courses</span> We Offer</h1>
                <p>We are the only one in the whole world giving you the world biggest english course at such a low price</p>
            </div>
            <Row xs={1} md={3} className="m-5 g-4">
                {
                    courses.map(course => <Course key={course.name} course={course}></Course>)
                }
            </Row>
        </div>
    );
};

export default Courses;