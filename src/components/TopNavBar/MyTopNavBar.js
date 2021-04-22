import {React} from 'react';
import { Nav, Navbar, NavItem} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard ,faHome,faTasks ,faCog } from '@fortawesome/free-solid-svg-icons'
import { NavLink} from "react-router-dom";




function MyTopNavbar(props){
    return(
        <Navbar  sticky={true} collapseOnSelect expand={"md"} bg={"dark"} variant={"dark"} >
            <Navbar.Brand >
                <h2><FontAwesomeIcon icon={faClipboard} /> Roi's Todo List</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav variant="pills" className="mr-auto"  defaultActiveKey={props.NavBarActiveKey}>
                    <NavItem>
                        <NavLink className={"nav-link"} to="/home" ><h6><FontAwesomeIcon icon={faHome}/> Home</h6></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={"nav-link"} to="/history"><h6><FontAwesomeIcon icon={faTasks}/> Finished Todo's</h6></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={"nav-link"} to={"/settings"}><h6><FontAwesomeIcon icon={faCog}/> Settings</h6></NavLink>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyTopNavbar;
