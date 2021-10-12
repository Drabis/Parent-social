import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./playday.css"

const PlayDayForm = (props) => {
  return (
      <div className="container">
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Title</Label>
        <Input type="text" name="title" id="" placeholder="Enter a title" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Description</Label>
        <Input type="textarea" name="text" id="exampleText" placeholder="What are offering today 😊?"/>
      </FormGroup>
      <Button className="btn">Submit</Button>
    </Form>
    </div>
  );
}

export default PlayDayForm;
