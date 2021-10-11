import Signup from "./components/pages/SignUp/Signup";
import Signin from "./components/pages/Singin/Signin";
import Homepage from "./components/pages/Homepage/Home";
import Daycare from "./components/pages/Daycare/Daycare";
import About from "./components/pages/About/About";
import InterviewClothes from "./components/pages/Interview-clothes/InterviewClothes";
import InterviewPrep from "./components/pages/Interview-prep/InterviewPrep";
import PlayDay from "./components/pages/PlayDay/Playday";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
  
    
    <Router>
    <Route path="/contact">
      <Homepage />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/signup">
      <Signup />
    </Route>
    <Route path="/signin">
      <Signin />
    </Route>
    <Route path="/interview-clothes">
       <InterviewClothes />
     </Route>
     <Route path="/interview-prep">
       <InterviewPrep />
     </Route>
     <Route path="/playDay">
      <PlayDay />
     </Route>
     <Route path="/daycare">
      <Daycare />
     </Route>
    
    </Router>
    )

}

export default App;