import { useState } from "react";
import { ThemeConfig } from "@/types";
import { QUICK_BROWSERS } from "@/constants";

interface Props {
  theme: ThemeConfig;
  t: (key: string) => string;
}

export default function UniBrowser({ theme, t }: Props) {
  const [url, setUrl] = useState("");
  const [browsing, setBrowsing] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = (target: string) => {
    let finalUrl = target;
    if (!target.startsWith("http")) {
      if (target.includes(".")) {
        finalUrl = "https://" + target;
      } else {
        finalUrl = `https://www.google.com/search?q=${encodeURIComponent(target)}`;
      }
    }
    setLoading(true);
    setCurrentUrl(finalUrl);
    setBrowsing(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="flex flex-col h-full">
      {/* URL Bar */}
      <div
        className="px-3 py-2 flex-shrink-0"
        style={{ borderBottom: `1px solid ${theme.border}` }}
      >
        <div
          className="flex items-center gap-2 px-3 py-2 rounded-2xl"
          style={{
            background: "rgba(255,255,255,0.55)",
            border: `1px solid ${theme.border}`,
            backdropFilter: "blur(8px)",
          }}
        >
          <span className="text-sm">🔒</span>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder={t("search")}
            className="flex-1 text-xs outline-none bg-transparent font-medium"
            style={{ color: theme.text }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && url) navigate(url);
            }}
          />
          {url && (
            <button
              onClick={() => navigate(url)}
              className="text-xs font-bold px-2 py-1 rounded-lg text-white"
              style={{ background: theme.accent }}
            >
              Go
            </button>
          )}
          {browsing && (
            <button
              onClick={() => { setBrowsing(false); setUrl(""); }}
              className="text-xs text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {browsing ? (
        /* Browser iframe */
        <div className="flex-1 relative">
          {loading && (
            <div
              className="absolute inset-0 z-10 flex flex-col items-center justify-center"
              style={{ background: "rgba(255,255,255,0.8)" }}
            >
              <div
                className="w-12 h-12 rounded-full border-4 border-t-transparent animate-spin mb-3"
                style={{ borderColor: `${theme.accent} transparent transparent transparent` }}
              />
              <p className="text-sm font-medium" style={{ color: theme.accent }}>
                {t("loading")}
              </p>
            </div>
          )}
          <iframe
            src={currentUrl}
            className="w-full h-full border-none"
            title="UniBrowser"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>
      ) : (
        /* Home screen */
        <div className="flex-1 screen-scroll px-3 py-3">
          {/* Hero banner */}
          <div
            className="rounded-2xl p-4 mb-4 relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${theme.accent}22, ${theme.accent}08)`,
              border: `1px solid ${theme.border}`,
            }}
          >
            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-widest mb-1 opacity-60" style={{ color: theme.subText }}>
                UniBrowser — by UniOrbi
              </p>
              <h2 className="text-lg font-black leading-tight mb-1" style={{ color: theme.text }}>
                Your Smart Digital Gateway
              </h2>
              <p className="text-[10px] opacity-50 font-urdu" style={{ color: theme.subText }}>
                آپ کا ذہین ڈیجیٹل دروازہ
              </p>
            </div>
            <div
              className="absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-20"
              style={{ background: `radial-gradient(circle, ${theme.accent}, transparent)` }}
            />
          </div>

          {/* Quick access */}
          <p className="text-[11px] font-bold uppercase tracking-wider mb-2 opacity-50" style={{ color: theme.subText }}>
            Quick Access
          </p>
          <div className="grid grid-cols-4 gap-2 mb-4">
            {QUICK_BROWSERS.map((site) => (
              <button
                key={site.name}
                onClick={() => { setUrl(site.url); navigate(site.url); }}
                className="flex flex-col items-center gap-1.5 p-2 rounded-2xl transition-all carved-btn"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  minHeight: "68px",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{
                    background: `${site.color}22`,
                    border: `1px solid ${site.color}33`,
                  }}
                >
                  {site.icon}
                </div>
                <span className="text-[9px] font-semibold leading-none text-center" style={{ color: theme.text }}>
                  {site.name}
                </span>
              </button>
            ))}
          </div>

          {/* Tube-light ticker */}
          <div
            className="rounded-xl overflow-hidden mb-3"
            style={{
              background: `linear-gradient(90deg, ${theme.accent}33, ${theme.accent}11, ${theme.accent}33)`,
              border: `1px solid ${theme.border}`,
            }}
          >
            <div className="py-1.5 px-2 overflow-hidden">
              <p
                className="tube-scroll text-[10px] font-bold whitespace-nowrap"
                style={{
                  color: theme.accent,
                  textShadow: `0 0 8px ${theme.accent}`,
                }}
              >
                🌐 ESOneWorld — A Global Family Platform &nbsp;&nbsp;◈&nbsp;&nbsp; ✦ UniOrbi.com — Your Digital Universe &nbsp;&nbsp;◈&nbsp;&nbsp; ☪ Paradise Islamic Content — Holy Quran, Hadith &nbsp;&nbsp;◈&nbsp;&nbsp; 🔒 Secure · Private · Global Family &nbsp;&nbsp;◈&nbsp;&nbsp; 📧 Admin@DrIrfan.online
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Sites Visited", value: "847", icon: "🌐" },
              { label: "Downloads", value: "23", icon: "⬇" },
              { label: "Bookmarks", value: "12", icon: "🔖" },
            ].map((s) => (
              <div
                key={s.label}
                className="p-3 rounded-xl text-center"
                style={{
                  background: "rgba(255,255,255,0.45)",
                  backdropFilter: "blur(8px)",
                  border: `1px solid ${theme.border}`,
                }}
              >
                <p className="text-lg">{s.icon}</p>
                <p className="text-base font-black" style={{ color: theme.accent }}>{s.value}</p>
                <p className="text-[9px] opacity-60" style={{ color: theme.subText }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
