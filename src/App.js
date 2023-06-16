import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Bread from "./components/Bread";
import New from "./components/New"
import UpdateBread from "./components/UpdateBread"

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bread/:id" element={<Bread />} />
          <Route path="/bread/update/:id" element={<UpdateBread />} />
          <Route path="/new" element={<New />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;