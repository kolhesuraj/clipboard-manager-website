import { BgMockup } from './MockupBg.tsx';

const GITHUB = 'https://github.com/your-username/clipboard-manager';

export default function Hero() {
  return (
    <header className="relative overflow-hidden pt-24 pb-20 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(99,102,241,0.18)_0%,transparent_70%)]">
      {/* ── Background decoration: tilted model in bottom-right corner ── */}
      <BgMockup
        side="right"
        theme="dark"
        scale={1.5}
        useZoom
        className="absolute right-[200px] -bottom-2 pointer-events-none"
        style={{
          transform: 'perspective(1100px) rotateX(6deg) rotateY(-18deg) rotateZ(1deg)',
          opacity: 1,
          boxShadow: '24px 32px 60px rgba(0,0,0,0.6), 16px 16px 40px rgba(99,102,241,0.10)',
        }}
      />
      {/* Fade the decoration into the background */}
      <div className="absolute bottom-0 right-0 w-[480px] h-[420px] bg-gradient-to-tl from-[#0f0f13] via-[#0f0f13]/60 to-transparent pointer-events-none" />

      {/* ── Main content: 2-column layout (unchanged) ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Text */}
        <div>
          <span className="inline-block bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 rounded-full text-xs font-semibold tracking-widest uppercase px-4 py-1.5 mb-6">
            Open Source · Linux · GNOME Wayland
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-slate-100 mb-5">
            Your clipboard.
            <br />
            Always one keystroke away.
          </h1>
          <p className="text-lg text-slate-400 max-w-lg mb-9 leading-relaxed">
            Press <kbd>Super</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd> anywhere — in a browser, terminal,
            or native Wayland app — and instantly paste from your full clipboard history.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#install"
              className="px-5 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg transition-all hover:-translate-y-px text-sm"
            >
              Get Started
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 border border-white/10 hover:border-white/20 text-slate-400 hover:text-slate-200 font-semibold rounded-lg transition-all text-sm"
            >
              View Source
            </a>
          </div>
        </div>

        {/* App mockup — main upright card */}
        <div className="flex justify-center" aria-hidden="true">
          {/* <DarkMockupCard className="transition-all duration-300 shadow-[0_40px_80px_rgba(0,0,0,0.5)]" /> */}
        </div>
      </div>
    </header>
  );
}
