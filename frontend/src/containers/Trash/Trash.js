import React from 'react';
import Header from "../../components/Header";
import {Accordion, Breadcrumb, Col, Container, Row} from "react-bootstrap";

import {useSelector} from "react-redux";
import TrashTask from "../../components/Task/TrashTask";
import {NavLink} from "react-router-dom";
function Trash(props)
{
    const {list} = useSelector((state) => state.trash)
    let headerContent = "Here you can view past tasks";
    return(
        <>
            <Header headerContent={headerContent} NavBarActiveKey={props.location}/>
            <Breadcrumb>
                <Breadcrumb.Item><NavLink to={"/"}>Home</NavLink></Breadcrumb.Item>
                <Breadcrumb.Item active>Trash</Breadcrumb.Item>
            </Breadcrumb>
            <Container fluid className={"border border-dark"}>
                <div className={" d-none d-md-block "}>
                    <Row >
                        <Col sm={3}>
                            <h4 className={"text-center justify-content-center "}>Task Name</h4>
                        </Col>
                        <Col sm={9} >
                            <h4 className={"text-center justify-content-center"}>Task Description</h4>
                        </Col>
                    </Row>
                </div>
                <Accordion defaultActiveKey={"0"}>
                    {list.map((task,idx) =>{return(<TrashTask task={task} idx={idx}/>)})}
                </Accordion>
            </Container>
        </>
    )
}

export default Trash;
