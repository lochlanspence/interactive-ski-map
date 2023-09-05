import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Home from "../src/Pages/Home";
import Map from "./Pages/Map.js";

 {/* Defining routes path and rendering components as element */}
function App() {
  return (
      // HashRouter for defining routes
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Map" element={<Map />} />
        </Routes>
      </HashRouter>
    
  );
}

export default App;