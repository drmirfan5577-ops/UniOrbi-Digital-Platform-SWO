import { TabId, ThemeConfig } from "@/types";

interface Props {
  current: TabId;
  onChange: (tab: TabId) => void;
  theme: ThemeConfig;
  t: (key: string) => string;
}

const TABS: { id: TabId; icon: string; key: string; emoji: string }[] = [
  { id: "home", icon: "🏠", key: "home", emoji: "🏠" },
  { id: "guests", icon: "💬", key: "guests", emoji: "💬" },
  { id: "global", icon: "🌐", key: "global", emoji: "🌐" },
  { id: "paradise", icon: "☪", key: "paradise", emoji: "☪" },
  { id: "esmart", icon: "◉", key: "esmart", emoji: "◉" },
  { id: "esonewworld", icon: "⭐", key: "esonewworld", emoji: "⭐" },
];

export default function BottomNav({ current, onChange, theme, t }: Props) {
  return (
    <nav
      className="flex-shrink-0 z-20 relative"
      style={{
        background: theme.navBg,
        backdropFilter: "blur(20px) saturate(200%)",
        WebkitBackdropFilter: "blur(20px) saturate(200%)",
        borderTop: `1.5px solid ${theme.border}`,
        boxShadow: `0 -4px 20px rgba(0,0,0,0.08), 0 -1px 0 rgba(255,255,255,0.5)`,
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      <div className="flex items-center justify-around px-1 py-1">
        {TABS.map((tab) => {
          const isActive = current === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className="flex flex-col items-center gap-0.5 min-w-[44px] min-h-[52px] justify-center rounded-xl transition-all duration-200 px-1"
              style={{
                background: isActive
                  ? `linear-gradient(135deg, ${theme.glass}, rgba(255,255,255,0.35))`
                  : "transparent",
                border: isActive ? `1px solid ${theme.border}` : "1px solid transparent",
                boxShadow: isActive ? theme.glow : "none",
                transform: isActive ? "scale(1.05) translateY(-2px)" : "scale(1)",
              }}
            >
              {/* Icon */}
              <div
                className="text-xl leading-none"
                style={{
                  filter: isActive
                    ? `drop-shadow(0 0 6px ${theme.accent})`
                    : "none",
                }}
              >
                {tab.emoji === "☪" ? (
                  <span style={{ fontSize: "18px", fontFamily: "serif" }}>☪</span>
                ) : tab.emoji === "◉" ? (
                  <span
                    style={{
                      fontSize: "20px",
                      color: isActive ? theme.accent : theme.subText,
                      fontWeight: "bold",
                    }}
                  >
                    ◉
                  </span>
                ) : (
                  <span>{tab.emoji}</span>
                )}
              </div>

              {/* Label */}
              <span
                className="text-[9px] font-medium leading-none text-center"
                style={{
                  color: isActive ? theme.accent : theme.subText,
                  fontWeight: isActive ? 700 : 500,
                  maxWidth: "48px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {t(tab.key)}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
