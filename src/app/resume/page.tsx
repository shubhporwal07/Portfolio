const resumeUrl = "/resume.pdf";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-400">
              Portfolio / Resume
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Resume
            </h1>
          </div>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded border border-cyan-400/40 bg-cyan-400 px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-cyan-300"
          >
            Open PDF
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-[0_0_40px_rgba(34,211,238,0.08)]">
          <iframe
            src={resumeUrl}
            title="Resume PDF"
            className="block h-[78vh] w-full bg-white"
          />
        </div>
      </div>
    </main>
  );
}
