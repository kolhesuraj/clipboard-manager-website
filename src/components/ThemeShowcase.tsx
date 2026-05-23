const MOCK_ITEMS = [
  { text: "npm run build && npm start", pinned: true, active: true },
  { text: "https://developer.mozilla.org/en-US/docs/Web", pinned: false },
  { text: "const { data, error } = await supabase...", pinned: false },
  { text: "sudo systemctl restart nginx", pinned: false },
  { text: 'git commit -m "feat: add unix socket..."', pinned: false },
];

function SearchIcon({ stroke }: { stroke: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
      <circle cx="6" cy="6" r="4.5" stroke={stroke} strokeWidth="1.5" />
      <path d="M10 10l2 2" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function DarkModel() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-indigo-500/60" />
        <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Dark</span>
      </div>
      <div className="w-[340px] bg-[#16161d] border border-white/[0.07] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.07]">
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="7" fill="#6366f1" />
              <path d="M8 9h12M8 13h12M8 17h8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
            <span className="text-[11px] font-bold text-slate-200 tracking-tight">Clipboard Manager</span>
          </div>
          <span className="text-[10px] text-slate-500 border border-white/[0.07] rounded px-1.5 py-0.5">Clear</span>
        </div>
        {/* Search */}
        <div className="px-3 py-2.5 border-b border-white/[0.07]">
          <div className="flex items-center gap-2 bg-[#0f0f13] border border-white/[0.07] rounded-lg px-2.5 py-1.5 text-slate-400 text-xs">
            <SearchIcon stroke="#64748b" />
            Search history…
          </div>
        </div>
        {/* Items */}
        <div className="py-1">
          {MOCK_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-2.5 px-3.5 py-2 font-mono text-[11px] cursor-pointer ${item.active ? "bg-indigo-500/10" : "hover:bg-white/[0.03]"}`}
            >
              <span className={`flex-shrink-0 ${item.pinned ? "opacity-100" : "opacity-20"}`}>📌</span>
              <span className="truncate text-slate-300">{item.text}</span>
            </div>
          ))}
        </div>
        {/* Footer */}
        <div className="px-3.5 py-2 border-t border-white/[0.07] text-[10px] text-slate-500 text-center">
          5 items · Super+Shift+V to toggle · Esc to close
        </div>
      </div>
    </div>
  );
}

function LightModel() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-indigo-500/40 border border-indigo-500/60" />
        <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Light</span>
      </div>
      <div className="w-[340px] bg-[#eceff6] border border-black/[0.09] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-black/[0.08]">
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="7" fill="#6366f1" />
              <path d="M8 9h12M8 13h12M8 17h8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
            <span className="text-[11px] font-bold text-[#1e2533] tracking-tight">Clipboard Manager</span>
          </div>
          <span className="text-[10px] text-[#8494a8] border border-black/[0.08] rounded px-1.5 py-0.5">Clear</span>
        </div>
        {/* Search */}
        <div className="px-3 py-2.5 border-b border-black/[0.08]">
          <div className="flex items-center gap-2 bg-[#e2e7ef] border border-black/[0.08] rounded-lg px-2.5 py-1.5 text-[#8494a8] text-xs">
            <SearchIcon stroke="#8494a8" />
            Search history…
          </div>
        </div>
        {/* Items */}
        <div className="py-1">
          {MOCK_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-2.5 px-3.5 py-2 font-mono text-[11px] cursor-pointer ${item.active ? "bg-indigo-500/[0.09]" : "hover:bg-indigo-500/[0.04]"}`}
            >
              <span className={`flex-shrink-0 ${item.pinned ? "opacity-100" : "opacity-20"}`}>📌</span>
              <span className="truncate text-[#1e2533]">{item.text}</span>
            </div>
          ))}
        </div>
        {/* Footer */}
        <div className="px-3.5 py-2 border-t border-black/[0.08] text-[10px] text-[#8494a8] text-center">
          5 items · Super+Shift+V to toggle · Esc to close
        </div>
      </div>
    </div>
  );
}

export default function ThemeShowcase() {
  return (
    <section className="py-24 bg-[#16161d] border-y border-white/[0.07]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 rounded-full text-xs font-semibold tracking-widest uppercase px-4 py-1.5 mb-5">
            Theme Matching
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-100 mb-4">
            Adapts to your style
          </h2>
          <p className="text-slate-400 text-lg max-w-lg mx-auto">
            Follows your system dark or light preference automatically — or override it with one click. The tray icon updates to match.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 lg:gap-16">
          <DarkModel />
          {/* Divider */}
          <div className="hidden sm:flex flex-col items-center gap-3 text-slate-600">
            <div className="w-px h-16 bg-white/[0.07]" />
            <span className="text-xs font-semibold tracking-widest uppercase">or</span>
            <div className="w-px h-16 bg-white/[0.07]" />
          </div>
          <LightModel />
        </div>

        <p className="text-center text-slate-500 text-sm mt-12">
          Toggle with the <span className="font-mono bg-white/[0.05] border border-white/[0.07] rounded px-1.5 py-0.5">⚙️</span> button in the header — cycles between system, dark, and light.
        </p>
      </div>
    </section>
  );
}
