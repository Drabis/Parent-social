import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import { Link } from 'react-router-dom'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle,
  } from 'reactstrap';

function Daycare() {
    return (
        <div>
            <Header />
            <Card className="cardContainer">
                <Link to="/newDaycare">
                    <button className="cardBtn">Add a new Daycare</button>
                </Link>
    </Card>
            
           
        <Card className="playDateCard">
                
                <CardBody>
                <CardTitle tag="h5">daycare name</CardTitle>
                
                <CardSubtitle tag="h6" className="mb-2 text-muted">Location:</CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Phone:</CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Email:</CardSubtitle>
                </CardBody>
        </Card>
            <Footer />
        </div>
    )
}

export default Daycare
