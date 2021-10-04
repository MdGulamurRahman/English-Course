import React from 'react';
import './Service.css'
import {Carousel} from 'react-bootstrap';
import img1 from '../../images/slider1.jpg'
import img2 from '../../images/slider2.jpg'
import img3 from '../../images/slider3.jpg'
import Learns from '../Learns/Learns';
import Public from '../Public/Public';

const CarouselContainer = ()=>{
    return (
        <div className="slider-area">
            <div className="container">
            <Carousel controls={false} fade={true} pause={false}>
            <Carousel.Item className="slider" interval={1000}>
                <img
                className="d-block w-100 mx-auto"
                src={img1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="slider" interval={1000}>
                <img
                className="d-block w-100 mx-auto"
                src={img2}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="slider" interval={1000}>
                <img
                className="d-block w-100 mx-auto"
                src={img3}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
        <div>
            <Learns></Learns>
        </div>
        <div>
            <Public></Public>
        </div>
        </div>
    )
};
export default CarouselContainer;
