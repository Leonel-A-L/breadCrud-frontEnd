import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import Bread from "./components/Bread";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bread/:id" element={<Bread />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;