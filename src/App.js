import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Home from "../src/Pages/Home";
import Courses from "./Pages/Our_mountain.js";
import Our_mountain from "./Pages/Our_mountain.js";

 {/* Defining routes path and rendering components as element */}
function App() {
  return (

      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Our_mountain" element={<Our_mountain />} />
        </Routes>
      </HashRouter>
    
  );
}

export default App;