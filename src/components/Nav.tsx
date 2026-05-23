const GITHUB = 'https://github.com/your-username/clipboard-manager'

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0f0f13]/85 backdrop-blur-md border-b border-white/[0.07]">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-[60px] gap-6">
        <span className="flex items-center gap-2.5 font-bold text-slate-200 whitespace-nowrap">
          <ClipIcon />
          Clipboard Manager
        </span>
        <div className="flex items-center gap-7">
          <a href="#features" className="text-slate-400 hover:text-slate-200 text-sm transition-colors hidden sm:block">Features</a>
          <a href="#how-it-works" className="text-slate-400 hover:text-slate-200 text-sm transition-colors hidden sm:block">How It Works</a>
          <a href="#install" className="text-slate-400 hover:text-slate-200 text-sm transition-colors hidden sm:block">Install</a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold px-4 py-2 rounded-lg border border-white/10 text-slate-200 hover:border-indigo-400 hover:text-indigo-300 transition-all"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  )
}

function ClipIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect width="28" height="28" rx="7" fill="#6366f1" />
      <path d="M8 9h12M8 13h12M8 17h8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
