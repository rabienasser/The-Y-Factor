import Home from "./pages/Home/Home";
import SampleWorkouts from "./pages/Workouts/SampleWorkouts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
   window.onbeforeunload = function () {
      window.scrollTo(0, 0);
   };
   return (
      <BrowserRouter>
         <div className="App">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/sample-workouts" element={<SampleWorkouts />} />
            </Routes>
         </div>
      </BrowserRouter>
   );
}

export default App;
