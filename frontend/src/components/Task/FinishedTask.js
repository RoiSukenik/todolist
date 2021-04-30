import React, {useEffect} from 'react';
import { useSelector} from "react-redux";

import {Accordion, Button, Card} from "react-bootstrap";

function FinishedTask(props){

    const task = props.task
    const idx = `${props.task.id}`

    const list = useSelector(state => state.history)

    useEffect(()=>{},[list])
    return (
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} varient={"primary"} eventKey={idx}>
                        {task.TaskName}
                    </Accordion.Toggle>
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
export default FinishedTask;
