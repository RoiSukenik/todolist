import React from 'react';
import {Accordion, Breadcrumb, Col, Container, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import Layout from "../../components/layout/Layout";
import FinishedTask from "../../components/Task/FinishedTask";

function FinishedTasks(props)
{
    const {list} = useSelector((state) => state.history)
    let headerContent = "Here you can view past tasks";
    let body=
        <>
            <Breadcrumb>
                <Breadcrumb.Item className={"text-responsive"}><NavLink to={"/"}>Home</NavLink></Breadcrumb.Item>
                <Breadcrumb.Item className={"text-responsive"}><NavLink to={"/tasks"}>Todo List</NavLink></Breadcrumb.Item>
                <Breadcrumb.Item  className={"text-responsive"} active>Finished Task's</Breadcrumb.Item>
            </Breadcrumb>
            <Container fluid className={"border border-dark"}>
                <Accordion defaultActiveKey={"0"}>
                    {list.map((task,idx) =>{
                        return(
                            <Row>
                                <Col>
                                    <FinishedTask task={task} idx={idx}/>
                                </Col>
                            </Row>
                        )
                    })}
                </Accordion>
            </Container>
        </>
    return(
            <Layout headerContent={headerContent} NavBarActiveKey={props.location} body={body}/>
    )
}

export default FinishedTasks;
