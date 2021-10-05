import Button from 'react-bootstrap/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact">
            <div>
           <h1 style={{color:'rgb(26, 41, 53)'}}>Online Form Fill-up <span style={{color:'tomato'}}>Professional</span> Course <i class="fas fa-graduation-cap"></i></h1>
           </div>
            <Form className="p-5 my-5 rounded">
            <Form.Group className="mx-auto mb-3 w-50" controlId="formGroupEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="First Name" placeholder="First Name" />
            </Form.Group>
            <Form.Group className="mx-auto mb-3 w-50" controlId="formGroupPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="Last Name" placeholder="Last Name" />
            </Form.Group>
            <Form.Group className="mx-auto mb-3 w-50" controlId="formGroupPassword">
                <Form.Label>Student Roll No.</Form.Label>
                <Form.Control type="Roll No" placeholder="Roll No" />
            </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Contact;