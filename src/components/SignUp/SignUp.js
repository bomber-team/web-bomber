import React, {Component} from 'react';
import './SignUp.css';
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import autoBind from 'react-autobind'
import * as AuthSelectors from '../../store/Auth/reducer'
import SocialSignup from "../SocialSignUp/SocialSignUp";
import SignupForm from '../SignUpForm/SignUpForm'

class Signup extends Component {

    constructor(props) {
        super(props);
        autoBind(this)
    }

    render() {
        console.log("Render signup");
        if (this.props.isAuthenticated) {
            return <Redirect
                to={{
                    pathname: "/",
                    state: {from: this.props.location}
                }}/>;
        }
        return (
            <div className="signup-container">
                <div className="signup-content">
                    <h1 className="signup-title">Signup with Bomber</h1>
                    <SocialSignup/>
                    <div className="or-separator">
                        <span className="or-text">OR</span>
                    </div>
                    <SignupForm {...this.props} />
                    <span className="login-link">Already have an account? <Link to="/login">Login!</Link></span>
                </div>
            </div>
        );
    }
}

function MapStateToProps(state) {
    return {
        isAuthenticated: AuthSelectors.isAuthenticated(state)
    }
}

export default connect(MapStateToProps)(Signup)