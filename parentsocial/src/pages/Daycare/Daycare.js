import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import "./daycare.css"
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';
import "./daycare.css"
import {
    Card, CardBody,
    CardTitle, CardSubtitle,CardText
  } from 'reactstrap';

function Daycare() {
    
    const history = useHistory();
    const { postId } = useParams();
    const [data, setData] = useState([]);

    const handleDelete = async () => {
        try {
          await axios.delete("http://localhost:8080/daycare/" + postId);
    
          history.push("/home");
        } catch (err) {}
      };


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
                <Link to="/newDaycareForm">
                    <button className="cardBtn">Add a new Daycare</button>
                </Link>
            

            {data.map(({id, daycare_name, address, phone_number, email, description}) => (
            <div key = {id}>
           
             <div className="daycareCard">
                <i
                className="deleteSign"
                onClick={handleDelete}>X</i>
                <CardBody>
                <CardTitle tag="h4">{daycare_name}</CardTitle>
                
                <CardSubtitle tag="h6" className="mb-2 text-muted">{address}:</CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{phone_number}:</CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{email}:</CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{description}:</CardSubtitle>
                </CardBody>
            </div>
            </div>
            ))} 
            
        
        </div>
    )
}
export default Daycare
