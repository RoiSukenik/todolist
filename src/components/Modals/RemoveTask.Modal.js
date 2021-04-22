import {Button, Form, FormGroup, Modal, Spinner} from "react-bootstrap";
import {React, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {removeTaskByName} from "../../features/taskList/taskListSlice";
import {addToHistory} from "../../features/taskList/taskListHistorySlice";




function RemoveTaskModal(props){


    const [taskName,setTaskName]=   useState('');
    const [taskInfo,setTaskInfo]=   useState('');
    const [isSaving,setIsSaving]=   useState(false) ;

    const {list} = useSelector((state)=>state.taskList)
    const dispatch = useDispatch();

    const RemoveTaskListItem = ()=>
    {
        setIsSaving(!isSaving)
        const nameOfTaskToRemove = {
            'TaskName': taskName,
        }
        const isTaskNameEqual=(taskName1,taskName2)=>
        {
            return taskName1 === taskName2
        }
        const toBeAdded=list.filter(taskToMove =>
            isTaskNameEqual(taskToMove.TaskName,nameOfTaskToRemove.TaskName))
        toBeAdded.forEach((task) => dispatch(addToHistory(task)))

        dispatch(removeTaskByName(nameOfTaskToRemove));
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
                    <Modal.Title >Remove Task</Modal.Title>
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
                                <option>Select Task To Remove</option>
                                {list.map((task,idx) =>{
                                    return(
                                       <option value={task.TaskName} key={idx}>{task.TaskName}</option>
                                    )
                                })}
                            </Form.Control>
                        </FormGroup>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>Close</Button>
                    {isSaving && (<Button variant="primary" onClick={RemoveTaskListItem}><Spinner animation="border" size={"sm"} />Save Changes</Button>)}
                    {!isSaving && (<Button variant="primary" onClick={RemoveTaskListItem}>Save Changes</Button>)}
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default RemoveTaskModal;
