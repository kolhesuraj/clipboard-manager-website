const FEATURES = [
  {
    icon: '⌨️',
    title: 'Super+Shift+V Shortcut',
    desc: 'Press Super+Shift+V from any app — terminal, browser, native Wayland, XWayland — to instantly open your clipboard history. Registered automatically on first launch.',
  },
  {
    icon: '🤖',
    title: 'Auto-Paste',
    desc: "Click an item and it's pasted immediately into the previously focused app. No extra Ctrl+V needed.",
  },
  {
    icon: '🖥️',
    title: 'Terminal-Aware',
    desc: 'Detects whether a terminal was focused and automatically uses Ctrl+Shift+V for terminals and Ctrl+V for all other apps.',
  },
  {
    icon: '🌊',
    title: 'Native Wayland',
    desc: 'Uses wtype (zwp_virtual_keyboard_v1) for seamless key injection — no screen-recording indicator. Falls back to xdotool for XWayland, then Mutter D-Bus as a last resort.',
  },
  {
    icon: '📌',
    title: 'Pin Items',
    desc: 'Click the 📌 at the start of any row to pin it instantly. Pinned snippets — API keys, boilerplate, URLs — never rotate out of history.',
  },
  {
    icon: '🎨',
    title: 'Theme Matching',
    desc: 'Follows your system dark/light preference automatically. Override it any time with one click — dark, light, or system-synced. The tray icon updates to match.',
  },
  {
    icon: '🔍',
    title: 'Instant Search',
    desc: 'Filter your full history as you type. Find that snippet from three days ago in under a second.',
  },
  {
    icon: '📦',
    title: '100-Item History',
    desc: 'Stores your last 100 clipboard entries in a local SQLite database. Pinned items are never evicted.',
  },
  {
    icon: '🔒',
    title: 'Fully Local',
    desc: 'No cloud sync, no telemetry, no accounts. Everything stays on your machine in a local SQLite file.',
  },
  {
    icon: '⚡',
    title: 'Zero Port Conflicts',
    desc: 'Uses a Unix socket instead of a TCP port — no firewall rules, no conflicts with other services on any machine.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden py-24">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-center text-slate-100 mb-4">
          Everything you need, nothing you don&apos;t
        </h2>
        <p className="text-center text-slate-400 text-lg max-w-xl mx-auto mb-14">
          Built for developers who live in the terminal and switch between apps constantly.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-[#1c1c26] border border-white/[0.07] rounded-xl p-7 hover:border-indigo-500/40 hover:-translate-y-0.5 transition-all"
            >
              <div className="text-3xl mb-4 leading-none">{f.icon}</div>
              <h3 className="text-sm font-bold text-slate-100 mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
