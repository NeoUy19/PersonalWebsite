import "./index.css"
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { VinylNav } from "./Components/vinylnav";
import { Home } from "./Pages/home";
import { Projects } from "./Pages/projects";
import { Resume } from "./Pages/resume";
import { AboutMe } from "./Pages/aboutme";

function App() {
  // const [ showMav, setShowNav] = useState(false)

  return (
    <>
      <Router>
        <VinylNav />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
