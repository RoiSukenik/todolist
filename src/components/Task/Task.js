import {React} from 'react'
import {Card, Col, Nav, NavItem, NavLink, Row, Tab} from "react-bootstrap";

function Task(props){
    const task = props.task;
    return(
        <Row>
            <Col sm={2}>
                <Nav variant={"pills"} className={"flex-column"}>
                    <NavItem>
                        <NavLink eventKey={props.idx}>
                            {task.TaskName}
                        </NavLink>
                    </NavItem>
                </Nav>
            </Col>
            <Col sm={10}>
                <Tab.Content>
                    <Tab.Pane eventKey={props.idx}>
                        <Card bg={"light"} border={"dark"} key={props.idx}>
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
}
export default Task;
