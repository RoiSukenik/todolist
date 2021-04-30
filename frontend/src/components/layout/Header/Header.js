import React from 'react'
import MyHeaderJumbotron from '../MyHeaderJumbotron/MyHeaderJumbotron';
import MyTopNavbar from "../TopNavBar/MyTopNavBar";


function Header(props) {
    const {location,displayJumbotron} =props;

    return(
        <>
            <MyTopNavbar NavBarActiveKey={location}/>
            {displayJumbotron && <MyHeaderJumbotron/>}
        </>

    )
}
Header.defaultProps = {displayJumbotron:true};

export default Header;
