import React from "react";
import { connect } from "react-redux";
import SessionForm from './session_form'
import { signup } from '../../actions/session_actions'
import { Link } from 'react-router-dom'

const mapStateToProps = ({errors}) => {
    return{
        errors: errors.session,
        formType: "signup",
        navLink: <Link to='/login'>log in instead</Link>
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);