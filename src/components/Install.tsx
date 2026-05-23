const STEPS = [
  {
    label: '1 — Install system dependencies',
    code: 'sudo apt install python3-dbus x11-utils wl-clipboard curl',
  },
  {
    label: '2 — Clone and install',
    code: `git clone https://github.com/your-username/clipboard-manager.git\ncd clipboard-manager/app\nnpm install`,
  },
  {
    label: '3 — Build',
    code: 'npm run build',
  },
  {
    label: '4 — Run',
    code: 'npm start',
    note: 'The app starts in the system tray. The Super+Shift+V GNOME shortcut is registered automatically — no manual setup needed.',
  },
]

const REQUIREMENTS = [
  'Linux with GNOME (Wayland or XWayland)',
  'Node.js 18+ and npm',
  <><code>python3-dbus</code> — for Mutter D-Bus key injection</>,
  <><code>x11-utils</code> — for <code>xprop</code> (terminal detection)</>,
  <><code>wl-clipboard</code> — for <code>wl-copy</code> (Wayland clipboard write)</>,
  <><code>curl</code> — for the GNOME shortcut trigger</>,
]

export default function Install() {
  return (
    <section id="install" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-center text-slate-100 mb-4">
          Installation
        </h2>
        <p className="text-center text-slate-400 text-lg max-w-xl mx-auto mb-14">
          Get running in under two minutes.
        </p>

        <div className="flex flex-col gap-5 max-w-2xl mx-auto mb-10">
          {STEPS.map((s) => (
            <div key={s.label} className="bg-[#1c1c26] border border-white/[0.07] rounded-xl overflow-hidden">
              <div className="px-5 py-3 border-b border-white/[0.07] text-xs font-semibold text-slate-500 uppercase tracking-wider">
                {s.label}
              </div>
              <pre className="px-5 py-4 overflow-x-auto">
                <code className="font-mono text-sm text-slate-300 leading-relaxed">{s.code}</code>
              </pre>
              {s.note && (
                <p className="px-5 pb-4 text-sm text-slate-400">{s.note}</p>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-indigo-500/[0.07] border border-indigo-500/20 rounded-xl p-7">
          <h3 className="text-sm font-bold text-indigo-300 mb-4">Requirements</h3>
          <ul className="flex flex-col gap-2.5">
            {REQUIREMENTS.map((r, i) => (
              <li key={i} className="text-sm text-slate-400 flex gap-3">
                <span className="text-indigo-500 flex-shrink-0">→</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
