import {React,useState} from 'react';

import Header from "../../components/Header";
import {Button, ButtonGroup, Card, Col, Container, Form, FormGroup, Modal} from "react-bootstrap";


function Home(){

    const [show,setShow]= useState(false);

    const handleClose = () => setShow(false);
    const handleShow = ()=> setShow(true);

    return(
        <>
            <Header/>
            <ButtonGroup className={"align-self-md-auto align-middle d-flex justify-content-center"}>
                <Button variant={"dark"} onClick={handleShow}>Add Task</Button>
                <Button variant={"dark"}>Update Task</Button>
                <Button variant={"dark"}>Remove Task</Button>
            </ButtonGroup>

            <Modal show={show} onHide={handleClose}
                   size="lg"
                   aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title >Add new task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <FormGroup as={"Row"} controlId={"task.ControlInput1"}>
                            <Form.Label>Full Name:</Form.Label>
                            <Form.Control type={"text"} placeholder={"Full Name"}/>
                        </FormGroup>
                        <FormGroup as={"Row"} controlId={"task.ControlInput1"}>
                            <Form.Label>Task Name:</Form.Label>
                            <Form.Control type={"text"} placeholder={"Task Name"}/>
                        </FormGroup>
                        <FormGroup as={"Row"} controlId={"task.ControlInput2"}>
                            <Form.Label>Task:</Form.Label>
                            <Form.Control as={"textarea"} placeholder={"Write task here..."}/>
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleClose}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}
export default Home;
