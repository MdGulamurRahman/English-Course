import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Learn from '../Learn/Learn';

const Learns = () => {
    const [learns, setLearns] = useState([])
    useEffect(()=>{
        fetch('service.JSON')
        .then(res => res.json())
        .then(data => setLearns(data))
    },[])
    return (
        <div className="container mx-auto">
            <div><h1>Language <span style={{color:'tomato'}}>Learning</span></h1></div>
            <Row xs={1} md={3} className="g-2">
                {
                    learns.map(learn => <Learn key={learn.name} learn={learn}></Learn>)
                }
            </Row>
        </div>
    );
};

export default Learns;