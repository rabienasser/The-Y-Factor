import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { AnimatePresence } from "framer-motion";

function App() {
   const location = useLocation();

   return (
      <div className="App">
         <AnimatePresence exitBeforeEnter>
            <Navbar />
            <Switch location={location} key={location.pathname}>
               <Route path="/" exact component={Home} />
            </Switch>
         </AnimatePresence>
      </div>
   );
}

export default App;
