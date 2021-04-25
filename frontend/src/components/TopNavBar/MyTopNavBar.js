import {React} from 'react';
import {Nav, Navbar, NavDropdown, NavItem} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClipboard, faHome, faTasks, faCog, faTrash, faList, faSign} from '@fortawesome/free-solid-svg-icons'
import { NavLink} from "react-router-dom";




function MyTopNavbar(props){

    return(
        <Navbar sticky={true} collapseOnSelect expand={"md"} bg={"dark"} variant={"dark"}  >
            <Navbar.Brand as={NavLink} to={"/"}>
                    <h2><FontAwesomeIcon icon={faClipboard} /> Roi's Todo List</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav variant="pills" className="container-fluid" defaultActiveKey={props.NavBarActiveKey}>
                    <NavItem>
                        <NavLink className={"nav-link"} to="/home" ><h6><FontAwesomeIcon icon={faHome}/> Home</h6></NavLink>
                    </NavItem>
                    <NavDropdown className={"dropdown-item-text text-center -bold"} title={"Todo List"} id={"nav-dropdown-dark"}>
                        <NavDropdown.Item>
                                <NavLink to="/todolist" ><h6><FontAwesomeIcon icon={faList}/> Todo List</h6></NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                                <NavLink to="/history"><h6><FontAwesomeIcon icon={faTasks}/> Finished Todo's</h6></NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                                <NavLink to="/trash"><h6><FontAwesomeIcon icon={faTrash}/> Trash</h6></NavLink>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavItem>
                        <NavLink className={"nav-link"} to={"/settings"}><h6><FontAwesomeIcon icon={faCog}/> Settings</h6></NavLink>
                    </NavItem>
                    <Nav.Item className={"ml-auto"}>
                        <NavLink className={"nav-link"} to="/login" ><h6><FontAwesomeIcon icon={faSign}/> Login</h6></NavLink>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyTopNavbar;
