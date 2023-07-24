import React from "react";
import { Link } from "react-scroll";
import { Button } from "../button/Button";

export const Navbar = () => {
  return (
    <nav className="z-10 relative ">
      <div className="w-full flex justify-between items-center">
        <Link to="home" smooth={true}>
          <img
            src="logo_nav.png"
            alt="PERCEPTRON"
            className="font-krona text-primary-100 m-6 text-[20px] h-8 cursor-pointer"
          />
        </Link>
        <ul className="flex justify-end w-1/2 items-center">
          <Link to={"home"} smooth={true} className="nav-link">
            Home
          </Link>
          <Link to={"services"} smooth={true} className="nav-link">
            Services
          </Link>
          <Link to={"projects"} smooth={true} className="nav-link">
            Projects
          </Link>
          <Link to="pricing" smooth={true} className="nav-link">
            Pricing
          </Link>
          <Button>
            <Link
              to={"contact"}
              smooth={true}
              className="font-montserrat text-primary-100"
            >
              Contact
            </Link>
          </Button>
        </ul>
      </div>
    </nav>
  );
};
