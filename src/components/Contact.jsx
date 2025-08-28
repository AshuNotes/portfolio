export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex min-h-screen items-center justify-center py-20"
    >
      <div className="w-full min-w-[300px] p-6 px-4 sm:w-2/3 md:w-[500px]">
        <h2 className="mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-3xl font-bold text-transparent">
          {" "}
          Get In Touch
        </h2>
        <form className="space-y-6">
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white transition focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none"
              placeholder="Name..."
            />
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white transition focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none"
              placeholder="example@gmail.com"
            />
          </div>

          <div className="relative">
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white transition focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none"
              placeholder="Your Message..."
            />
          </div>

          <button
            type="submit"
            className="relative w-full overflow-hidden rounded bg-blue-500 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
