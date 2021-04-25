import React from 'react';
import Header from "../../components/Header";
import MyCarousel from "../../components/MyCarousel/MyCarouselSlide";
import {carouselItems} from "./CarouselData";
import {Breadcrumb, Button, ButtonGroup, Col, Container, Row} from "react-bootstrap";
import {intro} from "./Intro";

function Home(){
    return(
        <div>
            <Header displayJumbotron={false}/>
            <MyCarousel carouselItems={carouselItems}/>
            <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            <Container fluid>
                <Row>
                    <Col>
                        {intro}
                    </Col>
                </Row>
                <Row className={"justify-content-center"}>
                    <h1 className={"text-center"}>Let's Get Started!</h1>
                </Row>
                <Row className={"justify-content-center"}>
                    <ButtonGroup>
                        <Button variant={"primary"}>
                            Sign Up
                        </Button>
                        <Button variant={"success"}>
                            Sign In
                        </Button>
                    </ButtonGroup>
                </Row>
            </Container>
        </div>


    )
}
export default Home;

