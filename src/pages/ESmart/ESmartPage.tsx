import { ThemeConfig } from "@/types";
import { UNIORBI_BRANCHES, INTEGRATIONS } from "@/constants";

interface Props {
  theme: ThemeConfig;
  t: (key: string) => string;
}

export default function ESmartPage({ theme, t }: Props) {
  return (
    <div className="flex flex-col h-full">
      {/* UniOrbi Header */}
      <div
        className="flex-shrink-0 px-4 pt-4 pb-3"
        style={{
          background: `linear-gradient(135deg, ${theme.accent}22, transparent)`,
          borderBottom: `1px solid ${theme.border}`,
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl font-black text-white"
            style={{
              background: `linear-gradient(135deg, ${theme.accent}, ${theme.primary})`,
              boxShadow: theme.glow,
            }}
          >
            ◉
          </div>
          <div>
            <h2 className="text-base font-black" style={{ color: theme.text }}>UniOrbi</h2>
            <p className="text-[10px] opacity-60" style={{ color: theme.subText }}>@uniorbi.com — Main Platform</p>
          </div>
          <div className="ml-auto">
            <span
              className="live-badge text-[9px] px-2 py-1 rounded-full font-bold text-white"
              style={{ background: "#22c55e" }}
            >
              ● LIVE
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 screen-scroll px-3 py-3">
        {/* UniOrbi Branches */}
        <p className="text-[11px] font-bold uppercase tracking-wider mb-2 opacity-50" style={{ color: theme.subText }}>
          UniOrbi Branches
        </p>
        <div className="grid grid-cols-4 gap-2 mb-4">
          {UNIORBI_BRANCHES.map((branch) => (
            <a
              key={branch.id}
              href={branch.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 p-2 rounded-2xl transition-all carved-btn"
              style={{ background: "rgba(255,255,255,0.7)", minHeight: "72px" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{
                  background: `${theme.accent}22`,
                  border: `1px solid ${theme.border}`,
                }}
              >
                {branch.icon}
              </div>
              <span className="text-[9px] font-bold text-center leading-tight" style={{ color: theme.text }}>
                {branch.name}
              </span>
            </a>
          ))}
        </div>

        {/* Email accounts */}
        <p className="text-[11px] font-bold uppercase tracking-wider mb-2 opacity-50" style={{ color: theme.subText }}>
          Connected Emails
        </p>
        <div
          className="p-3 rounded-2xl mb-4"
          style={{
            background: "rgba(255,255,255,0.45)",
            border: `1px solid ${theme.border}`,
          }}
        >
          {[
            "admin@drirfan.online",
            "contact@drirfan.online",
            "info@drirfan.online",
            "drirfan5577@drirfan.online",
            "support@drirfan.online",
          ].map((email) => (
            <div
              key={email}
              className="flex items-center gap-2 py-1.5"
              style={{ borderBottom: `1px solid ${theme.border}` }}
            >
              <span className="text-sm">✉️</span>
              <span className="text-xs font-medium" style={{ color: theme.text }}>{email}</span>
            </div>
          ))}
        </div>

        {/* Integrations */}
        <p className="text-[11px] font-bold uppercase tracking-wider mb-2 opacity-50" style={{ color: theme.subText }}>
          {t("integrations")} — Social
        </p>
        <div className="grid grid-cols-4 gap-2 mb-4">
          {INTEGRATIONS.filter(i => i.category === "social").map((intg) => (
            <a
              key={intg.id}
              href={intg.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 p-2 rounded-2xl carved-btn"
              style={{ background: "rgba(255,255,255,0.7)", minHeight: "68px" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold"
                style={{
                  background: `${intg.color}22`,
                  border: `1px solid ${intg.color}44`,
                  color: intg.color,
                }}
              >
                {intg.icon}
              </div>
              <span className="text-[9px] font-bold text-center" style={{ color: theme.text }}>
                {intg.name}
              </span>
            </a>
          ))}
        </div>

        {/* AI tools */}
        <p className="text-[11px] font-bold uppercase tracking-wider mb-2 opacity-50" style={{ color: theme.subText }}>
          AI Tools
        </p>
        <div className="grid grid-cols-4 gap-2 mb-4">
          {INTEGRATIONS.filter(i => i.category === "ai").map((intg) => (
            <a
              key={intg.id}
              href={intg.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 p-2 rounded-2xl carved-btn"
              style={{ background: "rgba(255,255,255,0.7)", minHeight: "68px" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold"
                style={{
                  background: `${intg.color}22`,
                  border: `1px solid ${intg.color}44`,
                  color: intg.color,
                }}
              >
                {intg.icon}
              </div>
              <span className="text-[9px] font-bold text-center" style={{ color: theme.text }}>
                {intg.name}
              </span>
            </a>
          ))}
        </div>

        {/* Hosting */}
        <p className="text-[11px] font-bold uppercase tracking-wider mb-2 opacity-50" style={{ color: theme.subText }}>
          Hosting & Cloud
        </p>
        <div className="grid grid-cols-4 gap-2">
          {INTEGRATIONS.filter(i => i.category === "hosting").map((intg) => (
            <a
              key={intg.id}
              href={intg.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 p-2 rounded-2xl carved-btn"
              style={{ background: "rgba(255,255,255,0.7)", minHeight: "68px" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold"
                style={{
                  background: `${intg.color}22`,
                  border: `1px solid ${intg.color}44`,
                  color: intg.color === "#000000" ? "#555" : intg.color,
                }}
              >
                {intg.icon}
              </div>
              <span className="text-[9px] font-bold text-center" style={{ color: theme.text }}>
                {intg.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
