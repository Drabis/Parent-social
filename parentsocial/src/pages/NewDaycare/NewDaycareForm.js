
import API from "../../utils/API"
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const NewDaycareForm = (props) => {

  let { postId } = useParams();
  const history = useHistory();
  const [daycare, setDaycare] = useState({});
  const [daycareInfo, setDaycareInfo] = useState({});
  
 

  useEffect(() => {
    if (postId) {
      API.getDaycareById(postId).then((response) => {
        
        setDaycareInfo({
          name: response.data.name,
          location: response.data.location,
          phone: response.data.phone,
          email: response.date.email,
          description: response.data.description
        });
       
      });
    } else {
      setDaycare({});
      setDaycareInfo({});
    }
  }, [postId]);

  const handleInputChange = (e) => {
    setDaycareInfo({ ...daycareInfo, [e.target.name]: e.target.value });
  };
  const handlePostSubmit = () => {
    if (postId) {
      API.updateDaycare(daycare, daycareInfo,  postId).then(() => {
        history.push("/daycare");
      });
    } else {
      API.submitDaycare(daycare, daycareInfo,  props.user).then(() => {
        history.push("/daycare");
      });
    }
  };


  return (
      <div className="container">
    <Form>
      <FormGroup>
        <Label for="exampleText" onChange={handleInputChange}>Daycare Name</Label>
        <Input type="text" name="text" id="" placeholder=" Name" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText" onChange={handleInputChange}>Daycare Address</Label>
        <Input type="text" name="text" id="" placeholder="Address" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText" onChange={handleInputChange}>Daycare Phone</Label>
        <Input type="text" name="text" id="" placeholder=" Phone" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Daycare Email</Label>
        <Input type="text" name="text" id="" placeholder="Email" />
      </FormGroup>

      <FormGroup>
        <Label for="exampleText">Description</Label>
        <Input type="textarea" name="text" id="exampleText" placeholder="Description"/>
      </FormGroup>
      <Button className="btn" onClick={handlePostSubmit}>Submit</Button>
    </Form>
    </div>
  );
}

export default NewDaycareForm;