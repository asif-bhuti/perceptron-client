import React from "react";
import { twMerge } from "tailwind-merge";
import { Contact, Home, Pricing, Projects, Services } from "./pages";
import { Floating, Navbar } from "./components";

function App() {
  return (
    <div
      className={twMerge(
        "w-full min-h-screen bg-primary-400 relative overflow-hidden"
      )}
    >
      <Navbar />
      {/* <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Floating />       */}
      <Floating />
      <Home />
      <Services />
      <Projects />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;
