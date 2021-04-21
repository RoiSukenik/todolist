import {React} from 'react';
import { Nav, Navbar, NavItem} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard ,faHome,faTasks ,faCog } from '@fortawesome/free-solid-svg-icons'




function MyTopNavbar(){
    return(
        <Navbar  sticky={true} collapseOnSelect expand={"md"} bg={"dark"} variant={"dark"} >
            <Navbar.Brand href="/">
                <h2><FontAwesomeIcon icon={faClipboard} /> Roi's Todo List</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav variant="pills" className="mr-auto"  defaultActiveKey={"/"}>
                    <NavItem>
                        <Nav.Link href="/" ><h6><FontAwesomeIcon icon={faHome}/> Home</h6></Nav.Link>
                    </NavItem>
                    <NavItem>
                        <Nav.Link href="/addTodo"><h6><FontAwesomeIcon icon={faTasks}/> Finished Todo's</h6></Nav.Link>
                    </NavItem>
                    <NavItem>
                        <Nav.Link href={"/settings"}><h6><FontAwesomeIcon icon={faCog}/> Settings</h6></Nav.Link>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyTopNavbar;
