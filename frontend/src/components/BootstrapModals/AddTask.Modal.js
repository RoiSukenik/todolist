import {Button, Form, FormGroup, Modal, Spinner} from "react-bootstrap";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addTask} from "../../features/taskList/taskListSlice";


function AddTaskModal(props){

    const [id,setId]=                               useState(0)
    const [fullName,setFullName]=                   useState('');
    const [taskName,setTaskName]=                   useState('');
    const [taskDescription,setTaskDescription]=     useState('');
    const [isSaving,setIsSaving] =                  useState(false) ;


    const dispatch = useDispatch();
    const clearState = ()=>{
        setFullName('');
        setTaskName('');
        setTaskDescription('');
        setId(id+1);
    }
    const addToTaskList = ()=>
    {
        setIsSaving(!isSaving)
        const newTask=
            {
                'id':id,
                'Author': fullName,
                'TaskName': taskName,
                'Task':taskDescription
            }
            clearState();
        dispatch(addTask(newTask));
        props.handleClose();
        setIsSaving(false)
    }
    const handleSubmit = () => {
        addToTaskList();
    };
    return(
        <>
            <Modal show={props.show}
                   onHide={props.handleClose}
                   size="xl"
                   aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title >Add Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <FormGroup
                            as={"Row"}
                            controlId={"task.ControlInput1"}
                            >
                            <Form.Label>Full Name:</Form.Label>
                            <Form.Control type={"text"}
                                          placeholder={"Full Name"}
                                          onChange={e => setFullName(e.target.value)}/>
                        </FormGroup>
                        <FormGroup as={"Row"} controlId={"task.ControlInput1"}>
                            <Form.Label>Task Name:</Form.Label>
                            <Form.Control
                                          type={"text"}
                                          placeholder={"Task Name"}
                                          onChange={e => setTaskName(e.target.value)} />
                        </FormGroup>
                        <FormGroup as={"Row"} controlId={"task.ControlInput2"}>
                            <Form.Label>Task:</Form.Label>
                            <Form.Control
                                          as={"textarea"}
                                          placeholder={"Write task description here..."}
                                          onChange={e => setTaskDescription(e.target.value)} />
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>Close</Button>
                    {isSaving && (<Button   variant="primary"  onClick={handleSubmit}><Spinner animation="border" size={"sm"} />Save Changes</Button>)}
                    {!isSaving && (<Button  variant="primary" onClick={handleSubmit} >Save Changes</Button>)}
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddTaskModal;
