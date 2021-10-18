import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import axios from 'axios';
import {
    Card, CardBody,
    CardTitle, CardSubtitle,CardText
  } from 'reactstrap';

function Daycare() {
    
    const [data, setData] = useState([]);


    React.useEffect(() => {
        axios.get('http://localhost:8080/daycare').then((response) => { 
   
   
        const testData = [];
           for(const key in response.data) {
               const daycare = {
                   id: key,
                   ...response.data[key]
               };
               testData.push(daycare);
               console.log(testData);
               console.log(daycare)
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
                <Link to="/newDaycareForm">
                    <button className="cardBtn">Add a new Daycare</button>
                </Link>
            </Card>

            {data.map(({id, daycare_name, address, phone_number, email, description}) => (
            <div key = {id}>
           
             <Card className="daycareCard">
                <CardBody>
                <CardTitle tag="h4">{daycare_name}</CardTitle>
                
                <CardSubtitle tag="h6" className="mb-2 text-muted">{address}:</CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{phone_number}:</CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{email}:</CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{description}:</CardSubtitle>
                </CardBody>
            </Card>
            </div>
            ))} 
            

            <Footer />
        
        </div>
    )
}
export default Daycare
