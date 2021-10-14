
import API from "../../utils/API"
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { SyntheticEvent } from "synthetic-event";
import { createDayCare } from '../../utils/API';


const NewDaycareForm = (props) => {

  // let { postId } = useParams();
  // const history = useHistory();
  // const [daycare, setDaycare] = useState({});
  // const [daycareInfo, setDaycareInfo] = useState({});
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  
 

  // useEffect(() => {
  //   if (postId) {
  //     API.getDaycareById(postId).then((response) => {
        
  //       setDaycareInfo({
  //         name: response.data.name,
  //         location: response.data.location,
  //         phone: response.data.phone,
  //         email: response.date.email,
  //         description: response.data.description
  //       });
       
  //     });
  //   } else {
  //     setDaycare({});
  //     setDaycareInfo({});
  //   }
  // }, [postId]);

  // const handleInputChange = (e) => {
  //   setDaycareInfo({ ...daycareInfo, [e.target.name]: e.target.value });
  // };
  const submit = () => {
    createDayCare(name, address, phone, email, description);
  };


  return (
      <div className="container">
    <Form>
      <FormGroup>
        <Label for="exampleText" >Daycare Name</Label>
        <Input type="text" name="text" id="" placeholder=" Name" 
        onChange={(e) => {setName(e.target.value)}}/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText" >Daycare Address</Label>
        <Input type="text" name="text" id="" placeholder="Address" 
        onChange={(e) => {setAddress(e.target.value)}}/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText" >Daycare Phone</Label>
        <Input type="text" name="text" id="" placeholder=" Phone" 
        onChange={(e) => {setPhone(e.target.value)}}/>
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