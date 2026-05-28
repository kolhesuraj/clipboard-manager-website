import { useEffect, useState } from 'react'
import DownloadIcon from '../assets/DownloadIcon.tsx'

const REPO = 'kolhesuraj/clipboard-manager-app'
const RELEASES_PAGE = `https://github.com/${REPO}/releases/latest`

interface Release {
  version: string
  deb: string
  appimage: string
}

const SOURCE_STEPS = [
  {
    label: '1 — Clone and install',
    code: `git clone https://github.com/${REPO}.git\ncd clipboard-manager-app\nnpm install`,
  },
  {
    label: '2 — Build',
    code: 'npm run build',
  },
  {
    label: '3 — Run',
    code: 'npm start',
    note: 'The app starts in the system tray. The Super+Shift+V GNOME shortcut is registered automatically — no manual setup needed.',
  },
]

const REQUIREMENTS = [
  'Linux with GNOME (Wayland or XWayland)',
  'Ubuntu 22.04 or newer',
  <>
    <code>wtype</code> / <code>xdotool</code> — auto-installed by the .deb
  </>,
  <>
    <code>curl</code> — for the GNOME shortcut trigger
  </>,
]

export default function Install() {
  const [release, setRelease] = useState<Release | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://api.github.com/repos/${REPO}/releases/latest`)
      .then((r) => r.json())
      .then((data) => {
        const deb = data.assets?.find((a: { name: string; browser_download_url: string }) =>
          a.name.endsWith('.deb'),
        )?.browser_download_url
        const appimage = data.assets?.find((a: { name: string; browser_download_url: string }) =>
          a.name.endsWith('.AppImage'),
        )?.browser_download_url
        if (deb && appimage) setRelease({ version: data.tag_name, deb, appimage })
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="install" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-center text-slate-100 mb-4">
          Install
        </h2>
        <p className="text-center text-slate-400 text-lg max-w-xl mx-auto mb-14">
          Download the prebuilt package — up and running in seconds.
        </p>

        {/* ── Download cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto mb-10">
          {/* .deb */}
          <div className="bg-[#1c1c26] border border-white/[0.07] rounded-xl p-6 flex flex-col gap-4">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Ubuntu / Debian
              </div>
              <div className="text-slate-100 font-bold text-lg">.deb package</div>
              <div className="text-slate-400 text-sm mt-1">
                Installs to /opt, sets up autostart &amp; shortcut
              </div>
            </div>
            <a
              href={release?.deb ?? RELEASES_PAGE}
              target={release?.deb ? undefined : '_blank'}
              rel="noreferrer"
              className="mt-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg transition-all hover:-translate-y-px text-sm"
            >
              <DownloadIcon />
              {loading ? (
                'Loading…'
              ) : (
                <>
                  Download .deb
                  {release?.version && (
                    <span className="text-indigo-200 font-normal ml-1">{release.version}</span>
                  )}
                </>
              )}
            </a>
            <div className="bg-[#13131a] rounded-lg px-4 py-3">
              <code className="font-mono text-xs text-slate-400">
                sudo apt install ./clipboard-manager_*.deb
              </code>
            </div>
          </div>

          {/* AppImage */}
          <div className="bg-[#1c1c26] border border-white/[0.07] rounded-xl p-6 flex flex-col gap-4">
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Any Linux distro
              </div>
              <div className="text-slate-100 font-bold text-lg">AppImage</div>
              <div className="text-slate-400 text-sm mt-1">
                No installation needed, runs anywhere
              </div>
            </div>
            <a
              href={release?.appimage ?? RELEASES_PAGE}
              target={release?.appimage ? undefined : '_blank'}
              rel="noreferrer"
              className="mt-auto flex items-center justify-center gap-2 px-5 py-2.5 border border-white/10 hover:border-indigo-500/40 text-slate-400 hover:text-slate-200 font-semibold rounded-lg transition-all text-sm"
            >
              <DownloadIcon className="opacity-60" />
              {loading ? (
                'Loading…'
              ) : (
                <>
                  Download AppImage
                  {release?.version && (
                    <span className="font-normal ml-1">{release.version}</span>
                  )}
                </>
              )}
            </a>
            <div className="bg-[#13131a] rounded-lg px-4 py-3">
              <code className="font-mono text-xs text-slate-400">
                chmod +x *.AppImage && ./clipboard-manager-*.AppImage
              </code>
            </div>
          </div>
        </div>

        {/* ── Requirements ── */}
        <div className="max-w-2xl mx-auto bg-indigo-500/[0.07] border border-indigo-500/20 rounded-xl p-7 mb-12">
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

        {/* ── Build from source ── */}
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-slate-600 text-sm mb-6">— or build from source —</p>
          <div className="flex flex-col gap-5">
            {SOURCE_STEPS.map((s) => (
              <div
                key={s.label}
                className="bg-[#1c1c26] border border-white/[0.07] rounded-xl overflow-hidden"
              >
                <div className="px-5 py-3 border-b border-white/[0.07] text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {s.label}
                </div>
                <pre className="px-5 py-4 overflow-x-auto">
                  <code className="font-mono text-sm text-slate-300 leading-relaxed">{s.code}</code>
                </pre>
                {s.note && <p className="px-5 pb-4 text-sm text-slate-400">{s.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
