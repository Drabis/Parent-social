import React from 'react'
import Header from '../../components/Header/Header'
import "./styles.css"


function InterviewPrep() {
    return (
        <div>
            <Header />
            <table>
                <tr className="header">
                    <th>Interview for developers</th>
                    <th>Interview for Teacher</th>
                    <th>Interview for Manager</th>
                    <th>Interview for accounting job</th>
                </tr>
            </table>
            <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/UQa46oDYMuw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Fj8TzmUzkFc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/J6MYpvOaNmE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/VP1WBDB6lAk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            
        </div>
    )
}

export default InterviewPrep
