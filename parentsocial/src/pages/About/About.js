import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import {  Card, CardGroup, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Col, Row } from 'reactstrap';
    import welcome from "../../assets/Images/welcome.jpg"
    import jointoday from "../../assets/Images/jointoday.jpeg"
    import "./about.css";



const About = (props) => {
  return (
      <div>
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Welcome to ParentSocial</h1>
          <p className="lead">Where parents can find the help they need to be interview-Ready.</p>
        </Container>
      </Jumbotron>
    </div>
     <Row>
     <Col >
     
     <CardGroup className="cards">
     <Card>
        <CardBody>
          <CardTitle tag="h5">Members</CardTitle>
        </CardBody>
        <img  className="d-block w-100" src={welcome} alt="first card" />
        <CardBody>
          <CardLink href="/login">Login</CardLink>
        </CardBody>
      </Card>
    
     <Card>
        <CardBody>
          <CardTitle tag="h5">New to ParentSocial?</CardTitle>
        </CardBody>
        <img  className="d-block w-100" src={jointoday} alt="second card" />
        <CardBody>
          <CardLink href="/signup">Sign Up</CardLink>
        </CardBody>
      </Card>
      </CardGroup>
     </Col>
   </Row>
   </div>

  );
  };

export default About;