import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandPage from "./pages/LandPage";
import Home2 from "./components/Home2";
import Services from "./components/Services";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
