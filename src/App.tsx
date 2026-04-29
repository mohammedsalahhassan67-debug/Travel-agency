import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Universities from "./pages/Universities";
import Guide from "./pages/Guide";
import Apply from "./pages/Apply";
import Portal from "./pages/Portal";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Assistant from "./components/Assistant";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/universities" element={<Universities />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/portal" element={<Portal />} />
          </Routes>
        </main>
        <Footer />
        <Assistant />
      </div>
    </Router>
  );
}

