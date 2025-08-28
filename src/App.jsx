import { useState } from "react";
import { Navbar } from "./Components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { MobileMenu } from "./components/MobileMenu";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export const App = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <>
      <Navbar isMenu={isMenu} onComplete={setIsMenu} />
      <MobileMenu isMenu={isMenu} onComplete={setIsMenu} />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
};
