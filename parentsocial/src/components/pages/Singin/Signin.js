import React, { Component } from "react";
import "./Signin.css"
import {Link} from "react-router-dom";

export default class Login extends Component {
    render() {
        return (
        <div>
	
		<form className="form" id="form2">
			<h2 className="form__title">Sign In</h2>
			<input name="email" type="email" placeholder="Email" className="input" />
			<input name="password" type="password" placeholder="Password" className="input" />
			<a href="#">Forgot your password? </a>
			<button className="btn">Sign In</button>
		</form>
	

        <div className="overlay">
                <div className="overlay__panel overlay--left">
                    <button className="btn" id="signUp">
                        <Link className="link" to="./signup">
                        Sign Up
                        </Link>
                        </button>
                </div>
               
            </div>
        </div>
        );
    }
}