import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import img1 from '../../images/c1.jpg'
import img2 from '../../images/c2.jpg'
import img3 from '../../images/c3.jpg'
const Campus = () => {
    return (
        <div className="container mx-auto my-5">
            <div>
                <h1>Our Global <span style={{color: 'tomato'}}>Campus</span></h1>
                <p className="text-secondary">This is one of our best campuses which is very popular all over the world</p>
            </div>
             <CardGroup>
                <Card className="border-0 rounded ">
                <Card.Img variant="top rounded p-4" src={img1} />
                </Card>
                <Card className="mx-3 border-0 rounded">
                <Card.Img variant="top rounded p-4" src={img2} />
                </Card>
                <Card className="border-0 rounded">
                <Card.Img variant="top rounded p-4" src={img3} />
                </Card>
            </CardGroup>
        </div>
    );
};

export default Campus;