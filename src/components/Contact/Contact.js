import Button from 'react-bootstrap/Button';
import React from 'react';
import { Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <div>
           <h1 className="text-danger">Online Form Fill-up Professional Course <i class="fas fa-graduation-cap"></i></h1>
           </div>
            <Form className="bg-info my-5 p-5 rounded">
            <Form.Group className="mb-3 mx-auto w-50" controlId="formGroupEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="First Name" placeholder="First Name" />
            </Form.Group>
            <Form.Group className="mb-3 mx-auto w-50" controlId="formGroupPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="Last Name" placeholder="Last Name" />
            </Form.Group>
            <Form.Group className="mb-3 mx-auto w-50" controlId="formGroupPassword">
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