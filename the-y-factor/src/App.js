import "./App.css";
// React-Router
import { Switch, Route, useLocation } from "react-router-dom";
// Components
import Navbar from "./components/Navbar";
// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Mission from "./pages/Mission";
// Animation
import { AnimatePresence } from "framer-motion";

function App() {
   const location = useLocation();

   return (
      <div className="App">
         <AnimatePresence exitBeforeEnter>
            <Navbar />
            <Switch location={location} key={location.pathname}>
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
         </AnimatePresence>
      </div>
   );
}

export default App;
