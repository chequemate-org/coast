import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/home";
import About from "./pages/about-us";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
