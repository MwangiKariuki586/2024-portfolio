import Home from "./pages/Home";
import Work from "./pages/Work";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./mediaqueries.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
