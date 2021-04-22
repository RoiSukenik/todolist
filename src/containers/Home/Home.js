import {React,useState} from 'react';

import Header from "../../components/Header";
import {Button, ButtonGroup, Card, Col, Container, Nav, NavItem, NavLink, Row, Tab} from "react-bootstrap";
import {AddTaskModal, RemoveTaskModal, UpdateTaskModal} from '../../components/Modals/index'
import {useSelector} from "react-redux";
import Task from "../../components/Task/Task";

function Home(props){

    const [showAdd,setShowAdd]= useState(false);
    const [showUpdate,setShowUpdate]= useState(false);
    const [showRemove,setShowRemove]= useState(false);

    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = ()=> setShowAdd(true);

    const handleCloseUpdate = () => setShowUpdate(false);
    const handleShowUpdate = ()=> setShowUpdate(true);

    const handleCloseRemove = () => setShowRemove(false);
    const handleShowRemove = ()=> setShowRemove(true);

    const {list} = useSelector((state) => state.taskList)

    const headerContent ="Welcome to my amazing todo list, Hope it will help you!";
    return(
        <>
            <Header headerContent={headerContent} NavBarActiveKey={props.location}/>
            <ButtonGroup className={"align-self-md-auto align-middle d-flex justify-content-center"}>
                <Button variant={"dark"} onClick={handleShowAdd}>Add Task</Button>
                <Button variant={"dark"} onClick={handleShowUpdate}>Update Task</Button>
                <Button variant={"dark"} onClick={handleShowRemove}>Remove Task</Button>
            </ButtonGroup>
            <AddTaskModal show={showAdd} handleShow={handleShowAdd} handleClose={handleCloseAdd}/>
            <UpdateTaskModal show={showUpdate} handleShow={handleCloseUpdate} handleClose={handleCloseUpdate}/>
            <RemoveTaskModal show={showRemove} handleShow={handleShowRemove} handleClose={handleCloseRemove}/>
            <Container fluid className={"border border-dark"}>
                <Row >
                    <Col sm={2}>
                        <h4 className={"text-center"}>Task Name</h4>
                    </Col>
                    <Col sm={10} >
                        <h4 className={"text-center"}>Task Description</h4>
                    </Col>
                </Row>
                <Tab.Container id={"left-tabs"} defaultActiveKey={"first"}>
                    {list.map((task,idx) =>{
                        return(
                            <Task task={task} idx={idx}/>
                        )
                    })}
                </Tab.Container>
            </Container>
        </>
    )
}
export default Home;
