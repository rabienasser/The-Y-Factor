import "./App.css";
import Home from "./pages/Home/Home";

function App() {
   window.onbeforeunload = function () {
      window.scrollTo(0, 0);
   };
   return (
      <div className="App">
         <Home />
      </div>
   );
}

export default App;
