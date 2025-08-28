// export const About = () => {
//   return (
//     <section id="about" className="min-h-screen w-full bg-[#1a1a1a]">
//       <h1></h1>
//     </section>
//   );
// };

export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "Svelte",
  ];

  const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];

  return (
    <section
      id="about"
      className="mx-7 flex min-h-screen flex-col items-center justify-center py-20 md:px-25"
    >
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="mb-8 rounded bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text px-6 py-3 text-3xl font-bold text-transparent">
          About Me
        </h2>
      </div>

      <div className="rounded-xl border border-white/10 p-8 transition-all hover:-translate-y-1">
        <p className="mb-6 text-gray-300">
          Passionate developer with expertise in building scalable web
          applications and creating innovative solutions.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl p-6 transition-all hover:-translate-y-1">
            <h3 className="mb-4 text-xl font-bold"> Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((tech, key) => (
                <span
                  key={key}
                  className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl p-6 transition-all hover:-translate-y-1">
            <h3 className="mb-4 text-xl font-bold"> Backend</h3>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map((tech, key) => (
                <span
                  key={key}
                  className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 p-6 transition-all hover:-translate-y-1">
          <h3 className="mb-4 text-xl font-bold"> 🏫 Education </h3>
          <ul className="list-inside list-disc space-y-2 text-gray-300">
            <li>
              <strong> B.Tech. in Computer Science </strong> - R.V.R. & J.C
              (2023-Present)
            </li>
            <li>
              Relevant Coursework: Data Structures, Web Development, Cloud
              Computing...
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-white/10 p-6 transition-all hover:-translate-y-1">
          <h3 className="mb-4 text-xl font-bold"> 💼 Work Experience </h3>
          <div className="space-y-4 text-gray-300">
            <div>
              <h4 className="font-semibold">
                {" "}
                Student at R.V.R. & J.C College of Engineering (2023 -
                Present){" "}
              </h4>
              <p>
                Developed and maintained microservices for web-based
                applications.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">
                {" "}
                Student at Bhashyam Jr. College (2021 - 2023){" "}
              </h4>
              <p>
                Assisted in building front-end components and integration REST
                APIs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
