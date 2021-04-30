import React from 'react';
import {Accordion, Breadcrumb, Col, Container, Row} from "react-bootstrap";

import {useSelector} from "react-redux";
import TrashTask from "../../components/Task/TrashTask";
import {NavLink} from "react-router-dom";
import Layout from "../../components/layout/Layout";
function Trash(props)
{
    const {list} = useSelector((state) => state.trash)
    let headerContent = "Here you can view past tasks";
    let body = <>
                <Breadcrumb>
                    <Breadcrumb.Item><NavLink to={"/"} className={"text-responsive"}>Home</NavLink></Breadcrumb.Item>
                    <Breadcrumb.Item><NavLink to={"/tasks"} className={"text-responsive"}>Todo List</NavLink></Breadcrumb.Item>
                    <Breadcrumb.Item active className={"text-responsive"}>Trash</Breadcrumb.Item>
                </Breadcrumb>
                <Container fluid className={"border border-dark"}>
                    <Accordion defaultActiveKey={"0"}>
                        {list.map((task,idx) =>{
                            return(
                                <Row>
                                    <Col>
                                        <TrashTask task={task} idx={idx}/>
                                    </Col>
                                </Row>
                               )})}
                    </Accordion>
                </Container>
    </>
    return(
        <Layout headerContent={headerContent} NavBarActiveKey={props.location} body={body}/>
    )
}

export default Trash;
