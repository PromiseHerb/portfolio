import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import { ExampleNavbar } from "./components/ExampleNavbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";


export default function App() {
  return ( <main className="text-gray-400 bg-gray-900 body-font">
  
  <About />
  <ExampleNavbar  />
  <Projects />
  <Skills />
  <Hobbies />
  <Contact />
</main>
);
}

