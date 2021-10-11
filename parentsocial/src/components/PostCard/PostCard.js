import React from 'react'
import Image from "../../assets/Images/swing.jpg";
// import Image from "../../assets/Images/kids-with-balloon.png"
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody,Row, Col 
  } from 'reactstrap';


  const PostCard = (props) => {
    return (
     <>
        <Row>
        <Col sm="6">
      <CardGroup >
        <Card>
          <CardImg top width="100%" src={Image} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={Image} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        </CardGroup>
        </Col>
      </Row>

<br/>

<Row>
    <Col sm="6">
    <CardGroup >
    <Card>
    <CardImg top width="100%" src={Image} alt="Card image cap" />
    <CardBody>
        <CardTitle tag="h5">Card title</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
        <Button>Button</Button>
    </CardBody>
    </Card>
    <br/>
    <Card>
    <CardImg top width="100%" margin-left="10%" src={Image} alt="Card image cap" />
    <CardBody>
        <CardTitle tag="h5">Card title</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
        <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Button</Button>
    </CardBody>
    </Card>
    </CardGroup>
    </Col>
</Row>
  
    </> 
    );
  };

export default PostCard;
