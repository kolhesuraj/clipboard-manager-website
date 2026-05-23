import React from 'react'

const MOCK_ITEMS = [
  { text: "npm run build && npm start", pinned: true, active: true },
  { text: "https://developer.mozilla.org/en-US/docs/Web", pinned: false },
  { text: "const { data, error } = await supabase...", pinned: false },
  { text: "sudo systemctl restart nginx", pinned: false },
  { text: 'git commit -m "feat: add unix socket..."', pinned: false },
  { text: "SELECT * FROM clipboard_items WHERE…", pinned: false, dim: true },
]

function SearchIcon({ stroke }: { stroke: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
      <circle cx="6" cy="6" r="4.5" stroke={stroke} strokeWidth="1.5" />
      <path d="M10 10l2 2" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function DarkMockupCard({ className = '', style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`w-[380px] bg-[#16161d] border border-white/[0.18] rounded-2xl overflow-hidden ${className}`} style={style}>
      <div className="flex items-center justify-between px-4 py-3.5 border-b border-white/[0.18]">
        <div className="flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="7" fill="#6366f1" />
            <path d="M8 9h12M8 13h12M8 17h8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
          <span className="text-xs font-bold text-slate-100 tracking-tight">Clipboard Manager</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-[22px] h-[22px] border border-white/[0.18] rounded flex items-center justify-center text-xs">⚙️</div>
          <div className="text-xs text-slate-300 border border-white/[0.18] rounded px-2 py-0.5 leading-none">Clear</div>
        </div>
      </div>
      <div className="px-3 py-3 border-b border-white/[0.18]">
        <div className="flex items-center gap-2 bg-[#0f0f13] border border-white/[0.18] rounded-lg px-3 py-2 text-slate-300 text-xs">
          <SearchIcon stroke="#94a3b8" />
          Search history…
        </div>
      </div>
      <div className="py-1">
        {MOCK_ITEMS.map((item, i) => (
          <div key={i} className={`flex items-center gap-2.5 px-3.5 py-2.5 font-mono text-xs cursor-pointer transition-colors duration-150 ${item.active ? 'bg-indigo-500/20' : 'hover:bg-white/[0.06]'}`}>
            <span className={`flex-shrink-0 ${item.pinned ? 'opacity-100' : 'opacity-30'}`}>📌</span>
            <span className={`truncate ${item.dim ? 'text-slate-400' : 'text-slate-100'}`}>{item.text}</span>
          </div>
        ))}
      </div>
      <div className="px-3.5 py-2.5 border-t border-white/[0.18] text-xs text-slate-400 text-center">
        Super+Shift+V to toggle · 6 items
      </div>
    </div>
  )
}

export function LightMockupCard({ className = '', style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`w-[340px] bg-[#eceff6] border border-black/[0.09] rounded-2xl overflow-hidden ${className}`} style={style}>
      <div className="flex items-center justify-between px-4 py-3 border-b border-black/[0.08]">
        <div className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="7" fill="#6366f1" />
            <path d="M8 9h12M8 13h12M8 17h8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
          <span className="text-[11px] font-bold text-[#1e2533] tracking-tight">Clipboard Manager</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-[20px] h-[20px] border border-black/[0.08] rounded flex items-center justify-center text-[10px]">⚙️</div>
          <div className="text-[10px] text-[#8494a8] border border-black/[0.08] rounded px-1.5 py-0.5 leading-none">Clear</div>
        </div>
      </div>
      <div className="px-3 py-2.5 border-b border-black/[0.08]">
        <div className="flex items-center gap-2 bg-[#e2e7ef] border border-black/[0.08] rounded-lg px-2.5 py-1.5 text-[#8494a8] text-xs">
          <SearchIcon stroke="#8494a8" />
          Search history…
        </div>
      </div>
      <div className="py-1">
        {MOCK_ITEMS.map((item, i) => (
          <div key={i} className={`flex items-center gap-2.5 px-3.5 py-2 font-mono text-[11px] cursor-pointer transition-colors duration-150 ${item.active ? 'bg-indigo-500/[0.09]' : 'hover:bg-black/[0.04]'}`}>
            <span className={`flex-shrink-0 ${item.pinned ? 'opacity-100' : 'opacity-20'}`}>📌</span>
            <span className={`truncate ${item.dim ? 'text-[#8494a8]' : 'text-[#1e2533]'}`}>{item.text}</span>
          </div>
        ))}
      </div>
      <div className="px-3.5 py-2 border-t border-black/[0.08] text-[10px] text-[#8494a8] text-center">
        Super+Shift+V to toggle · 6 items
      </div>
    </div>
  )
}

interface BgMockupProps {
  side: 'left' | 'right'
  theme: 'dark' | 'light'
  /** bg colour of the section for gradient blend — omit or leave empty to skip gradient */
  sectionBg?: string
  opacity?: number
  /** override position wrapper class */
  className?: string
  /** merged into the card's style (transform, boxShadow, etc.) */
  style?: React.CSSProperties
  /** scale factor applied to the card — default 3 for section backgrounds, pass 1 for full-size */
  scale?: number
  /** use CSS zoom instead of transform scale — keeps text sharp at any scale */
  useZoom?: boolean
}

export function BgMockup({ side, theme, sectionBg, opacity = 0.18, className, style, scale = 3, useZoom = false }: BgMockupProps) {
  const isLeft = side === 'left'

  const cardStyle: React.CSSProperties = {
    opacity,
    boxShadow: theme === 'dark'
      ? `16px 24px 48px rgba(0,0,0,0.6)`
      : `16px 24px 48px rgba(0,0,0,0.25)`,
    ...style,
  }

  const positionClass = isLeft
    ? 'absolute left-[40px] top-[10%] pointer-events-none z-[1]'
    : 'absolute right-[160px] top-[5%] pointer-events-none z-[1]'

  const scaleStyle: React.CSSProperties = useZoom
    ? { zoom: scale, transform: theme === 'light' ? 'rotate(-35deg)' : undefined, transformOrigin: isLeft ? 'top left' : 'top right' }
    : { transform: theme === 'light' ? `scale(${scale}) rotate(-35deg)` : `scale(${scale})`, transformOrigin: isLeft ? 'top left' : 'top right' }

  const gradientStyle: React.CSSProperties | null = sectionBg
    ? isLeft
      ? { background: `linear-gradient(to right, ${sectionBg} 0%, ${sectionBg}bb 15%, transparent 45%)` }
      : { background: `linear-gradient(to left, ${sectionBg} 0%, ${sectionBg}bb 15%, transparent 45%)` }
    : null

  return (
    <>
      {gradientStyle && (
        <div className="absolute inset-0 pointer-events-none z-0" style={gradientStyle} />
      )}
      <div className={className ?? positionClass} aria-hidden="true">
        <div style={scaleStyle}>
          <div style={cardStyle}>
            {theme === 'dark' ? <DarkMockupCard /> : <LightMockupCard />}
          </div>
        </div>
      </div>
    </>
  )
}
