import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Home from "../src/Pages/Home";
import Courses from "./Pages/Our_mountain.js";
import Our_mountain from "./Pages/Our_mountain.js";

function App() {
  return (
    <div className="container">
      {/* Defining routes path and rendering components as element */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Our_mountain" element={<Our_mountain />} />
      </Routes>
    </div>
  );
}

export default App;