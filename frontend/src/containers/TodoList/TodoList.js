import React,{useState} from 'react';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {Accordion, Breadcrumb, Button, Col, Container, Row} from "react-bootstrap";

import Header from "../../components/Header";
import Task from "../../components/Task/Task";

import {AddTaskModal} from '../../components/Modals/index'

function TodoList(props){

    const [showAdd,setShowAdd]= useState(false);

    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = ()=> setShowAdd(true);

    const {list} = useSelector((state) => state.taskList)

    const headerContent ="Welcome to my amazing todo list, Hope it will help you!";
    return(
        <>
            <Header headerContent={headerContent} NavBarActiveKey={props.location }/>
            <Breadcrumb>
                <Breadcrumb.Item><NavLink to={"/"}>Home</NavLink></Breadcrumb.Item>
                <Breadcrumb.Item active>Task List</Breadcrumb.Item>
            </Breadcrumb>
            <Button variant={"dark"} onClick={handleShowAdd}>Add Task</Button>
            <AddTaskModal show={showAdd} handleShow={handleShowAdd} handleClose={handleCloseAdd}/>
            <Container fluid className={"border border-dark"} >
                <div className={"d-none d-md-block"}>
                    <Row >
                        <Col sm={3}>
                            <h4 className={"text-center"}>Task Name</h4>
                        </Col>
                        <Col sm={9} >
                            <h4 className={"text-center"}>Task Description</h4>
                        </Col>
                    </Row>
                </div>
                <Accordion defaultActiveKey={"0"}>
                    {list.map((task,idx) =>{
                        return(
                            <Task task={task} idx={idx}/>
                        )
                    })}
                </Accordion>
            </Container>
        </>
    )
}
export default TodoList;
