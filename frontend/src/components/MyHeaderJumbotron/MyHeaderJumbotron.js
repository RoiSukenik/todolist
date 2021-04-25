import React from 'react';
import {Col, Jumbotron, Row} from "react-bootstrap";

function MyHeaderJumbotron(props)
{
    const {headerContent} = props;

    return(
        <>
            <Jumbotron fluid={true}>
                <Row className="justify-content-md-center">
                    <Col >
                        <h2 className={"text-center"}>Roi's Todo List</h2>
                        <h3 className={"text-center"}>{headerContent}</h3>
                    </Col>
                </Row>
            </Jumbotron>
        </>

    )
}
export default MyHeaderJumbotron;
