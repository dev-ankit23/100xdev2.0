import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Class11Program() {
  return (
    <div>
      <h1>Class - 11 Program</h1>
    </div>
  );
}

function Class12Program() {
  return (
    <div>
      <h1>Class - 12 Program</h1>
    </div>
  );
}
function Landing() {
  return (
    <div>
      <h1>Welcome to Landingpage</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/class11" element={<Class11Program />} />
        <Route path="/" element={<Landing />} />
        <Route path="/class12" element={<Class12Program />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
