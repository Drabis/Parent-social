import SignupForm from "./components/pages/SignupForm/SignupForm";
import LoginForm from "./components/pages/LoginForm/LoginForm";
import Homepage from "./components/pages/Homepage/Home";
import Daycare from "./components/pages/Daycare/Daycare";
import About from "./components/pages/About/About";
import InterviewClothes from "./components/pages/Interview-clothes/InterviewClothes";
import InterviewPrep from "./components/pages/Interview-prep/InterviewPrep";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PlayDate from "./components/pages/Play-date/PlayDate";
import PlayDayForm from "./components/pages/PlayDayForm/PlayDayform";


function App() {
  return (
  
    
    <Router>
    <Route path="/home">
      <Homepage />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/signup">
      <SignupForm />
    </Route>
    <Route path="/login">
      <LoginForm />
    </Route>
    <Route path="/interview-clothes">
       <InterviewClothes />
     </Route>
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
    
    </Router>
    )

}

export default App;