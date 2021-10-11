import React from 'react'
import "./signup.css"
import { Link, useHistory } from "react-router-dom";

const Signup = () => {
    return (
        <div>
         
            <form action="#" className="form" id="form1">
                <h2 className="form__title">Sign Up</h2>
                <input type="text" placeholder="User" className="input" />
                <input type="email" placeholder="Email" className="input" />
                <input type="password" placeholder="Password" className="input" />
                <button className="btn">Sign Up</button>
            </form>

        
            <div className="overlay">
                <div className="overlay__panel overlay--left">
                    <button className="btn" id="signIn">
                        <Link className="link" to="./signin">
                        Sign In
                        </Link>
                        </button>
                </div>
               
            </div>
        </div>
    )
}

export default Signup
