import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Purchase from "./Purchase";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Purchase" element={<Purchase />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
