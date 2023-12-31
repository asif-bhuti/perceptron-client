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
        <div className="z-50 relative">
          <MobileNavbar />
        </div>
      ) : (
        <nav className={`z-10 relative px-4 py-2`}>
          <div className="flex justify-between items-center">
            <Link to="home" smooth={true}>
              <img
                src="logo_nav.png"
                alt="PERCEPTRON"
                className="font-krona text-primary-100 text-[20px] h-8 cursor-pointer"
              />
            </Link>
            <ul className="flex justify-end w-1/2 items-center ">
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
