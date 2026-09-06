import { useState } from "react";
import { ThemeConfig, ThemeId, Integration } from "@/types";
import { INTEGRATIONS, THEMES, ADMIN_PASSWORD } from "@/constants";

interface Props {
  theme: ThemeConfig;
  t: (key: string) => string;
  isUnlocked: boolean;
  onUnlock: (pw: string) => boolean;
  onLock: () => void;
  currentThemeId: ThemeId;
  onThemeChange: (id: ThemeId) => void;
}

type AdminTab = "dashboard" | "themes" | "integrations" | "add" | "users" | "control";

export default function AdminPanel({
  theme, t, isUnlocked, onUnlock, onLock, currentThemeId, onThemeChange
}: Props) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [adminTab, setAdminTab] = useState<AdminTab>("dashboard");
  const [integrations, setIntegrations] = useState<Integration[]>(INTEGRATIONS);
  const [newIntName, setNewIntName] = useState("");
  const [newIntUrl, setNewIntUrl] = useState("");

  const handleUnlock = () => {
    const ok = onUnlock(password);
    if (!ok) {
      setError("Incorrect password. Default: @1122#");
      setPassword("");
    }
  };

  const toggleIntegration = (id: string) => {
    setIntegrations(prev => prev.map(i => i.id === id ? { ...i, enabled: !i.enabled } : i));
  };

  const addIntegration = () => {
    if (!newIntName || !newIntUrl) return;
    setIntegrations(prev => [...prev, {
      id: Date.now().toString(),
      name: newIntName,
      category: "website",
      url: newIntUrl,
      icon: "🔗",
      enabled: true,
      color: theme.accent,
    }]);
    setNewIntName("");
    setNewIntUrl("");
  };

  if (!isUnlocked) {
    return (
      <div className="h-full flex flex-col items-center justify-center px-6">
        <div
          className="w-full max-w-sm p-6 rounded-3xl"
          style={{
            background: "rgba(255,255,255,0.35)",
            backdropFilter: "blur(20px)",
            border: `2px solid ${theme.border}`,
            boxShadow: theme.glow,
          }}
        >
          <div className="text-center mb-5">
            <div
              className="w-16 h-16 rounded-2xl mx-auto mb-3 flex items-center justify-center text-3xl"
              style={{ background: `linear-gradient(135deg, ${theme.accent}, ${theme.primary})` }}
            >
              🛡️
            </div>
            <h2 className="text-lg font-black" style={{ color: theme.text }}>Admin Panel</h2>
            <p className="text-xs opacity-60 mt-1" style={{ color: theme.subText }}>
              Full Command & Control Access
            </p>
            <p className="text-[10px] font-urdu opacity-50 mt-0.5" style={{ color: theme.subText }}>
              مکمل کنٹرول پینل
            </p>
          </div>

          <label className="text-xs font-semibold block mb-1.5" style={{ color: theme.text }}>
            🔐 Admin Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password..."
            className="w-full px-4 py-3 rounded-xl text-sm outline-none mb-3"
            style={{
              background: "rgba(255,255,255,0.6)",
              border: `1px solid ${theme.border}`,
              color: theme.text,
            }}
            onKeyDown={(e) => e.key === "Enter" && handleUnlock()}
          />

          {error && <p className="text-red-500 text-xs mb-3">{error}</p>}

          <button
            onClick={handleUnlock}
            className="w-full py-3 rounded-xl text-sm font-bold text-white transition-all"
            style={{
              background: `linear-gradient(135deg, ${theme.accent}, ${theme.primary})`,
              boxShadow: theme.glow,
            }}
          >
            🔓 Unlock Admin Panel
          </button>

          <p className="text-[10px] opacity-40 text-center mt-3" style={{ color: theme.subText }}>
            Default password: @1122#
          </p>
        </div>
      </div>
    );
  }

  const ADMIN_TABS: { id: AdminTab; icon: string; label: string }[] = [
    { id: "dashboard", icon: "📊", label: "Dashboard" },
    { id: "themes", icon: "🎨", label: "Themes" },
    { id: "integrations", icon: "🔗", label: "Integrations" },
    { id: "add", icon: "➕", label: "Add More" },
    { id: "users", icon: "👥", label: "Users" },
    { id: "control", icon: "⚙️", label: "Control" },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Admin header */}
      <div
        className="px-4 py-3 flex items-center justify-between flex-shrink-0"
        style={{
          background: `linear-gradient(135deg, ${theme.accent}33, ${theme.accent}11)`,
          borderBottom: `1px solid ${theme.border}`,
        }}
      >
        <div>
          <h2 className="text-sm font-black" style={{ color: theme.text }}>
            🛡️ Admin Panel
          </h2>
          <p className="text-[10px]" style={{ color: theme.accent }}>Full Access Unlocked ✓</p>
        </div>
        <button
          onClick={onLock}
          className="text-xs px-3 py-1.5 rounded-full font-semibold"
          style={{ background: "#ef444422", color: "#ef4444", border: "1px solid #ef444444" }}
        >
          🔒 Lock
        </button>
      </div>

      {/* Admin tabs */}
      <div
        className="flex overflow-x-auto px-3 pt-2 gap-1 flex-shrink-0 pb-0"
        style={{ borderBottom: `1px solid ${theme.border}` }}
      >
        {ADMIN_TABS.map((tb) => (
          <button
            key={tb.id}
            onClick={() => setAdminTab(tb.id)}
            className="flex-shrink-0 flex items-center gap-1 px-3 py-1.5 text-[10px] font-semibold rounded-t-lg transition-all whitespace-nowrap"
            style={{
              color: adminTab === tb.id ? theme.accent : theme.subText,
              borderBottom: adminTab === tb.id ? `2px solid ${theme.accent}` : "2px solid transparent",
              background: adminTab === tb.id ? "rgba(255,255,255,0.4)" : "transparent",
            }}
          >
            {tb.icon} {tb.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 screen-scroll px-3 py-3">
        {adminTab === "dashboard" && (
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-2">
              {[
                { icon: "👥", label: "Total Users", value: "2.4M+", color: "#3b82f6" },
                { icon: "💬", label: "Messages Today", value: "847K", color: "#22c55e" },
                { icon: "🌐", label: "Active Sessions", value: "12.4K", color: theme.accent },
                { icon: "⚠️", label: "Pending Reports", value: "3", color: "#f59e0b" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-3 rounded-xl"
                  style={{ background: `${stat.color}18`, border: `1px solid ${stat.color}33` }}
                >
                  <p className="text-lg mb-1">{stat.icon}</p>
                  <p className="text-base font-black" style={{ color: stat.color }}>{stat.value}</p>
                  <p className="text-[9px] opacity-60" style={{ color: theme.subText }}>{stat.label}</p>
                </div>
              ))}
            </div>

            <div
              className="p-3 rounded-xl"
              style={{ background: "rgba(255,255,255,0.5)", border: `1px solid ${theme.border}` }}
            >
              <p className="text-xs font-bold mb-2" style={{ color: theme.text }}>Quick Actions</p>
              <div className="grid grid-cols-3 gap-2">
                {[
                  "Broadcast Msg",
                  "Enable Maintenance",
                  "Export Users",
                  "Clear Cache",
                  "Reset Stats",
                  "Backup Data",
                ].map((action) => (
                  <button
                    key={action}
                    className="py-2 px-1 rounded-lg text-[9px] font-semibold text-center carved-btn"
                    style={{ background: "rgba(255,255,255,0.7)", color: theme.text }}
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {adminTab === "themes" && (
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold opacity-60 mb-1" style={{ color: theme.subText }}>
              Select & customize launcher themes
            </p>
            {THEMES.map((th) => (
              <button
                key={th.id}
                onClick={() => onThemeChange(th.id)}
                className="flex items-center gap-3 p-3 rounded-xl transition-all"
                style={{
                  background: currentThemeId === th.id ? `${theme.accent}18` : "rgba(255,255,255,0.5)",
                  border: `1.5px solid ${currentThemeId === th.id ? theme.accent : theme.border}`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex-shrink-0"
                  style={{
                    background: th.bgImage
                      ? `url(${th.bgImage}) center/cover`
                      : `linear-gradient(135deg, ${th.accent}, ${th.primary})`,
                    border: `1px solid ${th.border}`,
                  }}
                />
                <div className="flex-1 text-left">
                  <p className="text-sm font-bold" style={{ color: theme.text }}>{th.name}</p>
                  <p className="text-[10px] font-urdu" style={{ color: theme.subText }}>{th.nameUrdu}</p>
                </div>
                {currentThemeId === th.id && (
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ background: theme.accent }}>
                    Active ✓
                  </span>
                )}
              </button>
            ))}
          </div>
        )}

        {adminTab === "integrations" && (
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold opacity-60 mb-1" style={{ color: theme.subText }}>
              Enable / Disable integrations
            </p>
            {integrations.map((intg) => (
              <div
                key={intg.id}
                className="flex items-center gap-3 p-3 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.5)",
                  border: `1px solid ${theme.border}`,
                  opacity: intg.enabled ? 1 : 0.5,
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ background: `${intg.color}22`, color: intg.color === "#000000" ? "#555" : intg.color }}
                >
                  {intg.icon}
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold" style={{ color: theme.text }}>{intg.name}</p>
                  <p className="text-[9px] opacity-50 truncate" style={{ color: theme.subText }}>{intg.url}</p>
                </div>
                <button
                  onClick={() => toggleIntegration(intg.id)}
                  className="w-11 h-6 rounded-full relative transition-all"
                  style={{
                    background: intg.enabled ? theme.accent : "rgba(0,0,0,0.15)",
                  }}
                >
                  <span
                    className="absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all"
                    style={{
                      left: intg.enabled ? "calc(100% - 22px)" : "2px",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                    }}
                  />
                </button>
              </div>
            ))}
          </div>
        )}

        {adminTab === "add" && (
          <div className="flex flex-col gap-3">
            <div
              className="p-4 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.5)", border: `1px solid ${theme.border}` }}
            >
              <h3 className="text-sm font-bold mb-3" style={{ color: theme.text }}>
                ➕ Add Integration
              </h3>
              <input
                type="text"
                value={newIntName}
                onChange={(e) => setNewIntName(e.target.value)}
                placeholder="App/Site name..."
                className="w-full px-3 py-2 rounded-lg text-xs outline-none mb-2"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  border: `1px solid ${theme.border}`,
                  color: theme.text,
                }}
              />
              <input
                type="url"
                value={newIntUrl}
                onChange={(e) => setNewIntUrl(e.target.value)}
                placeholder="https://..."
                className="w-full px-3 py-2 rounded-lg text-xs outline-none mb-3"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  border: `1px solid ${theme.border}`,
                  color: theme.text,
                }}
              />
              <button
                onClick={addIntegration}
                className="w-full py-2 rounded-lg text-xs font-bold text-white"
                style={{ background: `linear-gradient(135deg, ${theme.accent}, ${theme.primary})` }}
              >
                Add Integration
              </button>
            </div>

            <div
              className="p-4 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.5)", border: `1px solid ${theme.border}` }}
            >
              <h3 className="text-sm font-bold mb-3" style={{ color: theme.text }}>
                ⚡ One-Click Deploy
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { name: "Netlify", icon: "⬡", color: "#00C7B7" },
                  { name: "Vercel", icon: "▲", color: "#000" },
                  { name: "Firebase", icon: "🔥", color: "#FFCA28" },
                  { name: "GitHub", icon: "⊛", color: "#24292E" },
                  { name: "OnSpace", icon: "◈", color: "#6366f1" },
                  { name: "Cloudflare", icon: "☁", color: "#F48120" },
                ].map((d) => (
                  <button
                    key={d.name}
                    className="py-3 rounded-xl text-center carved-btn"
                    style={{ background: "rgba(255,255,255,0.7)" }}
                  >
                    <p className="text-lg" style={{ color: d.color }}>{d.icon}</p>
                    <p className="text-[9px] font-bold mt-1" style={{ color: theme.text }}>{d.name}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {adminTab === "users" && (
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search users..."
                className="flex-1 px-3 py-2 rounded-xl text-xs outline-none"
                style={{ background: "rgba(255,255,255,0.6)", border: `1px solid ${theme.border}`, color: theme.text }}
              />
              <button
                className="px-3 py-2 rounded-xl text-xs font-semibold text-white"
                style={{ background: theme.accent }}
              >
                Search
              </button>
            </div>
            {["Ahmad Khan (+92-300-1234567)", "Sara Ali (+92-321-9876543)", "Usman Malik (+92-333-4567890)"].map((user) => (
              <div
                key={user}
                className="flex items-center gap-3 p-3 rounded-xl"
                style={{ background: "rgba(255,255,255,0.5)", border: `1px solid ${theme.border}` }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: theme.accent }}
                >
                  {user.charAt(0)}
                </div>
                <p className="flex-1 text-xs font-medium" style={{ color: theme.text }}>{user}</p>
                <div className="flex gap-1">
                  <button className="text-[10px] px-2 py-1 rounded text-blue-500 border border-blue-200 bg-blue-50">View</button>
                  <button className="text-[10px] px-2 py-1 rounded text-red-500 border border-red-200 bg-red-50">Ban</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {adminTab === "control" && (
          <div className="flex flex-col gap-3">
            {[
              { icon: "🌐", label: "Maintenance Mode", sub: "Disable public access temporarily", toggle: false },
              { icon: "🔔", label: "Push Notifications", sub: "Enable global push alerts", toggle: true },
              { icon: "📖", label: "Quran Audio API", sub: "Stream from alquran.cloud", toggle: true },
              { icon: "🤖", label: "AI Responses", sub: "Smart auto-reply system", toggle: false },
              { icon: "📊", label: "Analytics", sub: "Track user behavior", toggle: true },
              { icon: "🔐", label: "Two-Factor Auth", sub: "Require OTP for login", toggle: true },
              { icon: "💾", label: "Auto Backup", sub: "Daily data backup", toggle: true },
              { icon: "🌍", label: "Multi-language", sub: "Enable Urdu/Arabic/English", toggle: true },
            ].map((ctrl) => (
              <div
                key={ctrl.label}
                className="flex items-center gap-3 p-3 rounded-xl"
                style={{ background: "rgba(255,255,255,0.5)", border: `1px solid ${theme.border}` }}
              >
                <span className="text-xl flex-shrink-0">{ctrl.icon}</span>
                <div className="flex-1">
                  <p className="text-xs font-bold" style={{ color: theme.text }}>{ctrl.label}</p>
                  <p className="text-[9px] opacity-50" style={{ color: theme.subText }}>{ctrl.sub}</p>
                </div>
                <div
                  className="w-11 h-6 rounded-full relative cursor-pointer transition-all"
                  style={{ background: ctrl.toggle ? theme.accent : "rgba(0,0,0,0.15)" }}
                >
                  <span
                    className="absolute top-0.5 w-5 h-5 rounded-full bg-white"
                    style={{
                      left: ctrl.toggle ? "calc(100% - 22px)" : "2px",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
