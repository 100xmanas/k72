import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agency from "./pages/Agency";
import Projects from "./pages/Projects";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import FullScreenNav from "./components/FullScreenNav";
import { useState } from "react";

function App() {

  const [opevNav, setOpenNav] = useState(false)

  return (
    <>
      <Navbar opevNav = {opevNav} setOpenNav={setOpenNav} />

      {opevNav && <FullScreenNav opevNav = {opevNav} setOpenNav={setOpenNav} />}

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
