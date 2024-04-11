//import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
//import { Breadcrumb } from "flowbite-react";
//import { HiHome } from 'react-icons/hi';
import "../App.css";
import "../Navbar.css";

 
export default function Navbar() {
    return (
    
    <nav className="nav">
      <a href="#" className="nav.brand"> Promise </a>
      <ul className="nav_menu">  
      <li className="nav__itm"><a href="about" className="nav__link">About</a></li>
      <li className="nav__itm"><a href="#projects" className="nav__link">Past Work</a></li>
      <li className="nav__itm"><a href="#skills" className="nav__link">Skills</a></li>
      <li className="nav__itm"><a href="#Hobbies" className="nav__link">Hobbies</a></li>
      <li className="nav__itm"><a href="#contact" className="nav__link">Hire Me</a></li>
      </ul>

      <div className="nav_toggler">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>



    </nav>
    
         
      );
}

//<header className="bg-gray-800 md:sticky top-0 z-10">


/* <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
<div className="title-font font-medium text-white mb-4 md:mb-0">
  <a href="#about" className="ml-3 text-xl">
    Promise Herbreteau
  </a>
</div>
<nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
  <a href="#projects" className="mr-5 hover:text-white">
      Past Work
  </a>
  <a href="#skills" className="mr-5 hover:text-white">
    Skills
  </a>
  <a href="#Hobbies" className="mr-5 hover:text-white">
    Hobbies
  </a>
</nav>
<a
  href="#contact"
  className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
  Hire Me
  <ArrowRightIcon className="ml-1" style={{ width: '0.75rem', height: '0.75rem' }} />
</a>
</div> */
//</header>