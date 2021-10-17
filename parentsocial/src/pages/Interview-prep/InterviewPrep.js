import React from 'react'
import Header from '../../components/Header/Header'
import "./styles.css"


function InterviewPrep() {
    return (
        <div>
            <Header />
          
            <div>
             <div>
             <h2>General interview practice </h2> 
             <iframe width="560" height="315" src="https://www.youtube.com/embed/3-ShfqYHsaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div> 
            <div>
            <h2>Interview for developers</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/cnNE83QYobk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             </div>
             <div>
             <h2>Interview for Teacher</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/J6MYpvOaNmE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div> 
            <div>
            <h2>Interview for Manager</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/VP1WBDB6lAk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        
            </div>
            
        </div>
    )
}

export default InterviewPrep
