import React from 'react';
import Header from "../../components/Header";
import {Accordion, Col, Container, Row} from "react-bootstrap";
import Task from "../../components/Task/Task";
import {useSelector} from "react-redux";

function History(props)
{
    const {historyList} = useSelector((state) => state.removedList)
    let headerContent = "Here you can view past tasks";
    return(
        <>
            <Header headerContent={headerContent} NavBarActiveKey={props.location}/>
            <Container fluid className={"border border-dark"}>
                <div className={" d-none d-md-block "}>
                    <Row >
                        <Col sm={3}>
                            <h4 className={"text-center justify-content-center "}>Task Name</h4>
                        </Col>
                        <Col sm={9} >
                            <h4 className={"text-center justify-content-center"}>Task Description</h4>
                        </Col>
                    </Row>
                </div>
                <Accordion defaultActiveKey={0}>
                    {historyList.map((task,idx) =>{
                        return(
                            <Task task={task} idx={idx}/>
                        )
                    })}
                </Accordion>
            </Container>
        </>
    )
}

export default History;
