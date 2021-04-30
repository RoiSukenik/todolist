import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Accordion, Button, ButtonGroup, Card} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';

import {UpdateTaskModal} from "../BootstrapModals";
import {delById} from "../../features/taskList/taskListSlice";
import {addTrash} from "../../features/taskList/trashSlice";
import {addHistory} from "../../features/taskList/historySlice";


function Task(props){

    const task = props.task
    const idx = `${props.task.id}`

    const list = useSelector(state => state.tasklist)
    const dispatch = useDispatch();

    const [showUpdate,setShowUpdate]= useState(false);

    const handleCloseUpdate = () => setShowUpdate(false);
    const handleShowUpdate = ()=> setShowUpdate(true);

    const RemoveTaskListItem = ()=> {
        dispatch(addTrash(task));
        dispatch(delById(task.id));
    }
    const moveToHistory =()=> {
        dispatch(addHistory(task));
        dispatch(delById(task.id));
    }

    useEffect(()=>{},[list])
    return(
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} varient={"primary"} eventKey={idx}>
                        {task.TaskName}
                    </Accordion.Toggle>
                    <ButtonGroup className={"float-right"}>
                        <Button variant={"success"}>
                            <FontAwesomeIcon icon={faCheck} onClick={moveToHistory}/>
                        </Button>
                        <Button variant={"primary"} onClick={handleShowUpdate}>
                            <FontAwesomeIcon icon={faEdit}/>
                        </Button>
                        <Button variant={"danger"} onClick={() =>RemoveTaskListItem(task)}>
                            <FontAwesomeIcon icon={faTrash}/>
                        </Button>
                    </ButtonGroup>
                    <UpdateTaskModal
                        task={task}
                        show={showUpdate}
                        handleShow={handleCloseUpdate}
                        handleClose={handleCloseUpdate}/>
                </Card.Header>
                <Accordion.Collapse eventKey={idx}>
                    <Card.Body>
                        <Card.Title>
                            {task.TaskName}
                        </Card.Title>
                        <Card.Text>
                            {task.Task}
                        </Card.Text>
                        <Card.Footer>
                            <blockquote>
                                Added By {task.Author}
                            </blockquote>
                        </Card.Footer>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
    )
}
export default Task;
