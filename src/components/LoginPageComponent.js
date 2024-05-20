import React from "react";
import { useNavigate } from "react-router-dom";
import  '../css/login-form.css';

const LoginPageComponent = () => {

    const navigate = useNavigate();

    const loginFormSubmitHandler = (event) => {
        event.preventDefault();
        console.log('Login Form Submitted');
        //TODO:: Authentication Logic needs to be added
        navigate('/home');
    }

    return(
        <div className="login-form">
            <h2>Login Page</h2>
            <form onSubmit={loginFormSubmitHandler} className="user-form">
                <div className="form-input-div">
                    <label>UserName:</label>
                    <input type="text" name="username"/>
                </div>
                <div className="form-input-div">
                    <label>Password:</label>
                    <input type="password" name="password"/>
                </div>
                <div className="form-submit-div">
                    <input type="submit" name="username"/>
                </div>
            </form>
        </div>
    );
}

export default LoginPageComponent;