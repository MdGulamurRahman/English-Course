import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Learn.css'
const Learn = (props) => {
    const {img, name, fee, hours} = props.learn;
    return (
       
            <CardGroup className=" mt-5 mx-auto rounded" style={{ width: '18rem',}}>
            <Card className="card-bg">
                <Card.Img variant="top p-2 rounded h-50 mx-auto" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <div className="d-flex justify-content-around align-center mt-5">
                    <Card.Text className="fw-bold">
                        {fee}
                    </Card.Text>
                    <Card.Text className="text-danger">
                        {hours}
                    </Card.Text>
                    </div>
                </Card.Body>
                </Card>
            </CardGroup>
     
    );
};

export default Learn;