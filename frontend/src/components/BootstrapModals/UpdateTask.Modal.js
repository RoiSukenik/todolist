import {Button, Form, FormGroup, Modal, Spinner} from "react-bootstrap";
import React,{useState} from "react";
import {useDispatch} from "react-redux";
import {updateByName} from "../../features/taskList/taskListSlice";

function UpdateTaskModal(props){

    const task = props.task;

    const [taskDescription,setTaskDescription]=   useState(task.Task);
    const [isSaving,setIsSaving]=   useState(false) ;

    const dispatch = useDispatch();

    const UpdateTaskListItem = ()=>
    {
        setIsSaving(!isSaving)
        const taskToUpdate = {
            'TaskName': task.TaskName,
            'Task': taskDescription
        }
        dispatch(updateByName(taskToUpdate));
        props.handleClose();
        setIsSaving(false)
    }
    return(
            <Modal show={props.show} onHide={props.handleClose}
                   size="lg"
                   aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title >Update Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <FormGroup as={"Row"} controlId={"task.ControlInput2"}>
                            <Form.Label>Task:</Form.Label>
                            <Form.Control
                                as={"textarea"}
                                onChange={e => setTaskDescription(e.target.value)}>
                                {task.Task}
                            </Form.Control>
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>Close</Button>
                    {isSaving && (<Button variant="primary"
                                          onClick={UpdateTaskListItem}>
                                        <Spinner animation="border" size={"sm"}/>Save Changes</Button>)}
                    {!isSaving && (<Button variant="primary"
                                              onClick={UpdateTaskListItem}>Save Changes</Button>)}
                </Modal.Footer>
            </Modal>
    )
}

export default UpdateTaskModal;
