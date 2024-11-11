import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
