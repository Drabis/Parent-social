import React from 'react'
import Image from "../../assets/Images/swing.jpg";
import DaycareImg from "../../assets/Images/painting.jpg";
import InterviewClothesImg from "../../assets/Images/interClothes.jpg"
import InterviewPrepImg from "../../assets/Images/interPrep.jpg";
import "./postCard.css"
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody,Row, Col 
  } from 'reactstrap';


  const PostCard = (props) => {
    return (
     <>
        <Row className="row">
        <Col sm="6">
      <CardGroup className="cardGroup">
        <Card className="card">
          <CardImg src={Image} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Play-Date</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            <CardText> Our focus offers specialized programs that provide care for your children when juggling work-life with child-care. Offering a joyful moment for your children </CardText>
            <Button>View</Button>
          </CardBody>
        </Card>
        <Card className="card">
          <CardImg src={DaycareImg} alt="Card image cap" />
          <CardBody className="cardGroup">
            <CardTitle tag="h5">Daycare</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            <CardText>Our teachers are all experienced and dedicated professionals who love children. What makes us special? We aim to educate and grow the children of today by offering the best class.</CardText>
            <Button>View</Button>
          </CardBody>
        </Card>
        </CardGroup>
        </Col>
      </Row>



<Row className="row">
    <Col sm="6">
    <CardGroup >
    <Card className="card">
    <CardImg src={InterviewPrepImg} alt="Card image cap" />
    <CardBody className="cardGroup">
        <CardTitle tag="h5">Interview- Prep</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
        <CardText>Still confused about what question the interviewer may ask or worry about saying the wrong thing? Here you will have all the best content to be prepared for your interview day. </CardText>
        <Button>View</Button>
    </CardBody>
    </Card>
    <br/>
    <Card className="card">
    <CardImg src={InterviewClothesImg} alt="Card image cap" />
    <CardBody className="cardGroup">
        <CardTitle tag="h5">Interview clothing</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
        <CardText>Interview day is around the corner and you still don't know what to wear, don't worry we got you covered. Visit this page to see all the recommendations we got for you.</CardText>
        <Button>View</Button>
    </CardBody>
    </Card>
    </CardGroup>
    </Col>
</Row>
  
    </> 
    );
  };

export default PostCard;
