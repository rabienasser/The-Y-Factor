import "./App.css";
// React-Router
import { Switch, Route } from "react-router-dom";
// Components
import Navbar from "./components/Navbar";
// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Mission from "./pages/Mission";

function App() {
   return (
      <div className="App">
         <Navbar />
         <Switch>
            <Route path="/" exact>
               <Home />
            </Route>

            <Route path="/mission">
               <Mission />
            </Route>

            <Route path="/contact">
               <Contact />
            </Route>
         </Switch>
      </div>
   );
}

export default App;
