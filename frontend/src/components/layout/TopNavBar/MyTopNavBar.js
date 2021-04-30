import React from 'react';
import {Button,Nav, Navbar, NavDropdown} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClipboard, faHome, faTasks, faCog, faTrash, faList, faSign} from '@fortawesome/free-solid-svg-icons'
import { NavLink} from "react-router-dom";


function MyTopNavbar(props){

    return(
        <>
        <Navbar  collapseOnSelect fixed={"top"} expand={"lg"} bg={"dark"} variant={"dark"} >
            <Navbar.Brand as={NavLink} to={"/"}  >
                   <spam className={"display-4"}><FontAwesomeIcon icon={faClipboard} /> Todo List</spam>
            </Navbar.Brand>
            <Navbar.Toggle as={Button} size={'xl'} aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" size="xl" >
                <Nav defaultActiveKey={props.NavBarActiveKey}>
                    <NavLink className={"nav-link text-responsive"} to="/home" ><FontAwesomeIcon icon={faHome}/> Home</NavLink>
                    <NavDropdown  className={"text-responsive"} title={<span><FontAwesomeIcon icon={faList}/> Tasks</span>} id={"nav-dropdown-light"}>
                        <NavDropdown.Header ><h4>Task Management</h4></NavDropdown.Header>
                        <NavDropdown.Item className={"text-responsive"} >
                                <NavLink to="/tasks" ><FontAwesomeIcon icon={faList}/> Tasks</NavLink>
                        </NavDropdown.Item >
                        <NavDropdown.Item className={"text-responsive"} >
                                <NavLink to="/finishedtasks"><FontAwesomeIcon icon={faTasks}/> Finished Todo's</NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item className={"text-responsive"}>
                                <NavLink to="/trash"><FontAwesomeIcon icon={faTrash}/> Trash</NavLink>
                        </NavDropdown.Item>

                    </NavDropdown>
                    <NavLink className={"nav-link text-responsive"} to={"/settings"}><FontAwesomeIcon icon={faCog}/> Settings</NavLink>
                </Nav>
                <Nav className={"ml-lg-auto"}>
                    <NavLink className={"nav-link text-responsive "} to="/login" ><FontAwesomeIcon icon={faSign}/> Login</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default MyTopNavbar;
