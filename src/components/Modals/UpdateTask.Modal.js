import {Button, Form, FormGroup, Modal, Spinner} from "react-bootstrap";
import {React, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateTaskByName} from "../../features/taskList/taskListSlice";

function UpdateTaskModal(props){


    const [taskName,setTaskName]=   useState('');
    const [taskDescription,setTaskDescription]=   useState('');
    const [isSaving,setIsSaving]=   useState(false) ;

    const {list} = useSelector((state)=>state.taskList)
    const dispatch = useDispatch();

    const UpdateTaskListItem = ()=>
    {
        setIsSaving(!isSaving)
        const taskToUpdate = {
            'TaskName': taskName,
            'Task': taskDescription
        }
        dispatch(updateTaskByName(taskToUpdate));
        props.handleClose();
        setIsSaving(false)
    }
    return(
        <>
            <Modal show={props.show} onHide={props.handleClose}
                   size="lg"
                   aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title >Add Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <FormGroup as={"Row"} controlId={"task.ControlSelector1"}>
                            <Form.Label>Task Name:</Form.Label>
                            <Form.Control
                                as="select"
                                className="mr-sm-2"
                                onChange={(e)=>{setTaskName(e.target.value)}}
                                >
                                <option>Select Task To Update</option>
                                {list.map((task,idx) =>{
                                    return(
                                       <option value={task.TaskName} key={idx}>{task.TaskName}</option>
                                    )
                                })}
                            </Form.Control>
                        </FormGroup>
                        <FormGroup as={"Row"} controlId={"task.ControlInput2"}>
                            <Form.Label>Task:</Form.Label>
                            <Form.Control as={"textarea"}
                                          placeholder={"Write task description here..."}
                                          onChange={e => setTaskDescription(e.target.value)}/>
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>Close</Button>
                    {isSaving && (<Button variant="primary" onClick={UpdateTaskListItem}><Spinner animation="border" size={"sm"} />Save Changes</Button>)}
                    {!isSaving && (<Button variant="primary" onClick={UpdateTaskListItem}>Save Changes</Button>)}
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UpdateTaskModal;
