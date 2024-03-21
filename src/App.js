import { Route, Routes } from "react-router";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Nopage from "./Components/Nopage";
import LandingPage from "./Components/LandingPage";
import ScrollToTop from "./Components/ScrollToTop";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <ScrollToTop />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects/:slug" element={<Projects />} />
          <Route path="/*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
