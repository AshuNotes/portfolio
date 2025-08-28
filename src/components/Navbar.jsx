import { useEffect, useState } from "react";
import { Sun } from "react-feather";
import { Status } from "../hooks/status";
import { motion } from "framer-motion";

export const Navbar = ({ isMenu, onComplete }) => {
  const active = Status();

  useEffect(() => {
    document.body.style.overflow = isMenu ? "hidden" : "";
  }, [isMenu]);

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full  transition ease transform duration-300`;

  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: -100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        ease: "easeOut",
        damping: 20,
        type: "spring",
        stiffness: 80,
      }}
      className="fixed top-0 z-50 m-auto flex w-full items-center justify-between p-4 backdrop-blur-lg md:justify-around"
    >
      <div className="text-[18px]">
        <a href="#home" className="font-bold">
          Asish Athota
        </a>
      </div>

      <div className="flex items-center space-x-8">
        <div className="text-lg md:hidden">
          <Sun />
        </div>

        <div
          className="group flex h-12 w-16 flex-col items-center justify-center md:hidden"
          onClick={() => onComplete((prev) => !prev)}
        >
          <div
            className={`ease my-[3px] h-[2px] w-7 transform rounded-full bg-white transition duration-300 ${
              isMenu
                ? "translate-y-[8px] rotate-45 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />

          <div
            className={`ease my-[3px] h-[2px] w-7 transform rounded-full bg-white transition duration-300 ${
              isMenu ? "opacity-0" : "opacity-50 group-hover:opacity-100"
            }`}
          />

          <div
            className={`ease my-[3px] h-[2px] w-7 transform rounded-full bg-white transition duration-300 ${
              isMenu
                ? "-translate-y-[8px] -rotate-45 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
        </div>
      </div>

      <div className="hidden space-x-8 text-[16px] md:flex">
        <a
          href="#home"
          className={`transition-colors duration-300 hover:text-blue-400 ${
            active === "home" ? "font-semibold text-blue-500" : "text-gray-500"
          }`}
        >
          Home
        </a>
        <a
          href="#about"
          className={`transition-colors duration-300 hover:text-blue-400 ${
            active === "about" ? "font-semibold text-blue-500" : "text-gray-500"
          }`}
        >
          About
        </a>
        <a
          href="#skills"
          className={`transition-colors duration-300 hover:text-blue-400 ${
            active === "skills"
              ? "font-semibold text-blue-500"
              : "text-gray-500"
          }`}
        >
          Skills
        </a>
        <a
          href="#projects"
          className={`transition-colors duration-300 hover:text-blue-400 ${
            active === "projects"
              ? "font-semibold text-blue-500"
              : "text-gray-500"
          }`}
        >
          Projects
        </a>
        <a
          href="#experience"
          className={`transition-colors duration-300 hover:text-blue-400 ${
            active === "experience"
              ? "font-semibold text-blue-500"
              : "text-gray-500"
          }`}
        >
          Experience
        </a>
        <a
          href="#contact"
          className={`transition-colors duration-300 hover:text-blue-400 ${
            active === "contact"
              ? "font-semibold text-blue-500"
              : "text-gray-500"
          }`}
        >
          Contact
        </a>
      </div>
    </motion.nav>
  );
};
