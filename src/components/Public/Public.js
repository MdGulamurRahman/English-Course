import React from 'react';
import './Public.css'
import sp from '../../images/sp.jpg'
import { Accordion } from 'react-bootstrap';
const Public = () => {
    return (
        <div className="container my-5">
            <div className="m-5">
                <h1 style={{color: 'rgb(26, 41, 53)'}}>About Our Presentation & <span style={{color:'tomato'}}>Public Speaking</span></h1>
            </div>
            <div className="row">
                <div className="col-md-6 img-container">
                    <img src={sp} alt="" />
                </div>
                <div className="col-md-6">
                <Accordion className="my-5">
                    <Accordion.Item className="item" eventKey="0">
                        <Accordion.Header>English Grammar Crash Course</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className="my-3 item" eventKey="1">
                        <Accordion.Header>Presentation & Public Speaking</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className="item" eventKey="2">
                        <Accordion.Header>Accent Training</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className="my-3 item" eventKey="3">
                        <Accordion.Header>Business English</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className="item" eventKey="4">
                        <Accordion.Header>Certificate III in EAL</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Public;