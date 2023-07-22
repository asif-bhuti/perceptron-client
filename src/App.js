import React from "react";
import { Route, Routes } from "react-router";
import { Home } from "./pages";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
