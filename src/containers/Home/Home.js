import {React,useState} from 'react';

import Header from "../../components/Header";
import {Button, ButtonGroup, Card, Col, Nav, NavItem, NavLink, Row, Tab} from "react-bootstrap";
import {AddTaskModal, RemoveTaskModal, UpdateTaskModal} from '../../components/Modals/index'
import {useSelector} from "react-redux";

function Home(){

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

    return(
        <>
            <Header/>
            <ButtonGroup className={"align-self-md-auto align-middle d-flex justify-content-center"}>
                <Button variant={"dark"} onClick={handleShowAdd}>Add Task</Button>
                <Button variant={"dark"} onClick={handleShowUpdate}>Update Task</Button>
                <Button variant={"dark"} onClick={handleShowRemove}>Remove Task</Button>
            </ButtonGroup>
            <AddTaskModal show={showAdd} handleShow={handleShowAdd} handleClose={handleCloseAdd}/>
            <UpdateTaskModal show={showUpdate} handleShow={handleCloseUpdate} handleClose={handleCloseUpdate}/>
            <RemoveTaskModal show={showRemove} handleShow={handleShowRemove} handleClose={handleCloseRemove}/>
            <Row>
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
                <Row>
                    <Col sm={2}>
                        <Nav variant={"pills"} className={"flex-column"}>
                            <NavItem>
                                <NavLink eventKey={idx}>
                                    {task.TaskName}
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col sm={10}>
                        <Tab.Content>
                            <Tab.Pane eventKey={idx}>
                                <Card bg={"light"} border={"dark"} key={idx}>
                                    <Card.Body>
                                        <Card.Title>
                                            {task.TaskName}
                                        </Card.Title>
                                        <Card.Text >
                                            {task.Task}

                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className={"small"}>
                                        <blockquote>By {task.Author}</blockquote>
                                    </Card.Footer>
                                </Card>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
                )
            })}
            </Tab.Container>
        </>
    )
}
export default Home;
