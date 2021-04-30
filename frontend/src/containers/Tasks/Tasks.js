import React,{useState} from 'react';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {Accordion, Breadcrumb, Button, Col, Container, Row} from "react-bootstrap";

import Task from "../../components/Task/Task";

import {AddTaskModal} from '../../components/BootstrapModals/index'
import Layout from "../../components/layout/Layout";

function Tasks(props){

    const [showAdd,setShowAdd]= useState(false);

    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = ()=> setShowAdd(true);

    const {list} = useSelector((state) => state.taskList)

    const headerContent ="Welcome to my amazing todo list, Hope it will help you!";

    let body =
        <>
            <Breadcrumb >
                <Breadcrumb.Item className={"text-responsive"}><NavLink to={"/"}>Home</NavLink></Breadcrumb.Item>
                <Breadcrumb.Item className={"text-responsive"} active>Todo List</Breadcrumb.Item>
                <Breadcrumb.Item  className={"text-responsive"} active>Tasks</Breadcrumb.Item>
            </Breadcrumb>
            <center>
                <Button variant={"dark"} onClick={handleShowAdd} size={"lg"} block>Add Task</Button>
            </center>
            <AddTaskModal show={showAdd} handleShow={handleShowAdd} handleClose={handleCloseAdd}/>
            <Container fluid className={"border border-dark"} >
                <Accordion defaultActiveKey={"0"}>
                    {list.map((task,idx) =>{
                        return(
                            <Row>
                                <Col>
                                    <Task task={task} idx={idx}/>
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
export default Tasks;
