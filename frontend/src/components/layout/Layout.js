import React from 'react';
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

function Layout(props){


    return(
       <>
           <Header location={props.location} displayJumbotron={props.displayJumbotron} />
           {props.body}
           <Footer/>
       </>
    )
}

export default Layout;
