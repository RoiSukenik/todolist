import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Accordion, Button, ButtonGroup, Card} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';

import {delById} from "../../features/taskList/trashSlice";


function TrashTask(props){

    const task = props.task
    const idx = `${props.task.id}`

    console.log(props)
    const list = useSelector(state => state.trash)
    const dispatch = useDispatch();

    const RemoveTaskListItem = ()=> {
        dispatch(delById(task.id));
    }
    useEffect(()=>{},[list])
    return (
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} varient={"primary"} eventKey={idx}>
                        {task.TaskName}
                    </Accordion.Toggle>
                    <ButtonGroup className={"float-right"}>
                        <Button variant={"danger"} onClick={() =>RemoveTaskListItem(task)}>
                            <FontAwesomeIcon icon={faTrash}/>
                        </Button>
                    </ButtonGroup>
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
export default TrashTask;
