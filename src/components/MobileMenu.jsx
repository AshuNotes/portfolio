import { useEffect } from "react";
import { Home, User, Tool, Folder, Briefcase, Mail } from "react-feather";
import { Status } from "../hooks/status";

export const MobileMenu = ({ isMenu, onComplete }) => {
  const active = Status();

  return (
    <div
      className={`fixed top-0 z-40 w-full rounded-b-xl bg-[#1a1a1a] text-white shadow-lg transition-all duration-300 ease-in-out ${
        isMenu
          ? "pointer-events-auto h-80 opacity-100"
          : "pointer-events-none h-0 opacity-0"
      }`}
    >
      <div className="mt-16 grid grid-cols-2 gap-6 px-6 py-8 text-center text-sm font-medium">
        {[
          {
            href: "#home",
            label: "Home",
            icon: (
              <Home
                className={`${active === "home" ? "stroke-blue-500 text-blue-500" : ""}`}
                size={20}
              />
            ),
          },
          {
            href: "#about",
            label: "About",
            icon: (
              <User
                className={`${active === "about" ? "stroke-blue-500 text-blue-500" : ""}`}
                size={20}
              />
            ),
          },
          {
            href: "#skills",
            label: "Skills",
            icon: (
              <Tool
                className={`${active === "skills" ? "stroke-blue-500 text-blue-500" : ""}`}
                size={20}
              />
            ),
          },
          {
            href: "#projects",
            label: "Projects",
            icon: (
              <Folder
                className={`${active === "projects" ? "stroke-blue-500 text-blue-500" : ""}`}
                size={20}
              />
            ),
          },
          {
            href: "#experience",
            label: "Experience",
            icon: (
              <Briefcase
                className={`${active === "experience" ? "stroke-blue-500 text-blue-500" : ""}`}
                size={20}
              />
            ),
          },
          {
            href: "#contact",
            label: "Contact",
            icon: (
              <Mail
                className={`${active === "contact" ? "stroke-blue-500 text-blue-500" : ""}`}
                size={20}
              />
            ),
          },
        ].map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            onClick={() => onComplete(false)}
            className="flex flex-col items-center gap-2 transition-colors duration-200 hover:text-blue-400"
          >
            {icon}
            <span>{label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};
