import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import About from "./components/About";
import UserFeed from "./components/User-feed";
import LegoBatman from "./components/LegoBatmanPage";
import CarrionPage from "./components/CarrionPage";
import HitmanABPage from "./components/HitmanABPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/your-feed" element={<UserFeed />} />
        <Route path="/lego-batman" element={<LegoBatman />} />
        <Route path="/carrion" element={<CarrionPage />} />
        <Route path="/hitman-absolution" element={<HitmanABPage />} />
      </Routes>
    </>
  );
}

export default App;
