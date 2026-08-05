import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import UserFeed from "./components/About"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/about" element={<About />} />
        <Route path="/your-feed" element={<UserFeed />} />
      </Routes>
    </>
  );
}

export default App;
