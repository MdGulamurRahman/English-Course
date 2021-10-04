import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import img1 from '../../images/p1.jpg'
import img2 from '../../images/p2.jpg'
import img3 from '../../images/p3.jpg'

const Facility = () => {
    return (
        <div className="container mx-auto my-5">
            <div>
                <h1>Our Facilities</h1>
                <p className="text-secondary">Careers offices provide counselling and guidance to students who are unsure</p>
            </div>
            <CardGroup>
                <Card className="rounded border-0 ">
                <Card.Img variant="top rounded p-4" src={img1} />
                <Card.Body>
                <Card.Title>Children Class Room</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
                </Card>
                <Card className="mx-3 rounded border-0">
                <Card.Img variant="top rounded p-4" src={img2} />
                <Card.Body>
                <Card.Title>Largest Play Ground</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
                </Card>
                <Card className="rounded border-0">
                <Card.Img variant="top rounded p-4" src={img3} />
                <Card.Body>
                <Card.Title>World Class Library</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Facility;