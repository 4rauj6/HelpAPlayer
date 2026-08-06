import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import About from "./components/About";
import UserFeed from "./components/User-feed";
import LegoBatman from "./components/LegoBatmanPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/your-feed" element={<UserFeed />} />
        <Route path="/lego-batman" element={<LegoBatman />} />
      </Routes>
    </>
  );
}

export default App;
