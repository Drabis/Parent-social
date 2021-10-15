import SignupForm from "./pages/SignupForm/SignupForm";
import LoginForm from "./pages/LoginForm/LoginForm";
import Homepage from "./pages/Homepage/Home";
import Daycare from "./pages/Daycare/Daycare";
import About from "./pages/About/About";
import InterviewClothes from "./pages/Interview-clothes/InterviewClothes";
import InterviewPrep from "./pages/Interview-prep/InterviewPrep";
import PlayDay from "./pages/PlayDayForm/PlayDayform";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PlayDate from "./pages/Play-date/PlayDate";
import PlayDayForm from "./pages/PlayDayForm/PlayDayform";
import NewDaycareForm from "./pages/NewDaycare/NewDaycareForm";


function App() {
  return (
  
    
    <Router>
    <Route path="/home">
      <Homepage />
    </Route>
    {/* <Route path="/about">
      <About />
    </Route> */}
    <Route path="/signup">
      <SignupForm />
    </Route>
    <Route path="/login">
      <LoginForm />
    </Route>
    {/* <Route path="/interview-clothes">
       <InterviewClothes />
     </Route> */}
     <Route path="/interview-prep">
       <InterviewPrep />
     </Route>
     <Route path="/playDayForm">
      <PlayDayForm />
     </Route>
     <Route path="/playDate">
      <PlayDate />
     </Route>
     <Route path="/daycare">
      <Daycare />
     </Route>
     <Route path="/newDaycareForm">
      <NewDaycareForm />
     </Route>
    
    </Router>
    )

}

export default App;