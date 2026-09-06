import { ThemeConfig, ThemeId } from "@/types";
import { THEMES } from "@/constants";
import { APP_STATS } from "@/constants";

interface Props {
  theme: ThemeConfig;
  t: (key: string) => string;
  currentThemeId: ThemeId;
  onThemeChange: (id: ThemeId) => void;
  onClose: () => void;
}

export default function RightSidebar({ theme, t, currentThemeId, onThemeChange, onClose }: Props) {
  return (
    <div
      className="absolute inset-y-0 right-0 z-50 w-72 flex flex-col"
      style={{
        background: "rgba(255,255,255,0.88)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderLeft: `2px solid ${theme.border}`,
        boxShadow: `-4px 0 30px rgba(0,0,0,0.12)`,
        animation: "slideInRight 0.3s ease forwards",
      }}
    >
      {/* Header */}
      <div
        className="p-4 flex items-center justify-between flex-shrink-0"
        style={{ borderBottom: `1px solid ${theme.border}` }}
      >
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100"
        >
          ✕
        </button>
        <h2 className="text-base font-bold" style={{ color: theme.text }}>
          {t("launcher")}
        </h2>
        <div className="w-8" />
      </div>

      {/* Theme grid */}
      <div className="flex-1 screen-scroll p-3">
        <p className="text-[11px] font-semibold uppercase tracking-wider mb-3 opacity-50 px-1" style={{ color: theme.subText }}>
          Select Theme
        </p>

        <div className="grid grid-cols-2 gap-2 mb-4">
          {THEMES.map((t2) => (
            <button
              key={t2.id}
              onClick={() => onThemeChange(t2.id)}
              className="relative overflow-hidden rounded-2xl h-24 flex flex-col items-center justify-center transition-transform duration-200"
              style={{
                background: t2.bgImage
                  ? `linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.3)), url(${t2.bgImage}) center/cover`
                  : `linear-gradient(135deg, ${t2.bg.split(" ")[1]?.replace("via-", "") || "#fff"}, ${t2.accent})`,
                border: currentThemeId === t2.id
                  ? `2.5px solid ${t2.accent}`
                  : "2px solid rgba(255,255,255,0.3)",
                boxShadow: currentThemeId === t2.id ? t2.glow : "0 2px 8px rgba(0,0,0,0.1)",
                transform: currentThemeId === t2.id ? "scale(1.03)" : "scale(1)",
              }}
            >
              <div className="absolute inset-0 rounded-2xl" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(2px)" }} />
              {currentThemeId === t2.id && (
                <div
                  className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] text-white font-bold"
                  style={{ background: t2.accent }}
                >
                  ✓
                </div>
              )}
              <p className="relative text-[11px] font-bold text-white text-center px-1 leading-tight drop-shadow">
                {t2.name}
              </p>
              <p className="relative text-[9px] text-white/70 text-center mt-0.5">
                {t2.nameUrdu}
              </p>
            </button>
          ))}
        </div>

        {/* Live Stats */}
        <div
          className="rounded-2xl p-3"
          style={{
            background: `linear-gradient(135deg, ${theme.accent}15, ${theme.accent}08)`,
            border: `1px solid ${theme.border}`,
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="live-badge w-2 h-2 rounded-full bg-green-500" />
            <span className="text-[11px] font-bold" style={{ color: theme.accent }}>LIVE STATS</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "Users", value: APP_STATS.totalUsers },
              { label: "Active Now", value: APP_STATS.activeNow },
              { label: "Messages", value: APP_STATS.messagesSent },
              { label: "Communities", value: APP_STATS.communitiesActive },
              { label: "Quran Listeners", value: APP_STATS.quranListeners },
              { label: "Countries", value: APP_STATS.countriesReached },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-sm font-bold glow-text" style={{ color: theme.accent }}>{stat.value}</p>
                <p className="text-[9px] opacity-60" style={{ color: theme.subText }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
