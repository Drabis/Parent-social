import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import "./PlayDate.css"
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle,
  } from 'reactstrap';

function PlayDate() {
    return (
        <div>
            <Header />

            <div>
                <Card className="cardContainer">
                    <button className="cardBtn">Add new play date</button>
                </Card>
            </div>
            <div>
            <Card className="playDateCard">
                
                <CardBody>
                <CardTitle tag="h5">Title</CardTitle>
                
                <CardSubtitle tag="h6" className="mb-2 text-muted">Description</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
            </Card>
            </div>

            <Footer />
            
        </div>
    )
}

export default PlayDate
