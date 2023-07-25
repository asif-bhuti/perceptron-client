import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Contact, Home, Pricing, Projects, Services } from "./pages";
import { AnimateLogo, Floating, Navbar } from "./components";

function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  return (
    <>
      {loading ? (
        <AnimateLogo />
      ) : (
        <div
          className={twMerge(
            "w-full min-h-screen bg-primary-400 relative overflow-hidden"
          )}
        >
          <Navbar />
          <Floating />
          <Home />
          <Services />
          <Projects />
          <Pricing />
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;
