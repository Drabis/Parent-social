import { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./playday.css"
import { SyntheticEvent } from "synthetic-event";
// import axios from 'axios';
import { createPlayDate } from '../../utils/API';
import cors from 'cors';



const PlayDayForm = (props) => {

  const [title, setTitle] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [description, setDescription] = useState('');

  const submit = async () => {
    createPlayDate(title, description, eventTime);
    // await fetch('localhost:8080/playDate', 
    // {method : "POST",
    //  header : {'Content-Type':'application/json'},
    //  mode : "cors",
    //     body: JSON.stringify({
    //         title : title,
    //         event_time : eventTime,
    //         description : description
    //     })})

  };


  return (
      <div className="container">
    <Form>
      <FormGroup>
        <Label for="exampleTitle">Title</Label>
        <Input type="text" name="title" id="" placeholder="Enter a title"
        onChange={(e) => {setTitle(e.target.value)}} />
      </FormGroup>

      <FormGroup>
        <Label for="exampleText">Description</Label>
        <Input type="textarea" name="text" id="exampleText" placeholder="What are offering today 😊?"
         onChange={(e) => {setDescription(e.target.value)}}
        />
      </FormGroup>
      <Button className="btn" onClick={submit}>Submit</Button>
    </Form>
    </div>
  );
}

export default PlayDayForm;
