import Button from 'react-bootstrap/Button';
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Course = (props) => {
    const {img, name,unit, fee, duration, hours} = props.course;
    return (
        <CardGroup>
            <Card className="p-3" style={{ width: '18rem', backgroundColor: '#fff3f3'}}>
                <Card.Img variant="top h-50 rounded" src={img} />
                <Card.Body>
                    <Card.Title><span style={{color: 'rgb(26, 41, 53)'}}>{name}</span></Card.Title>
                    <Card.Text><span className="text-success">{unit}</span></Card.Text>
                    <Card.Title>Course Fee: <span style={{color:'tomato'}}>{fee}</span></Card.Title>
                    <Card.Text><span className="text-secondary">Duration: {duration}</span></Card.Text>
                    <Card.Text>Hours: <span style={{color: 'red'}}>{hours}</span></Card.Text>
                    <Button variant="outline-dark">Course Details</Button>
                </Card.Body>
            </Card>
       </CardGroup>
    );
};

export default Course;