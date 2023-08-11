import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Team from "./team";
import SecondNav from "./SecondNav";
import Business from "./pages/Business";
import Project from "./pages/Project";
import Technical from "./pages/Technical";
import Research from "./pages/Research";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
       
          <Route path="Business" element={<Business />} />
          <Route path="Team" element={<Team />} />
          <Route path="/" element={<Project />} />
          <Route path="SecondNav" element={<SecondNav />} />
          <Route path="Project" element={<Project />} />
          <Route path="Technical" element={<Technical />} />
          <Route path="Research" element={<Research />} />
          
      
      
      
       
      </Routes>
    </BrowserRouter>
  );
}