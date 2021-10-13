import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import "./PlayDate.css"
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle,
  } from 'reactstrap';

function PlayDate() {
    return (
        <div>
        <Header />

            
    <Card className="cardContainer">
                <Link to="/PlayDayform">
                    <button className="cardBtn">Add new play date</button>
                </Link>
    </Card>
            
           
        <Card className="playDateCard">
                
                <CardBody>
                <CardTitle tag="h5">Title</CardTitle>
                
                <CardSubtitle tag="h6" className="mb-2 text-muted">Description</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
        </Card>
            

            <Footer />
            
        </div>
    )
}

export default PlayDate
