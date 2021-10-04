import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import user1 from '../../images/user-1.png'
import user2 from '../../images/user-2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './Level.css'

const Level = () => {
    return (
        <div className="container">
            <div>
            <h1>What Our Student Says</h1>
            <p className="text-secondary">Our students are informed about our course and our campus</p>
            </div>
            <Row xs={1} md={2} className="g-4">
                <Col>
                <Card className="card-container">
                    <Card.Img variant="top w-25 p-4 mx-auto" src={user1} />
                    <Card.Body>
                    <Card.Title>David Bayer</Card.Title>
                   
                    <Card.Title className="star-icon">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                          <i class="far fa-star"></i>
                        </Card.Title>
                    
                    <Card.Text className="text-secondary">
                    We’re very lucky to have so many happy students here at BEET, hearing about their time with us makes our job even more worthwhile. Here’s what some of them have to say!
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className="card-container">
                    <Card.Img variant="top w-25 p-4 mx-auto" src={user2} />
                    <Card.Body>
                    <Card.Title>Christine Berkley</Card.Title>
                    <Card.Title className="star-icon">
                    <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <i class="fas fa-star-half-alt"></i>
                    </Card.Title>
                    <Card.Text className="text-secondary">
                    “I really enjoyed studying at BEET,And I loved the time here, but I stayed here just for two weeks, it would be nice to stay for a longer period. I would recommend this school to anyone.”
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            
            </Row>
        </div>
    );
};

export default Level;