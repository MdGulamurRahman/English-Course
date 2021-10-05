import Button from 'react-bootstrap/Button';
import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import img from '../../images/bok.png'
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <div className="row bg-dark d-flex align-center footer">
                <div className="col-md-4">
                    <h3 className="text-warning">COURSE WEBSITE</h3>
                    <p className="text-light">I tried my best and this is my first router website and,This is a course design website created entirely by me</p>
                    <p className="text-white-50">©️2021.Professional Course.Abrar Fahim, all rights reserved</p>
                </div>
                <div className="col-md-4">
                    <img style={{width: '300px'}} src={img} alt="" />
                </div>
                <div className="col-md-4">
                    <h5 className="text-warning">SUBSCRIBE</h5>
                    <p className="text-white-50">Get latest updates and offers</p>
                    <InputGroup className="mx-auto mb-3 w-50">
                        <FormControl
                        aria-describedby="basic-addon2"
                        />
                        <Button variant="warning" id="button-addon2">
                        <i class="fas fa-greater-than"></i>
                        </Button>
                    </InputGroup>
                   <a href="https://www.facebook.com/abrar.fahim.321"><i class="fab fa-facebook-square"></i></a>
                   <a href="https://www.youtube.com/channel/UC_6uhlpXmT1wpQknmgN7IhQ/videos"><i class="fab fa-youtube px-3"></i></a>
                   <a href="https://www.linkedin.com/in/abrar-fahim-67aa45214/"><i class="fab fa-linkedin"></i></a>
                   <a href="https://twitter.com/033Husam"><i class="fab fa-twitter-square px-3"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;