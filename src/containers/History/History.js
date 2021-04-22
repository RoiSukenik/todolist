import {React,useState} from 'react';
import Header from "../../components/Header";
import { Col, Container, Row, Tab} from "react-bootstrap";
import Task from "../../components/Task/Task";
import {useSelector} from "react-redux";

function History(props)
{
    const {historyList} = useSelector((state) => state.taskListHistory)
    let headerContent = "Here you can view past tasks";
    return(
        <>
            <Header headerContent={headerContent} NavBarActiveKey={props.location}/>
            <Container fluid className={"border border-dark"}>
                <Row>
                    <Col sm={2}>
                        <h4 className={"text-center"}>Task Name</h4>
                    </Col>
                    <Col sm={10} >
                        <h4 className={"text-center"}>Task Description</h4>
                    </Col>
                </Row>
                <Tab.Container id={"left-tabs"} defaultActiveKey={"first"}>
                    {historyList.map((task,idx) =>{
                        return(
                            <Task task={task} idx={idx}/>
                        )
                    })}
                </Tab.Container>
            </Container>
        </>
    )
}

export default History;
