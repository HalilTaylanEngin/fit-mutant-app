import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MuscleGain from "./pages/MuscleGain";
import AthleteNutrition from "./pages/AthleteNutrition";
import ApplicationForm from "./pages/ApplicationForm";
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      <div className="pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/muscle-gain" element={<MuscleGain />} />
          <Route path="/nutrition" element={<AthleteNutrition />} />
          <Route path="/apply" element={<ApplicationForm />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
