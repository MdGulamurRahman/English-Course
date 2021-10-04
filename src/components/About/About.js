import Button from 'react-bootstrap/Button';
import React from 'react';
import { Form } from 'react-bootstrap';

const About = () => {
    return (
        <div className="container">
            <div className="mb-5">
                <h1 className="text-dark fw-bold">About The Course <i class="fas fa-user-graduate"></i></h1>
                <p className="text-secondary">Do you want to speak better English? This course will help you reach that goal. Speak English Professionally: In person, Online and On the Phone will boost your English speaking skills. In this 5 week course, you will learn how to identify and make a strong personal introduction. You will develop and demonstrate the speaking skills for group discussions: how to agree or disagree, how to clarify, restate and summarize. You will review and practice how to give information and respond to requests on the phone. You will study and role play effective interviewing. You will prepare and give a sales “pitch”, introducing a product or service. Throughout the course, you will adjust how you speak English and you will become more fluent and accurate when you speak. You will demonstrate culturally appropriate body language and tone. As you work through the course, you will complete self- and peer-evaluations. Through a combination of lectures, comprehension and vocabulary quizzes, practice and performance, you’ll gain the skills and confidence to communicate well in English, anywhere in the world. By the end of this course you will: • Change how you speak English • Improve your pronunciation and fluency • Increase your English vocabulary • Identify how culture influences your speech • Use culture to help you speak correctly • Demonstrate the best body language for different cultural settings • Know statements, questions and responses for different settings and situations
               </p>
            </div>
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

export default About;