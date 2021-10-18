import React, { useEffect, useState} from 'react'
import { useParams, useHistory } from "react-router-dom";
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import "./PlayDate.css"
// import { getPlayDate } from '../../utils/API'
import axios from 'axios';



function PlayDate() {

    const history = useHistory();
    const { postId } = useParams();
    const [data, setData] = useState([]);
    // const [post, setPost] = useState();


    const handleDelete = async (props) => {
        try {
          await axios.delete("http://localhost:8080/playDate/" + props.id);
    
          props.handleDelete(props.id);
        } catch (err) {}
      };
 
    // const handleDelete = async () => {
    //     try {
    //       await axios.delete("http://localhost:8080/playDate/" + postId);
    
    //       history.push("/home");
    //     } catch (err) {}
    //   };
    
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

         setData(response.data)
     })
 }, []);


    return (
        <div>
        <Header />
    
                <Link to="/PlayDayForm">
                    <button className="cardBtn">Add new play date</button>
                </Link>
   
            {data.map(({id, title, description, event_time}) => (
            <div key = {id}>
            <div className="playDateCard">
            <i
            className="deleteSign"
            onClick={handleDelete}>X</i>
                <div className="main">
                <h4>{title}</h4>
                <span tag="h6" className="mb-2 text-muted"></span>
                <span>{description}</span>
                </div>
            </div>
            
            </div>
        ))}
            

            <Footer />
            
        </div>
    )
}

export default PlayDate
