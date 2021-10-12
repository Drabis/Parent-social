import React, {Component} from "react";
import "./App.css";
import Form from "./components/Form/Form";

class NewDaycare extends Component {

  state = {
    fields: {}

  };
  //to see changes after submission use on submit, to see it as it is hapening use on change and replace fields with updated value

  onChange = updatedValue => {
    this.setState({ fields: {
      ...this.state.fields,


      ...updatedValue}});
    
  };

  render(){
    return(
      <div className="App">
        <Form onChange = {fields => this.onChange(fields)}/>
        <p>
          {JSON.stringify(this.state.fields, null, 2)}
          </p>
      </div>
    );
  }
}

export default NewDaycare;