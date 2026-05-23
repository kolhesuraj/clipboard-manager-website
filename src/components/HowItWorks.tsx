const STEPS = [
  {
    title: 'Background watcher',
    body: 'A lightweight clipboard watcher polls for new content and saves it to a local SQLite database. Duplicates are deduplicated and the timestamp is updated.',
  },
  {
    title: 'GNOME shortcut fires',
    body: (
      <>
        Super+Shift+V is registered as a GNOME custom keybinding at startup. It runs{' '}
        <code>curl --unix-socket &lt;path&gt; http://localhost/toggle</code> — no TCP port involved.
      </>
    ),
  },
  {
    title: 'Focus is captured',
    body: (
      <>
        Before the window opens, <code>xprop _NET_ACTIVE_WINDOW</code> reads which app currently has focus.
        If it&apos;s a terminal (by WM_CLASS or pgrep), that fact is stored.
      </>
    ),
  },
  {
    title: 'Window appears near cursor',
    body: "The clipboard manager window opens at the current cursor position, clamped to the screen's work area so it never goes off-screen.",
  },
  {
    title: 'You click an item',
    body: 'The item is written to the system clipboard, the window hides, and after 500 ms the correct paste keystroke is simulated — via wtype (Wayland, no screen-recording indicator), xdotool (XWayland), or Mutter RemoteDesktop D-Bus as a last resort.',
  },
]

import { BgMockup } from './MockupBg.tsx'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden py-24 bg-[#16161d] border-y border-white/[0.07]">
      <BgMockup side="right" theme="light" sectionBg="#16161d" opacity={0.12} />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-center text-slate-100 mb-4">
          How it works
        </h2>
        <p className="text-center text-slate-400 text-lg max-w-xl mx-auto mb-14">
          A transparent look at what happens when you hit the shortcut.
        </p>
        <div className="flex flex-col max-w-2xl mx-auto">
          {STEPS.map((s, i) => (
            <div key={i} className="flex gap-6 relative pb-10 last:pb-0">
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="absolute left-[19px] top-11 bottom-0 w-0.5 bg-white/[0.07]" />
              )}
              {/* Number bubble */}
              <div className="w-10 h-10 flex-shrink-0 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-sm relative z-10">
                {i + 1}
              </div>
              {/* Body */}
              <div className="pt-2">
                <h3 className="font-bold text-slate-100 mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
