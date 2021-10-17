import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import "./PlayDate.css"
// import { getPlayDate } from '../../utils/API'
import axios from 'axios';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle,
  } from 'reactstrap';


function PlayDate() {

    const [data, setData] = useState([]);

    
 React.useEffect(() => {
     axios.get('http://localhost:8080/playDate').then((response) => { 


     const testData = [];
        for(const key in response.data) {
            const playdate = {
                id: key,
                ...response.data[key]
            };
            testData.push(playdate);
            console.log(testData);
            console.log(playdate)
        }
            
         console.log(response);
         console.log(response.data);
         setData(response.data)
     })
 }, []);


    return (
        <div>
        <Header />
    <Card className="cardContainer">
                <Link to="/PlayDayForm">
                    <button className="cardBtn">Add new play date</button>
                </Link>
    </Card>
    {data.map(({id, title, description, event_time}) => (
            <div key = {id}>
            <Card className="playDateCard">
                
                <CardBody>

                <CardTitle tag="h3">{title}</CardTitle>

                
                <CardSubtitle tag="h5" className="mb-2 text-muted"></CardSubtitle>
                <CardText>{description}</CardText>
                </CardBody>
            </Card>
            
            </div>
        ))}
            

            <Footer />
            
        </div>
    )
}

export default PlayDate
