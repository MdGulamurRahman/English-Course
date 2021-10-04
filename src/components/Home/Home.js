import React from 'react';
import Campus from '../Campus/Campus';
import Courses from '../Courses/Courses';
import Enroll from '../Enroll/Enroll';
import Facility from '../Facility/Facility';
import Header from '../Header/Header';
import Level from '../Level/Level';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Courses></Courses>
            <Level></Level>
            <Campus></Campus>
            <Facility></Facility>
            <Enroll></Enroll>
        </div>
    );
};

export default Home;