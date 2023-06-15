import React from 'react';
import {Carousel} from "react-bootstrap";

const Slider = () => {
    return (
        <Carousel className='mb-10'>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="src/assets/brandBanner.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100 h-[335px] object-cover"
                    src="src/assets/adidas-banner-articulo-1.png"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-[335px] object-cover"
                    src="src/assets/adidas_men_april_Carousel_Banner_996x350_3_1200x1200.webp"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;