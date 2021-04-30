import React from 'react';
import {Modal} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSign} from "@fortawesome/free-solid-svg-icons";
import {Formik} from "formik";


function SignUpModal()
{
    return(
        <Modal centered={true}>
            <Modal.Header>
                <Modal.Title>
                    <h1>
                        <b><FontAwesomeIcon icon={faSign}/>SignUp</b>
                    </h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik initialValues={{userName:"",email:"", password:"",linkedin:""}}>

                </Formik>
            </Modal.Body>
        </Modal>
    )
}
export default SignUpModal;
