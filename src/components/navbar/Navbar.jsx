import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../button/Button";

export const Navbar = () => {
  return (
    <nav className="z-10 relative">
      <div className="w-full flex justify-between items-center">
        <NavLink to={"/"}>
          <img
            src="logo_nav.png"
            alt="PERCEPTRON"
            className="font-krona text-primary-100 m-6 text-[20px] h-8"
          />
        </NavLink>
        <ul className="flex justify-end w-1/2 items-center">
          <NavLink
            to={"/"}
            className="text-[20px] font-montserrat text-primary-100 m-4"
          >
            Home
          </NavLink>
          <NavLink
            to={"services"}
            className="text-[20px] font-montserrat text-primary-100 m-4"
          >
            Services
          </NavLink>
          <NavLink
            to={"projects"}
            className="text-[20px] font-montserrat text-primary-100 m-4"
          >
            Projects
          </NavLink>
          <NavLink
            to={"pricing"}
            className="text-[20px] font-montserrat text-primary-100 m-4"
          >
            Pricing
          </NavLink>
          <Button>
            <NavLink
              to={"contact"}
              className="text-[20px] font-montserrat text-primary-100 m-4"
            >
              Contact
            </NavLink>
          </Button>
        </ul>
      </div>
    </nav>
  );
};
