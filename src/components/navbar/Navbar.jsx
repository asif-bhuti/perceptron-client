import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Button } from "../button/Button";
import { MobileNavbar } from "./MobileNavbar";

export const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  // Function to update the visibility of the navbar based on the window width
  const updateNavbarVisibility = () => {
    setIsNavbarVisible(window.innerWidth > 1064);
  };

  // Add event listener on component mount
  useEffect(() => {
    updateNavbarVisibility();
    window.addEventListener("resize", updateNavbarVisibility);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateNavbarVisibility);
    };
  }, []);

  return (
    <>
      {!isNavbarVisible ? (
        <div className="relative z-50">
          <MobileNavbar />
        </div>
      ) : (
        <nav className={`relative  z-10 px-4 py-2`}>
          <div className="flex items-center justify-between">
            <Link to="home" smooth={true}>
              <img
                src="logo_nav.png"
                alt="PERCEPTRON"
                className="h-8 cursor-pointer font-krona text-[20px] text-primary-100"
              />
            </Link>
            <ul className="flex w-1/2 items-center justify-end ">
              <Link to={"home"} smooth={true} className="nav-link-container">
                <span className="relative">Home</span>
              </Link>
              <Link
                to={"services"}
                smooth={true}
                className="nav-link-container"
              >
                <span className="relative">Services</span>
              </Link>
              <Link
                to={"projects"}
                smooth={true}
                className="nav-link-container"
              >
                <span className="relative">Projects</span>
              </Link>

              <Button>
                <Link to={"contact"} smooth={true} className="font-montserrat">
                  Contact
                </Link>
              </Button>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};
