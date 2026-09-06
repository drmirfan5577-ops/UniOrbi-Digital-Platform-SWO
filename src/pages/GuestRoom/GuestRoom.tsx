import { useState } from "react";
import { ThemeConfig } from "@/types";
import { MOCK_CHATS } from "@/constants";

interface Props {
  theme: ThemeConfig;
  t: (key: string) => string;
}

type GuestTab = "chats" | "calls" | "live";

export default function GuestRoom({ theme, t }: Props) {
  const [activeTab, setActiveTab] = useState<GuestTab>("chats");
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ text: string; mine: boolean; time: string }[]>([
    { text: "السلام علیکم! کیسے ہیں آپ؟", mine: false, time: "10:22" },
    { text: "وعلیکم السلام! الحمدللہ، آپ سنائیں!", mine: true, time: "10:23" },
    { text: "ESOneWorld بہت اچھی لگ رہی ہے 🌟", mine: false, time: "10:24" },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;
    setMessages(prev => [...prev, { text: message, mine: true, time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }) }]);
    setMessage("");
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "جزاک اللہ خیراً 🌸", mine: false, time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }) }]);
    }, 1200);
  };

  const tabs: { id: GuestTab; label: string; icon: string }[] = [
    { id: "chats", label: t("chats"), icon: "💬" },
    { id: "calls", label: t("calls"), icon: "📞" },
    { id: "live", label: "Live", icon: "🔴" },
  ];

  if (activeChat) {
    const chat = MOCK_CHATS.find(c => c.id === activeChat);
    return (
      <div className="flex flex-col h-full">
        {/* Chat header */}
        <div
          className="flex items-center gap-3 px-3 py-2.5 flex-shrink-0"
          style={{ borderBottom: `1px solid ${theme.border}`, background: "rgba(255,255,255,0.3)" }}
        >
          <button onClick={() => setActiveChat(null)} className="text-xl" style={{ color: theme.accent }}>‹</button>
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-base font-bold text-white"
            style={{ background: `linear-gradient(135deg, ${theme.accent}, ${theme.primary})` }}
          >
            {chat?.name.charAt(0)}
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold" style={{ color: theme.text }}>{chat?.name}</p>
            <p className="text-[10px]" style={{ color: chat?.isOnline ? "#22c55e" : theme.subText }}>
              {chat?.isOnline ? "● " + t("online") : t("offline")}
            </p>
          </div>
          <div className="flex gap-3">
            <button className="text-xl" style={{ color: theme.accent }}>📞</button>
            <button className="text-xl" style={{ color: theme.accent }}>📹</button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 screen-scroll px-3 py-2 flex flex-col gap-2">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.mine ? "justify-end" : "justify-start"}`}>
              <div
                className="max-w-[75%] px-3 py-2 rounded-2xl"
                style={{
                  background: msg.mine
                    ? `linear-gradient(135deg, ${theme.accent}, ${theme.primary})`
                    : "rgba(255,255,255,0.7)",
                  color: msg.mine ? "#fff" : theme.text,
                  boxShadow: msg.mine ? `0 2px 12px ${theme.accent}44` : "0 2px 8px rgba(0,0,0,0.06)",
                  border: msg.mine ? "none" : `1px solid ${theme.border}`,
                }}
              >
                <p className="text-sm font-urdu leading-relaxed">{msg.text}</p>
                <p className="text-[9px] mt-1 opacity-60 text-right">{msg.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div
          className="px-3 py-2 flex-shrink-0 flex items-center gap-2"
          style={{ borderTop: `1px solid ${theme.border}`, background: "rgba(255,255,255,0.5)" }}
        >
          <button className="text-xl" style={{ color: theme.accent }}>📎</button>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-3 py-2 rounded-xl text-sm outline-none"
            style={{
              background: "rgba(255,255,255,0.7)",
              border: `1px solid ${theme.border}`,
              color: theme.text,
            }}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="w-9 h-9 rounded-full flex items-center justify-center text-white"
            style={{ background: theme.accent, boxShadow: theme.glow }}
          >
            ➤
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Tabs */}
      <div
        className="flex px-3 pt-2 pb-0 gap-1 flex-shrink-0"
        style={{ borderBottom: `1px solid ${theme.border}` }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="flex-1 flex items-center justify-center gap-1 py-2 text-xs font-semibold rounded-t-xl transition-all"
            style={{
              background: activeTab === tab.id ? "rgba(255,255,255,0.5)" : "transparent",
              color: activeTab === tab.id ? theme.accent : theme.subText,
              borderBottom: activeTab === tab.id ? `2px solid ${theme.accent}` : "2px solid transparent",
            }}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === "chats" && (
        <div className="flex-1 screen-scroll">
          {MOCK_CHATS.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setActiveChat(chat.id)}
              className="w-full flex items-center gap-3 px-3 py-3 border-b transition-all text-left"
              style={{
                borderColor: `${theme.border}`,
                background: "transparent",
              }}
            >
              <div className="relative flex-shrink-0">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-base font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${theme.accent}, ${theme.primary})` }}
                >
                  {chat.isGroup ? "👥" : chat.name.charAt(0)}
                </div>
                {chat.isOnline && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <p className="text-sm font-semibold truncate" style={{ color: theme.text }}>{chat.name}</p>
                  <p className="text-[10px] flex-shrink-0 ml-2" style={{ color: theme.subText }}>
                    {chat.lastTime ? chat.lastTime.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }) : ""}
                  </p>
                </div>
                <p className="text-xs truncate opacity-60 font-urdu leading-loose" style={{ color: theme.subText }}>
                  {chat.lastMessage}
                </p>
              </div>
              {chat.unreadCount > 0 && (
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
                  style={{ background: theme.accent }}
                >
                  {chat.unreadCount > 9 ? "9+" : chat.unreadCount}
                </div>
              )}
            </button>
          ))}
        </div>
      )}

      {activeTab === "calls" && (
        <div className="flex-1 flex flex-col items-center justify-center gap-4 px-4">
          <div className="text-5xl">📞</div>
          <h3 className="text-base font-bold" style={{ color: theme.text }}>Audio & Video Calls</h3>
          <p className="text-sm text-center opacity-60" style={{ color: theme.subText }}>
            Start a new call or continue from chats tab
          </p>
          <div className="grid grid-cols-2 gap-3 w-full">
            {[
              { icon: "🎙️", label: "Voice Call", sub: "HD Audio" },
              { icon: "📹", label: "Video Call", sub: "HD Video" },
              { icon: "📡", label: "Group Call", sub: "Up to 32" },
              { icon: "🔴", label: "Go Live", sub: "Broadcast" },
            ].map((c) => (
              <button
                key={c.label}
                className="p-4 rounded-2xl text-center carved-btn"
                style={{ background: "rgba(255,255,255,0.7)" }}
              >
                <p className="text-2xl mb-1">{c.icon}</p>
                <p className="text-xs font-bold" style={{ color: theme.text }}>{c.label}</p>
                <p className="text-[10px] opacity-50" style={{ color: theme.subText }}>{c.sub}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {activeTab === "live" && (
        <div className="flex-1 screen-scroll px-3 py-3">
          <div className="flex items-center gap-2 mb-3">
            <span className="live-badge w-2.5 h-2.5 rounded-full bg-red-500" />
            <span className="text-sm font-bold text-red-500">LIVE STREAMS</span>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { name: "Dr. Irfan Live", viewers: "2.4K", topic: "Digital Future", emoji: "🎙️" },
              { name: "ESOneWorld Community", viewers: "847", topic: "Family Platform Q&A", emoji: "🌍" },
              { name: "UniOrbi Launch", viewers: "15.2K", topic: "New Features Reveal", emoji: "◉" },
              { name: "Quran Recitation", viewers: "9.1K", topic: "Surah Al-Baqarah", emoji: "☪" },
            ].map((stream) => (
              <div
                key={stream.name}
                className="flex items-center gap-3 p-3 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.45)",
                  border: `1px solid ${theme.border}`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: `${theme.accent}22` }}
                >
                  {stream.emoji}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold" style={{ color: theme.text }}>{stream.name}</p>
                  <p className="text-xs opacity-60" style={{ color: theme.subText }}>{stream.topic}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold" style={{ color: theme.accent }}>{stream.viewers}</p>
                  <p className="text-[10px] opacity-50" style={{ color: theme.subText }}>viewers</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        className="absolute bottom-20 right-4 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl shadow-lg"
        style={{
          background: `linear-gradient(135deg, ${theme.accent}, ${theme.primary})`,
          boxShadow: theme.glow,
        }}
      >
        ✏️
      </button>
    </div>
  );
}
