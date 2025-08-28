import { motion } from "framer-motion";
import { GitHub, Linkedin, Twitter, Send } from "react-feather";

export const Home = () => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.25,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <motion.section
      id="home"
      initial="hidden"
      animate="show"
      className="flex min-h-screen w-full flex-col px-6 pt-24 md:mx-auto md:max-w-5xl md:flex-row md:justify-evenly md:pt-16"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex items-center justify-around space-x-5 md:mb-36 md:max-w-3xl md:space-x-15"
      >
        <motion.div
          variants={containerVariants}
          className="flex flex-col items-center justify-around space-y-7"
        >
          <motion.a
            variants={childVariants}
            target="_blank"
            href="https://github.com/ashunotes"
            whileHover={{ scale: 1.2 }}
          >
            <GitHub className="cursor-pointer transition-colors duration-150 hover:stroke-blue-500 md:size-6" />
          </motion.a>
          <motion.a
            variants={childVariants}
            target="_blank"
            href="https://linkedin.com"
            whileHover={{ scale: 1.2 }}
          >
            <Linkedin className="cursor-pointer transition-colors duration-150 hover:stroke-blue-500 md:size-6" />
          </motion.a>
          <motion.a
            variants={childVariants}
            target="_blank"
            href=""
            whileHover={{ scale: 1.2 }}
          >
            <Twitter className="cursor-pointer transition-colors duration-150 hover:stroke-blue-500 md:size-6" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-48 md:w-60"
        >
          <svg
            viewBox="0 0 200 187"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
          >
            <mask id="mask0" mask-type="alpha">
              <path
                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                      130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                      97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                      0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                      165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                      129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                      -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                fill="#ccc"
              />
              <image
                x="0"
                y="-12"
                width="200"
                height="200"
                // href="https://avatars.githubusercontent.com/u/138976608?s=400&u=e9a17946d06d2b13cccf328dcb4d90b3160c4cdb&v=4"
                href="/profile.jpg"
                preserveAspectRatio="xMidYMid slice"
              />
            </g>
          </svg>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mt-15 flex flex-col space-y-10 md:mt-20 md:max-w-xl md:px-10"
      >
        <motion.div
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="flex flex-col items-start justify-start text-start"
        >
          <motion.h1
            variants={childVariants}
            className="pb-5 text-3xl md:text-6xl"
          >
            Hi, I'm Asish
          </motion.h1>
          <motion.p
            variants={childVariants}
            className="pb-5 text-xl text-slate-400"
          >
            Web Developer
          </motion.p>
          <motion.p
            variants={childVariants}
            className="pb-5 text-lg text-slate-400"
          >
            Experienced in web development using the MERN stack, with a strong
            focus on building scalable solutions. I'm also learning data
            structures and algorithms in Java and have a basic understanding of
            SQL for managing relational databases.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              location.href = "#contact";
            }}
            className="mt-8 flex min-w-32 cursor-pointer justify-around space-x-5 rounded-lg bg-blue-500 px-5 py-3 text-xl text-white"
          >
            Contact Me
            <Send size={22} className="relative mt-0.5 ml-4 rotate-45" />
          </motion.button>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          whileHover={{ y: 0 }}
          whileTap={{ scale: 0.95 }}
          className="mt-5 flex animate-bounce items-center justify-start"
        >
          <i className="uil uil-mouse-alt text-3xl text-blue-500"></i>
          <motion.span>Scroll Down</motion.span>
          <i className="uil uil-arrow-down text-2xl text-blue-500"></i>
        </motion.a>
      </motion.div>
    </motion.section>
  );
};
