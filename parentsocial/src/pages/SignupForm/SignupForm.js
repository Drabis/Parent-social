import React, { useState } from "react";
import "./signUp.css"

import { Link, useHistory } from "react-router-dom";
import API from "../../utils/API"

export default function SigninPage(props) {
  let history = useHistory();
  const [formInput, setFormInput] = useState({});
  const [validator, setValidator] = useState({ email: false, name: false });

  const handleInputChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
    const targetName = e.target.name.value;
    switch (targetName) {
      case "email":
        const emailCheck = new RegExp(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        );
        if (emailCheck.test(e.target.value)) {
          setFormInput({ ...formInput, [e.target.name]: e.target.value });
          setValidator({ ...validator, email: false });
        } else {
          setValidator({ ...validator, email: true });
        }
        break;
      default:
        return;
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    API.signup(formInput).then((response) => {
      if (response.status === 200) {
        props.handleUserSignin();
        history.push("/home");
      }
    });
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        
        <label>username</label>
        <input
          name="username"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter your username"
        />

        <label>Password</label>
        <input
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="Enter your password"
        />

        <label>first name</label>
        <input
          name="username"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter your first name"
        />

        <label>last name</label>
        <input
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter your last name"
        />
        {validator.password && <div>Enter a valid password</div>}

        <button onClick={handleRegister} className="registerButton">
          register
        </button>
      </form>
      <button className="registerLoginButon">
        <Link className="link" to="/login">
          LOGIN
        </Link>
      </button>

    </div>
  );
}



// import React from "react";
// import "./signUp.css";


  

// class SignupForm extends React.Component{
//   render(){
//     return(
//       <div id="signupform">
//         <FormHeader title="Sign Up" />
//         <Form />
//         <OtherMethods />
//       </div>
//     )
//   }
// }

// const FormHeader = props => (
//     <h2 id="headerTitle">{props.title}</h2>
// );


// const Form = props => (
//    <div>
//      <FormInput description="Username" placeholder="Enter your username" type="text" />
//      <FormInput description="Password" placeholder="Enter your password" type="password"/>
//      <br/>
//      <p><a href="/login">Are you already a memeber?</a></p>
//      <FormButton title="Sign Up"/>
//    </div>
// );

// const FormButton = props => (
//   <div id="button" class="row">
//     <button>{props.title}</button>
//   </div>
// );

// const FormInput = props => (
//   <div class="row">
//     <label>{props.description}</label>
//     <input type={props.type} placeholder={props.placeholder}/>
//   </div>  
// );

// const OtherMethods = props => (
//   <div id="alternativeLogin">
//     <label>Or sign Up with:</label>
//     <div id="iconGroup">
//       <Facebook />
//       <Twitter />
//       <Google />
//     </div>
//   </div>
// );

// const Facebook = props => (
//   <a href="#" id="facebookIcon"></a>
// );

// const Twitter = props => (
//   <a href="#" id="twitterIcon"></a>
// );

// const Google = props => (
//   <a href="#" id="googleIcon"></a>
// );
// export default SignupForm;