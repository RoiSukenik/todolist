import {React} from 'react'
import {Col, Jumbotron, Row} from 'react-bootstrap'
import MyTopNavbar from "../TopNavBar/MyTopNavBar";

function Header() {
    return (
        <div>
            <MyTopNavbar/>
            <Jumbotron fluid={true}>
                <Row className="justify-content-md-center">
                    <Col xs={{offset:3}} md={{offset:4}} md={{offset:5}}>
                        <h2>Roi's Todo List</h2>
                    </Col>
                </Row>
            </Jumbotron>
        </div>

    )
}
export default Header;
