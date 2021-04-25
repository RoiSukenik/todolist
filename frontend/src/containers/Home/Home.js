import {React} from 'react'
import Header from "../../components/Header";
import {Carousel, Container, Image} from "react-bootstrap";


function Home(){
    return(
        <>
            <Header/>
            <Carousel fade={true}>
                <Carousel.Item interval={5000}>
                        <Carousel.Caption>
                            <h4>Add Amazing Styled Todos!</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                <Carousel.Item interval={5000}>
                        <Carousel.Caption>
                            <h4>Add Amazing Styled Todos!</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                <Carousel.Item interval={5000}>
                        <Carousel.Caption>
                            <h4>Add Amazing Styled Todos!</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
            </Carousel>
        </>
    )
}
export default Home;
