import React from 'react';
import {Carousel, Image} from "react-bootstrap";


function MyCarouselSlide(props){
    const carouselItems = props.carouselItems;

    return(
        <Carousel fluid fade>
            {
                carouselItems.map(item =>{
                    return(
                        <Carousel.Item height={item.carouselHeight} interval={item.carouselInterval}>
                            <Image className="d-block w-100 " height={item.carouselImageHeight} src={item.image}/>
                            <Carousel.Caption as={item.captionType} className={`text-${item.captionTextStyle}`} >
                                <strong>{item.caption}</strong>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    )
}

export default MyCarouselSlide;
