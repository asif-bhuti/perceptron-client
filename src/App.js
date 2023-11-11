import React, { useState } from "react";
import { Contact, Footer, Home, Projects, Services } from "./pages";
import { AnimateLogo, DotConnector, Floating, Navbar } from "./components";

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
        <>
          <Navbar />
          <Floating />
          <DotConnector />
          <Home />
          <Services /> <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
