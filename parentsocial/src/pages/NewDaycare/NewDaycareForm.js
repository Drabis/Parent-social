
import API from "../../utils/API"
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { createDayCare } from '../../utils/API';



const NewDaycareForm = (props) => {

  const history = useHistory();

  const [daycare_name, setDaycare_name] = useState('');
  const [address, setAddress] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  
 


  const submit = () => {
    createDayCare(daycare_name, address, phone_number, email, description);

    history.push("/daycare")
  };


  return (
      <div className="container">
    <Form>
      <FormGroup>
        <Label for="exampleText" >Daycare Name</Label>
        <Input type="text" name="text" id="" placeholder=" Name" 
        onChange={(e) => {setDaycare_name(e.target.value)}}/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText" >Daycare Address</Label>
        <Input type="text" name="text" id="" placeholder="Address" 
        onChange={(e) => {setAddress(e.target.value)}}/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText" >Daycare Phone</Label>
        <Input type="text" name="text" id="" placeholder=" Phone" 
        onChange={(e) => {setPhone_number(e.target.value)}}/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Daycare Email</Label>
        <Input type="text" name="text" id="" placeholder="Email" 
        onChange={(e) => {setEmail(e.target.value)}}/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Description</Label>
        <Input type="textarea" name="text" id="exampleText" placeholder="Description"
        onChange={(e) => {setDescription(e.target.value)}}/>
      </FormGroup>
      <Button className="btn" onClick={submit}>Submit</Button>
    </Form>
    </div>
  );
}

export default NewDaycareForm;