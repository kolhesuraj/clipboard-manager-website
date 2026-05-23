const GITHUB = 'https://github.com/your-username/clipboard-manager'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-between gap-5">
        <span className="flex items-center gap-2.5 font-bold text-slate-200 text-sm">
          <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect width="28" height="28" rx="7" fill="#6366f1" />
            <path d="M8 9h12M8 13h12M8 17h8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Clipboard Manager
        </span>
        <div className="flex gap-6">
          <a href={GITHUB} target="_blank" rel="noreferrer" className="text-sm text-slate-400 hover:text-slate-200 transition-colors">GitHub</a>
          <a href={`${GITHUB}/blob/main/CONTRIBUTING.md`} target="_blank" rel="noreferrer" className="text-sm text-slate-400 hover:text-slate-200 transition-colors">Contributing</a>
          <a href={`${GITHUB}/issues`} target="_blank" rel="noreferrer" className="text-sm text-slate-400 hover:text-slate-200 transition-colors">Issues</a>
        </div>
        <span className="text-xs text-slate-500">MIT License · Built for Linux</span>
      </div>
    </footer>
  )
}
