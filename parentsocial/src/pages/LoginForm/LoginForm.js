
import React, { useState, useEffect } from "react";

import { Link, useHistory } from "react-router-dom";
import API from "../../utils/API";
import "./Login.css"

export default function SigninPage(props) {
  let history = useHistory();
  const [formInput, setFormInput] = useState({});
  // const [validation, setValidation] = useState({name:false, email: false});
  const [errorMessage, setErrorMessage] = useState(false);
  


  const handleInputChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
    const targetName = e.target.name;
    
  };
  const handleSignin = (e) => {
    e.preventDefault();
    API.login(formInput)
      .then((response) => {
        if (response.status === 200) {
          props.handleUserSignin(response.data.user._id);
          history.push("/home");
        }
      })
      .catch((err) => {
        setErrorMessage("Incorrect username or password, please try again");
      });
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Username</label>
        <input
          name="username"
          onChange={handleInputChange}
          typetype="text"
          placeholder="Enter your username"
        />
        {errorMessage && <div className="error">{errorMessage}</div>}
        <label>Password</label>
        <input
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="Enter your password"
        />
        <button onClick={handleSignin} className="loginButton">
          Login
        </button>
      </form>
      <button className="loginRegisterButon">
        <Link className="link" to="/signup">
          REGISTER
        </Link>
      </button>

    </div>
  );
}





// import { useState } from "react";
// import Button from "reactstrap"

// import React from 'react'

// function LoginForm() {

//   const useLogin = () => {
//     const [ userState, setUserState ] = useState({
//         username: "",
//         _id: "",
//         loggedIn: false
//     });
    
//     const logInUser = (user) => {
//         setUserState({
//             username: user.username,
//             _id: user._id,
//             loggedIn: user.loggedIn
//         });
//     };
    
//     const logOutUser = () => {
//         setUserState({
//             username: "",
//             _id: "",
//             loggedIn: false
//         });
//     };

//     return [ userState, logInUser, logOutUser ];
// }
//   return (
//     <>
//        <div>
//          <h1>PRENT SOCIAL</h1>
//        <h2>Welcome to Parents Social </h2>
//        </div>
//        <div id="loginform">
//          <button title="Login" > login</button> 
         
//          {/* <OtherMethods /> */}
//        </div>
//       </>
//   )
// }

// export default LoginForm







// import React from "react";
// import "./Login.css";


  

// class LoginForm extends React.Component{

//   const handleSignin = (e) => {
//     e.preventDefault();
    
//       .then((response) => {
//         if (response.status === 200) {
//           props.handleUserSignin(response.data.user._id);
//           history.push("/");
//         }
//       })
//       .catch((err) => {
//         setErrorMessage("Incorrect username or password, please try again");
//       });
//   };


//   render(){
//     return(
//       <>
//       <div>
//         <h1>PRENT SOCIAL</h1>
//       <h2>Welcome to Parents Social </h2>
//       </div>
//       <div id="loginform">
//         <FormHeader title="Login" />
//         <Form />
//         {/* <OtherMethods /> */}
//       </div>
//       </>
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
//      <p><a href="/signup">Are you a new memeber?</a></p>
//      <FormButton onClick={handleSignin}  title="Log in"/>
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
//     <label>Or sign in with:</label>
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
// export default LoginForm;

