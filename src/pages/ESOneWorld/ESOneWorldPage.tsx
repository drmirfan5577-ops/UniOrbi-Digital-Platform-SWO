import { useState } from "react";
import { ThemeConfig } from "@/types";
import { APP_STATS } from "@/constants";

interface Props {
  theme: ThemeConfig;
  t: (key: string) => string;
  onOpenAdmin: () => void;
  isAdmin: boolean;
}

type WorldTab = "gallery" | "about" | "settings";

export default function ESOneWorldPage({ theme, t, onOpenAdmin, isAdmin }: Props) {
  const [worldTab, setWorldTab] = useState<WorldTab>("gallery");

  const GALLERY_IMAGES = [
    { id: 1, url: "https://images.unsplash.com/photo-1614294149010-950b698f72c0?w=300&h=300&fit=crop", label: "Universe" },
    { id: 2, url: "https://images.unsplash.com/photo-1584824486516-0555a07fc511?w=300&h=300&fit=crop", label: "Faith" },
    { id: 3, url: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=300&h=300&fit=crop", label: "Tech" },
    { id: 4, url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=300&fit=crop", label: "Digital" },
    { id: 5, url: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=300&h=300&fit=crop", label: "Community" },
    { id: 6, url: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=300&h=300&fit=crop", label: "Time" },
    { id: 7, url: "https://images.unsplash.com/photo-1557683316-973673baf926?w=300&h=300&fit=crop", label: "Vision" },
    { id: 8, url: "https://images.unsplash.com/photo-1633114127188-99b5dc90e4b6?w=300&h=300&fit=crop", label: "Connect" },
    { id: 9, url: "https://images.unsplash.com/photo-1563089145-599997674d42?w=300&h=300&fit=crop", label: "Global" },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Tabs */}
      <div
        className="flex px-3 pt-2 gap-1 flex-shrink-0"
        style={{ borderBottom: `1px solid ${theme.border}` }}
      >
        {[
          { id: "gallery", label: t("gallery"), icon: "🖼️" },
          { id: "about", label: t("about"), icon: "ℹ️" },
          { id: "settings", label: t("settings"), icon: "⚙️" },
        ].map((tb) => (
          <button
            key={tb.id}
            onClick={() => setWorldTab(tb.id as WorldTab)}
            className="flex-1 flex items-center justify-center gap-1 py-2 text-xs font-semibold transition-all rounded-t-xl"
            style={{
              color: worldTab === tb.id ? theme.accent : theme.subText,
              borderBottom: worldTab === tb.id ? `2.5px solid ${theme.accent}` : "2.5px solid transparent",
              background: worldTab === tb.id ? "rgba(255,255,255,0.3)" : "transparent",
            }}
          >
            {tb.icon} {tb.label}
          </button>
        ))}
      </div>

      <div className="flex-1 screen-scroll">
        {worldTab === "gallery" && (
          <div className="p-3">
            <div className="grid grid-cols-3 gap-1.5">
              {GALLERY_IMAGES.map((img) => (
                <div
                  key={img.id}
                  className="relative rounded-xl overflow-hidden aspect-square"
                  style={{ border: `1px solid ${theme.border}` }}
                >
                  <img
                    src={img.url}
                    alt={img.label}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-end" style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.4))" }}>
                    <span className="text-[9px] text-white font-bold px-1.5 pb-1">{img.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {worldTab === "about" && (
          <div className="px-4 py-4 flex flex-col gap-4">
            {/* Vision */}
            <div
              className="p-4 rounded-2xl"
              style={{
                background: `linear-gradient(135deg, ${theme.accent}18, ${theme.accent}08)`,
                border: `1px solid ${theme.border}`,
              }}
            >
              <h3 className="text-sm font-black mb-2" style={{ color: theme.accent }}>
                🌟 {t("vision")}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: theme.text }}>
                Neither a Global Village nor a Global Community — <strong>it's a Global Family Platform</strong>. ESOneWorld connects every human being across borders, languages, and cultures in a single unified digital family.
              </p>
              <p className="text-xs font-urdu leading-loose mt-2 opacity-80 text-right" style={{ color: theme.subText }}>
                نہ صرف ایک گلوبل ولیج، نہ صرف ایک گلوبل کمیونٹی — بلکہ ایک عالمی خاندانی پلیٹ فارم
              </p>
            </div>

            {/* Mission */}
            <div
              className="p-4 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.5)",
                border: `1px solid ${theme.border}`,
              }}
            >
              <h3 className="text-sm font-black mb-2" style={{ color: theme.text }}>
                🎯 {t("mission")}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: theme.text }}>
                To create a secure, inclusive, and spiritually grounded digital ecosystem where every individual — regardless of background — can communicate, learn, grow, and connect as part of one global family.
              </p>
            </div>

            {/* Stats */}
            <div
              className="p-4 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.5)", border: `1px solid ${theme.border}` }}
            >
              <h3 className="text-sm font-black mb-3" style={{ color: theme.text }}>📊 Platform Statistics</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Total Users", value: APP_STATS.totalUsers },
                  { label: "Active Now", value: APP_STATS.activeNow },
                  { label: "Messages Sent", value: APP_STATS.messagesSent },
                  { label: "Communities", value: APP_STATS.communitiesActive },
                  { label: "Quran Listeners", value: APP_STATS.quranListeners },
                  { label: "Countries", value: APP_STATS.countriesReached },
                ].map((s) => (
                  <div key={s.label} className="text-center p-2 rounded-xl" style={{ background: `${theme.accent}10` }}>
                    <p className="text-sm font-black glow-text" style={{ color: theme.accent }}>{s.value}</p>
                    <p className="text-[9px] opacity-60 leading-tight mt-0.5" style={{ color: theme.subText }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div
              className="p-4 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.5)", border: `1px solid ${theme.border}` }}
            >
              <h3 className="text-sm font-black mb-3" style={{ color: theme.text }}>
                📧 {t("connected")}
              </h3>
              {[
                { label: "Admin", email: "admin@drirfan.online" },
                { label: "Contact", email: "contact@drirfan.online" },
                { label: "Info", email: "info@drirfan.online" },
                { label: "Support", email: "support@drirfan.online" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-2 py-1.5" style={{ borderBottom: `1px solid ${theme.border}` }}>
                  <span className="text-[10px] font-bold w-16" style={{ color: theme.accent }}>{c.label}:</span>
                  <span className="text-[10px]" style={{ color: theme.text }}>{c.email}</span>
                </div>
              ))}
            </div>

            {/* Legal */}
            <div className="grid grid-cols-2 gap-2">
              {[t("privacy"), t("disclaimer"), t("copyright"), "Warning"].map((label) => (
                <button
                  key={label}
                  className="p-3 rounded-xl text-xs font-semibold text-center carved-btn"
                  style={{
                    background: "rgba(255,255,255,0.6)",
                    color: theme.text,
                  }}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="text-center py-2">
              <p className="text-[10px] opacity-40" style={{ color: theme.subText }}>
                © 2026 ESOneWorld · UniOrbi · Dr. Irfan<br />
                All Rights Reserved · drirfan.online
              </p>
            </div>
          </div>
        )}

        {worldTab === "settings" && (
          <div className="px-4 py-4 flex flex-col gap-3">
            {/* Admin Panel Access */}
            <button
              onClick={onOpenAdmin}
              className="w-full p-4 rounded-2xl flex items-center gap-3 transition-all"
              style={{
                background: `linear-gradient(135deg, ${theme.accent}22, ${theme.accent}11)`,
                border: `2px solid ${theme.accent}44`,
                boxShadow: isAdmin ? theme.glow : "none",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: `linear-gradient(135deg, ${theme.accent}, ${theme.primary})` }}
              >
                🛡️
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-black" style={{ color: theme.text }}>{t("admin")}</p>
                <p className="text-[10px] opacity-60" style={{ color: theme.subText }}>
                  {isAdmin ? "✓ Unlocked — Full Control Active" : "Password: @1122# (default)"}
                </p>
              </div>
              <span className="text-lg">›</span>
            </button>

            {/* Settings items */}
            {[
              { icon: "🌍", label: t("language"), sub: "English / اردو / العربية" },
              { icon: "🎨", label: t("launcher"), sub: "7 themes available" },
              { icon: "🔔", label: t("notifications"), sub: "Push & in-app alerts" },
              { icon: "🔒", label: "Change Password", sub: "Secure your account" },
              { icon: "📤", label: "Export Data", sub: "Download your content" },
              { icon: "🗑️", label: "Clear Cache", sub: "Free up storage" },
            ].map((item) => (
              <button
                key={item.label}
                className="w-full flex items-center gap-3 p-3 rounded-xl text-left"
                style={{
                  background: "rgba(255,255,255,0.45)",
                  border: `1px solid ${theme.border}`,
                }}
              >
                <span className="text-xl">{item.icon}</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold" style={{ color: theme.text }}>{item.label}</p>
                  <p className="text-[10px] opacity-50" style={{ color: theme.subText }}>{item.sub}</p>
                </div>
                <span className="text-sm opacity-40" style={{ color: theme.text }}>›</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
