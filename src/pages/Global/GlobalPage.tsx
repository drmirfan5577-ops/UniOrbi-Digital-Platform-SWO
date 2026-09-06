import { useState } from "react";
import { ThemeConfig } from "@/types";

interface Props {
  theme: ThemeConfig;
  t: (key: string) => string;
}

const COMMUNITIES = [
  { id: "1", name: "ESOneWorld Family", members: "2.4M", icon: "🌍", desc: "Global family platform community", isPublic: true, joined: true },
  { id: "2", name: "UniOrbi Hub", members: "847K", icon: "◉", desc: "Official UniOrbi platform community", isPublic: true, joined: true },
  { id: "3", name: "Islamic Circle", members: "1.2M", icon: "☪", desc: "Quran, Hadith, Islamic discussions", isPublic: true, joined: false },
  { id: "4", name: "Tech Pakistan", members: "340K", icon: "💻", desc: "Technology & innovation in Pakistan", isPublic: true, joined: false },
  { id: "5", name: "Digital Entrepreneurs", members: "125K", icon: "🚀", desc: "Business, startups, digital economy", isPublic: true, joined: false },
];

const GROUPS = [
  { id: "g1", name: "Dr. Irfan's Inner Circle", members: 24, icon: "⭐", lastMsg: "New update coming soon!" },
  { id: "g2", name: "UniOrbi Developers", members: 156, icon: "👨‍💻", lastMsg: "PR merged successfully ✅" },
  { id: "g3", name: "Family Group", members: 18, icon: "👨‍👩‍👧‍👦", lastMsg: "جزاک اللہ خیراً" },
  { id: "g4", name: "Pakistan Tech Network", members: 892, icon: "🇵🇰", lastMsg: "Amazing project!" },
];

export default function GlobalPage({ theme, t }: Props) {
  const [tab, setTab] = useState<"communities" | "groups">("communities");

  return (
    <div className="flex flex-col h-full">
      {/* Tabs */}
      <div
        className="flex px-3 pt-2 gap-1 flex-shrink-0"
        style={{ borderBottom: `1px solid ${theme.border}` }}
      >
        {[
          { id: "communities", label: t("communities"), icon: "🌐" },
          { id: "groups", label: t("groups"), icon: "👥" },
        ].map((tb) => (
          <button
            key={tb.id}
            onClick={() => setTab(tb.id as "communities" | "groups")}
            className="flex-1 flex items-center justify-center gap-1 py-2 text-xs font-semibold transition-all rounded-t-xl"
            style={{
              color: tab === tb.id ? theme.accent : theme.subText,
              borderBottom: tab === tb.id ? `2.5px solid ${theme.accent}` : "2.5px solid transparent",
              background: tab === tb.id ? "rgba(255,255,255,0.3)" : "transparent",
            }}
          >
            {tb.icon} {tb.label}
          </button>
        ))}
      </div>

      <div className="flex-1 screen-scroll px-3 py-3">
        {tab === "communities" ? (
          <div className="flex flex-col gap-3">
            {/* Banner */}
            <div
              className="rounded-2xl p-4 relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${theme.accent}33, ${theme.accent}11)`,
                border: `1px solid ${theme.border}`,
              }}
            >
              <h3 className="text-sm font-black" style={{ color: theme.text }}>Global Communities</h3>
              <p className="text-[10px] opacity-60 mt-0.5" style={{ color: theme.subText }}>
                Neither a village, nor a community — A Global Family
              </p>
              <p className="text-[10px] font-urdu opacity-50 mt-0.5" style={{ color: theme.subText }}>
                نہ گلوبل ولیج، نہ گلوبل کمیونٹی — ایک عالمی خاندان
              </p>
            </div>

            {COMMUNITIES.map((comm) => (
              <div
                key={comm.id}
                className="flex items-start gap-3 p-3 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.45)",
                  border: `1px solid ${theme.border}`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${theme.accent}22, ${theme.accent}11)`,
                    border: `1px solid ${theme.border}`,
                  }}
                >
                  {comm.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <p className="text-sm font-bold" style={{ color: theme.text }}>{comm.name}</p>
                    {comm.isPublic && (
                      <span
                        className="text-[9px] px-1.5 py-0.5 rounded-full"
                        style={{ background: `${theme.accent}22`, color: theme.accent }}
                      >
                        Public
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] opacity-60 mt-0.5" style={{ color: theme.subText }}>{comm.desc}</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-[10px] font-semibold" style={{ color: theme.accent }}>
                      👥 {comm.members} members
                    </p>
                    <button
                      className="text-[10px] font-bold px-3 py-1 rounded-full text-white"
                      style={{
                        background: comm.joined
                          ? "rgba(0,0,0,0.12)"
                          : `linear-gradient(135deg, ${theme.accent}, ${theme.primary})`,
                        color: comm.joined ? theme.subText : "#fff",
                      }}
                    >
                      {comm.joined ? "Joined ✓" : "Join"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <button
              className="w-full flex items-center gap-3 p-3 rounded-2xl mb-1 carved-btn"
              style={{ background: "rgba(255,255,255,0.7)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ background: `${theme.accent}22` }}
              >
                +
              </div>
              <span className="text-sm font-semibold" style={{ color: theme.accent }}>Create New Group</span>
            </button>

            {GROUPS.map((group) => (
              <div
                key={group.id}
                className="flex items-center gap-3 p-3 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.45)",
                  border: `1px solid ${theme.border}`,
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: `${theme.accent}22` }}
                >
                  {group.icon}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold" style={{ color: theme.text }}>{group.name}</p>
                  <p className="text-[10px] truncate opacity-60" style={{ color: theme.subText }}>
                    {group.lastMsg}
                  </p>
                </div>
                <p className="text-[10px]" style={{ color: theme.subText }}>{group.members}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
