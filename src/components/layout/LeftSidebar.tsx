import { ThemeConfig, Language } from "@/types";
import { LANGUAGES } from "@/constants";
import { User } from "@/types";

interface Props {
  theme: ThemeConfig;
  t: (key: string) => string;
  user: User | null;
  lang: Language;
  onLanguageChange: (l: Language) => void;
  onClose: () => void;
  onLogout: () => void;
  onOpenAdmin: () => void;
  isAdmin: boolean;
}

export default function LeftSidebar({ theme, t, user, lang, onLanguageChange, onClose, onLogout, onOpenAdmin, isAdmin }: Props) {
  const menuItems = [
    { icon: "👤", label: t("about"), action: () => {} },
    { icon: "🌍", label: t("language"), action: () => {} },
    { icon: "🎨", label: t("launcher"), action: () => {} },
    { icon: "🔔", label: t("notifications"), action: () => {} },
    { icon: "🔒", label: t("privacy"), action: () => {} },
    { icon: "⚖️", label: t("disclaimer"), action: () => {} },
    { icon: "©️", label: t("copyright"), action: () => {} },
  ];

  return (
    <div
      className="absolute inset-y-0 left-0 z-50 w-72 flex flex-col sidebar-enter"
      style={{
        background: "rgba(255,255,255,0.88)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderRight: `2px solid ${theme.border}`,
        boxShadow: `4px 0 30px rgba(0,0,0,0.12)`,
      }}
    >
      {/* Header */}
      <div
        className="p-4 flex-shrink-0"
        style={{
          background: `linear-gradient(135deg, ${theme.accent}22, ${theme.accent}11)`,
          borderBottom: `1px solid ${theme.border}`,
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-bold" style={{ color: theme.text }}>ESOneWorld</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
          >
            ✕
          </button>
        </div>
        {user ? (
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white"
              style={{ background: `linear-gradient(135deg, ${theme.accent}, ${theme.primary})` }}
            >
              {user.name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: theme.text }}>{user.name}</p>
              <p className="text-xs opacity-60" style={{ color: theme.subText }}>{user.phone}</p>
            </div>
          </div>
        ) : (
          <div className="text-sm opacity-60" style={{ color: theme.subText }}>Not logged in</div>
        )}
      </div>

      {/* Language switcher */}
      <div
        className="px-4 py-3 flex-shrink-0"
        style={{ borderBottom: `1px solid ${theme.border}` }}
      >
        <p className="text-[11px] font-semibold uppercase tracking-wider mb-2 opacity-50" style={{ color: theme.subText }}>
          {t("language")}
        </p>
        <div className="flex gap-2">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              onClick={() => onLanguageChange(l.code as Language)}
              className="flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all"
              style={{
                background: lang === l.code ? theme.accent : "rgba(0,0,0,0.05)",
                color: lang === l.code ? "#fff" : theme.text,
                border: `1px solid ${lang === l.code ? theme.accent : "transparent"}`,
              }}
            >
              {l.nativeName}
            </button>
          ))}
        </div>
      </div>

      {/* Menu items */}
      <div className="flex-1 overflow-y-auto py-2 screen-scroll">
        {menuItems.map((item, i) => (
          <button
            key={i}
            onClick={item.action}
            className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-black/5 transition-colors"
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm font-medium" style={{ color: theme.text }}>{item.label}</span>
          </button>
        ))}

        {/* Admin Panel */}
        <button
          onClick={onOpenAdmin}
          className="w-full flex items-center gap-3 px-4 py-3 text-left transition-colors"
          style={{ background: `${theme.accent}15` }}
        >
          <span className="text-lg">🛡️</span>
          <div>
            <span className="text-sm font-semibold" style={{ color: theme.accent }}>
              {t("admin")}
            </span>
            {isAdmin && (
              <span className="ml-2 text-[10px] bg-green-500 text-white px-1.5 py-0.5 rounded-full">ACTIVE</span>
            )}
          </div>
        </button>
      </div>

      {/* Contact */}
      <div
        className="p-4 flex-shrink-0"
        style={{ borderTop: `1px solid ${theme.border}`, background: "rgba(0,0,0,0.02)" }}
      >
        <p className="text-[10px] font-medium mb-1" style={{ color: theme.accent }}>
          {t("contact")}
        </p>
        <p className="text-[10px] opacity-60 leading-relaxed" style={{ color: theme.subText }}>
          admin@drirfan.online<br />
          support@drirfan.online<br />
          info@drirfan.online
        </p>
        <p className="text-[10px] opacity-40 mt-2" style={{ color: theme.subText }}>
          © 2026 ESOneWorld by Dr. Irfan
        </p>
        {user && (
          <button
            onClick={onLogout}
            className="mt-2 w-full py-1.5 rounded-lg text-xs font-semibold text-red-500 border border-red-200 hover:bg-red-50 transition-colors"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}
