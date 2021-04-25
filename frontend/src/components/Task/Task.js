import {React, useState} from 'react'
import {Accordion, Button, ButtonGroup, Card} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'


function Task(props){
    const task = props.task
    const idx = `${props.idx}`
    const [show,setShow] = useState("Hide");

    const toggleShowText= ()=>
    {
        if(show === "Show" ) setShow("Hide") ;
        else setShow("Show");
    }
    return(
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} eventKey={idx} onClick={toggleShowText}>
                        {show}
                    </Accordion.Toggle>
                    <ButtonGroup className={"float-right"}>
                        <Button variant={"success"}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </Button>
                        <Button variant={"primary"}>
                            <FontAwesomeIcon icon={faEdit}/>
                        </Button>
                        <Button variant={"danger"}>
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
export default Task;
