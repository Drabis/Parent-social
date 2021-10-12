import React, { Component } from "react";
import "./style.css";

export default class Form extends Component {
  state = {
    name:'',
    location:'',
    phone:'',
    email:'',

  };
  change = e => {
    this.props.onChange({[e.target.name]: e.target.value});
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
   // this.props.onSubmit(this.state);
    //to clear value after submit

    this.setState({
      name:'',
    location:'',
    phone:'',
    email:'',
    });
    this.props.onChange({
    name:'',
    location:'',
    phone:'',
    email:'',
    });
  };

  render(){
    return(
      <form>
          <br/>
        <input 
        name= "name"
        placeholder= 'Daycare name'
        value={this.state.name} 
        //onChange={e => this.setState({firstName:e.target.value})}
        onChange={e => this.change(e)}
        />
        <br/>
        <input 
        name= "location"
        placeholder= 'Daycare Location'
        value={this.state.location} 
        onChange={e => this.change(e)}
        />
          <br/>
        <input 
        name= "phone"
        placeholder= 'Daycare Phone'
        value={this.state.phone} 
        onChange={e => this.change(e)}
        />
          <br/>
        <input 
        name= "email"
        placeholder= 'email'
        value={this.state.email} 

        onChange={e => this.change(e)}
        />
          <br/>
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>

    );
  }
}