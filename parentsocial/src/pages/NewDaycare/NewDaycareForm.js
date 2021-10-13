import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const NewDaycareForm = (props) => {
  return (
      <div className="container">
    <Form>
      <FormGroup>
        <Label for="exampleText">Daycare Name</Label>
        <Input type="text" name="text" id="" placeholder="Enter the Daycare Name" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Daycare Address</Label>
        <Input type="text" name="text" id="" placeholder="Enter the Daycare Address" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Daycare Phone</Label>
        <Input type="text" name="text" id="" placeholder="Enter the Daycare Phone" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Daycare Email</Label>
        <Input type="text" name="text" id="" placeholder="Enter the Daycare email" />
      </FormGroup>

      <FormGroup>
        <Label for="exampleText">Description</Label>
        <Input type="textarea" name="text" id="exampleText" placeholder=" Enter the Daycare Description"/>
      </FormGroup>
      <Button className="btn">Submit</Button>
    </Form>
    </div>
  );
}

export default NewDaycareForm;