import {React} from 'react'
import {Col, Jumbotron, Row} from 'react-bootstrap'
import MyTopNavbar from "../TopNavBar/MyTopNavBar";

function Header(props) {
    return (
        <div>
            <MyTopNavbar NavBarActiveKey={props.location}/>
            <Jumbotron fluid={true}>
                <Row className="justify-content-md-center">
                    <Col >
                        <h2 className={"text-center"}>Roi's Todo List</h2>
                        <h3 className={"text-center"}>{props.headerContent}</h3>
                    </Col>
                </Row>
            </Jumbotron>
        </div>

    )
}
export default Header;
