import {React} from 'react'
import {Col, Jumbotron, Row} from 'react-bootstrap'
import MyTopNavbar from "../TopNavBar/MyTopNavBar";

function Header() {
    return (
        <div>
            <MyTopNavbar/>
            <Jumbotron fluid={true}>
                <Row className="justify-content-md-center">
                    <Col >
                        <h2 className={"text-center"}>Roi's Todo List</h2>
                        <h3 className={"text-center"}>Welcome to my amazing todo list, Hope it will help you!</h3>
                    </Col>
                </Row>
            </Jumbotron>
        </div>

    )
}
export default Header;
