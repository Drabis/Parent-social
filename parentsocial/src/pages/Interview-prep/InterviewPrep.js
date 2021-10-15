import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
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
                <tr>
                    <td><Link to={{pathname:"https://www.youtube.com/embed/o51S5J7pGuk"}}target="_blank">Interview prep</Link> </td>
                    <td><Link to={{pathname:"https://youtu.be/J6MYpvOaNmE"}}target="_blank">Interview Prep</Link></td>
                    <td><Link to={{pathname:"https://youtu.be/Fj8TzmUzkFc"}}target="_blank">Interview Prep</Link></td>
                    <td><Link to={{pathname:"https://youtu.be/UQa46oDYMuw"}}target="_blank">Interview prep</Link></td>
                </tr>
                <tr>
                    <td><td><Link to={{pathname:"https://youtu.be/UQa46oDYMuw"}}target="_blank">Interview prep</Link></td></td>
                    <td><td><Link to={{pathname:"https://youtu.be/UQa46oDYMuw"}}target="_blank">Interview prep</Link></td></td>
                    <td><td><Link to={{pathname:"https://youtu.be/UQa46oDYMuw"}}target="_blank">Interview prep</Link></td></td>
                    <td><td><Link to={{pathname:"https://youtu.be/UQa46oDYMuw"}}target="_blank">Interview prep</Link></td></td>
                </tr>
            </table>

            {/* <td className="InterviewPrep">
                <h2 className="title"> Interview for web developers</h2>
                <li> <Link to={{pathname:"https://www.youtube.com/embed/o51S5J7pGuk"}}target="_blank">Interview prep</Link></li>  
                <h2 className="title"> Interview for Teacher</h2>
                <li><Link to={{pathname:"https://youtu.be/J6MYpvOaNmE"}}target="_blank">Interview Prep</Link></li>
                <h2 className="title"> Interview for Manager</h2>
                <li><Link to={{pathname:"https://youtu.be/Fj8TzmUzkFc"}}target="_blank">Interview Prep</Link></li>
                <h2 className="title"> Interview for Accounting</h2>
                <li><Link to={{pathname:"https://youtu.be/UQa46oDYMuw"}}target="_blank">Interview prep</Link></li>
            </td> */}
            <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/VP1WBDB6lAk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <Footer />
        </div>
    )
}

export default InterviewPrep
