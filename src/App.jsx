import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agency from "./pages/Agency";
import Projects from "./pages/Projects";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      <BrowserRouter>
        <Loader />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agency" element={<Agency />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
