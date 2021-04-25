import React from 'react'

import MyHeaderJumbotron from '../MyHeaderJumbotron/MyHeaderJumbotron';
import MyTopNavbar from "../TopNavBar/MyTopNavBar";

function Header(props) {
    const {location,displayJumbotron} =props;

    return(
        <div>
            <MyTopNavbar NavBarActiveKey={location}/>
            {displayJumbotron && <MyHeaderJumbotron/>}
        </div>
    )
}
Header.defaultProps = {displayJumbotron:true};

export default Header;
