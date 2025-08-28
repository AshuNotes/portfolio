export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex min-h-screen items-center justify-center py-20"
    >
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-3xl font-bold text-transparent">
          {" "}
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* <div className="rounded-xl border border-white/10 p-6 transition hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
            <h3 className="mb-2 text-xl font-bold"> Cloud Platform</h3>
            <p className="mb-4 text-gray-400">
              Scalable cloud infrastructure management with real-time monitoring
              and automated scaling.
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                <span
                  key={key}
                  className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition-all hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <a
                href="#"
                className="my-4 text-blue-400 transition-colors hover:text-blue-300"
              >
                View Project →
              </a>
            </div>
          </div> */}
          {/* <div className="glass rounded-xl border border-white/10 p-6 transition-all hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]">
            <h3 className="mb-2 text-xl font-bold">AI Analytics Dashboard</h3>
            <p className="mb-4 text-gray-400">
              ML-powered data visualization platform with predictive analytics
              and interactive reports.
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              {["Python", "TensorFlow", "D3.js", "Flask"].map((tech, key) => (
                <span
                  key={key}
                  className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition hover:-translate-y-0.5 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <a
                href="#"
                className="my-4 text-blue-400 transition-colors hover:text-blue-300"
              >
                View Project →
              </a>
            </div>
          </div> */}

          <div className="glass rounded-xl border border-white/10 p-6 transition-all hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]">
            <h3 className="mb-2 text-xl font-bold">E-Commerce Web App</h3>
            <p className="mb-4 text-gray-400">
              Full-stack e-commerce with modern UI, secure payment integration,
              and customizable product inventory.
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "Stripe", "PostgreSQL"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition hover:-translate-y-0.5 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <a
                target="_blank"
                href="https://asish-groceryecom.netlify.app"
                className="my-4 text-blue-400 transition-colors hover:text-blue-300"
              >
                View Project →
              </a>
            </div>
          </div>

          <div className="glass rounded-xl border border-white/10 p-6 transition-all hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]">
            <h3 className="mb-2 text-xl font-bold">Real-Time Chat App</h3>
            <p className="mb-4 text-gray-400">
              Scalable chat platform supporting real-time messaging, presence,
              and group chat features.
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              {["Socket.IO", "Express", "React", "Redis"].map((tech, key) => (
                <span
                  key={key}
                  className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition hover:-translate-y-0.5 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <a
                target="_blank"
                href="https://asish-chatbot.netlify.app"
                className="my-4 text-blue-400 transition-colors hover:text-blue-300"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
