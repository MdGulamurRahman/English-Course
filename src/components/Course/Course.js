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
                    <Card.Title>Course: {name}</Card.Title>
                    <Card.Text>Unit: {unit}</Card.Text>
                    <Card.Title>Course Fee: {fee}</Card.Title>
                    <Card.Text>Duration: {duration}</Card.Text>
                    <Card.Text>Hours: {hours}</Card.Text>
                    <Button variant="outline-dark">Course Details</Button>
                </Card.Body>
            </Card>
       </CardGroup>
    );
};

export default Course;