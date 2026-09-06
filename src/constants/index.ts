import { ThemeConfig, Integration } from "@/types";
import bgCrimson from "@/assets/bg-crimson-glass.jpg";
import bgEmerald from "@/assets/bg-emerald-glass.jpg";
import bgWhite from "@/assets/bg-white-crystal.jpg";
import bgParadise from "@/assets/bg-paradise.jpg";
import bgHolographic from "@/assets/bg-holographic.jpg";

export const ADMIN_PASSWORD = "@1122#";

export const APP_NAME = "ESOneWorld";
export const PLATFORM_NAME = "UniOrbi";

export const THEMES: ThemeConfig[] = [
  {
    id: "crimson-glass",
    name: "Crimson Crystal",
    nameUrdu: "کرمسن کرسٹل",
    bg: "from-red-50 via-white to-rose-50",
    bgImage: bgCrimson,
    primary: "rgba(220,38,38,0.85)",
    accent: "#dc2626",
    glass: "rgba(255,255,255,0.25)",
    glassHover: "rgba(255,255,255,0.40)",
    text: "#1a0000",
    subText: "#6b2020",
    border: "rgba(220,38,38,0.3)",
    glow: "0 0 20px rgba(220,38,38,0.6), 0 0 40px rgba(220,38,38,0.3)",
    navBg: "rgba(255,240,240,0.85)",
  },
  {
    id: "emerald-glass",
    name: "Emerald Storm",
    nameUrdu: "زمرد طوفان",
    bg: "from-emerald-50 via-white to-teal-50",
    bgImage: bgEmerald,
    primary: "rgba(5,150,105,0.9)",
    accent: "#059669",
    glass: "rgba(255,255,255,0.22)",
    glassHover: "rgba(255,255,255,0.38)",
    text: "#001a0d",
    subText: "#14532d",
    border: "rgba(5,150,105,0.35)",
    glow: "0 0 20px rgba(16,185,129,0.7), 0 0 40px rgba(16,185,129,0.3)",
    navBg: "rgba(240,255,248,0.88)",
  },
  {
    id: "white-crystal",
    name: "White Crystal",
    nameUrdu: "سفید بلور",
    bg: "from-white via-slate-50 to-white",
    bgImage: bgWhite,
    primary: "rgba(100,116,139,0.9)",
    accent: "#475569",
    glass: "rgba(255,255,255,0.35)",
    glassHover: "rgba(255,255,255,0.55)",
    text: "#0f172a",
    subText: "#475569",
    border: "rgba(148,163,184,0.4)",
    glow: "0 0 20px rgba(255,255,255,0.9), 0 0 40px rgba(200,220,255,0.5)",
    navBg: "rgba(255,255,255,0.92)",
  },
  {
    id: "paradise",
    name: "Paradise Gold",
    nameUrdu: "جنت طلائی",
    bg: "from-amber-50 via-white to-yellow-50",
    bgImage: bgParadise,
    primary: "rgba(217,119,6,0.9)",
    accent: "#b45309",
    glass: "rgba(255,248,230,0.30)",
    glassHover: "rgba(255,248,230,0.50)",
    text: "#1c0a00",
    subText: "#78350f",
    border: "rgba(217,119,6,0.35)",
    glow: "0 0 20px rgba(251,191,36,0.7), 0 0 40px rgba(251,191,36,0.3)",
    navBg: "rgba(255,251,235,0.90)",
  },
  {
    id: "holographic",
    name: "Holographic",
    nameUrdu: "ہولوگرافک",
    bg: "from-violet-50 via-white to-cyan-50",
    bgImage: bgHolographic,
    primary: "rgba(139,92,246,0.88)",
    accent: "#7c3aed",
    glass: "rgba(255,255,255,0.28)",
    glassHover: "rgba(255,255,255,0.45)",
    text: "#0a0020",
    subText: "#4c1d95",
    border: "rgba(139,92,246,0.35)",
    glow: "0 0 20px rgba(139,92,246,0.7), 0 0 40px rgba(6,182,212,0.4)",
    navBg: "rgba(245,243,255,0.90)",
  },
  {
    id: "ocean-glass",
    name: "Ocean Glass",
    nameUrdu: "سمندری شیشہ",
    bg: "from-sky-50 via-white to-blue-50",
    bgImage: undefined,
    primary: "rgba(14,165,233,0.88)",
    accent: "#0284c7",
    glass: "rgba(255,255,255,0.28)",
    glassHover: "rgba(255,255,255,0.45)",
    text: "#000d1a",
    subText: "#075985",
    border: "rgba(14,165,233,0.35)",
    glow: "0 0 20px rgba(14,165,233,0.7), 0 0 40px rgba(14,165,233,0.3)",
    navBg: "rgba(240,249,255,0.90)",
  },
  {
    id: "dark-galaxy",
    name: "Dark Galaxy",
    nameUrdu: "تاریک کہکشاں",
    bg: "from-slate-900 via-purple-950 to-slate-900",
    bgImage: undefined,
    primary: "rgba(168,85,247,0.9)",
    accent: "#a855f7",
    glass: "rgba(255,255,255,0.08)",
    glassHover: "rgba(255,255,255,0.15)",
    text: "#f8fafc",
    subText: "#c4b5fd",
    border: "rgba(168,85,247,0.3)",
    glow: "0 0 20px rgba(168,85,247,0.8), 0 0 50px rgba(168,85,247,0.4)",
    navBg: "rgba(15,10,30,0.92)",
  },
];

export const INTEGRATIONS: Integration[] = [
  { id: "yt", name: "YouTube", category: "social", url: "https://youtube.com", icon: "▶", enabled: true, color: "#FF0000" },
  { id: "wa", name: "WhatsApp", category: "social", url: "https://web.whatsapp.com", icon: "💬", enabled: true, color: "#25D366" },
  { id: "fb", name: "Facebook", category: "social", url: "https://facebook.com", icon: "f", enabled: true, color: "#1877F2" },
  { id: "tw", name: "Twitter X", category: "social", url: "https://twitter.com", icon: "𝕏", enabled: true, color: "#000000" },
  { id: "tt", name: "TikTok", category: "social", url: "https://tiktok.com", icon: "♪", enabled: true, color: "#010101" },
  { id: "ig", name: "Instagram", category: "social", url: "https://instagram.com", icon: "📷", enabled: true, color: "#E1306C" },
  { id: "tg", name: "Telegram", category: "social", url: "https://telegram.org", icon: "✈", enabled: true, color: "#2CA5E0" },
  { id: "uo", name: "UniOrbi", category: "website", url: "https://uniorbi.com", icon: "◉", enabled: true, color: "#059669" },
  { id: "di", name: "DrIrfan.online", category: "website", url: "https://drirfan.online", icon: "🌐", enabled: true, color: "#7c3aed" },
  { id: "nc", name: "Namecheap", category: "hosting", url: "https://namecheap.com", icon: "🔖", enabled: true, color: "#DE3723" },
  { id: "nl", name: "Netlify", category: "hosting", url: "https://netlify.com", icon: "⬡", enabled: true, color: "#00C7B7" },
  { id: "vc", name: "Vercel", category: "hosting", url: "https://vercel.com", icon: "▲", enabled: true, color: "#000000" },
  { id: "gh", name: "GitHub", category: "hosting", url: "https://github.com", icon: "⊛", enabled: true, color: "#24292E" },
  { id: "os", name: "OnSpace", category: "hosting", url: "https://onspace.ai", icon: "◈", enabled: true, color: "#6366f1" },
  { id: "cl", name: "Claude", category: "ai", url: "https://claude.ai", icon: "🧠", enabled: true, color: "#D97706" },
  { id: "cg", name: "ChatGPT", category: "ai", url: "https://chatgpt.com", icon: "⚙", enabled: true, color: "#10a37f" },
  { id: "gm", name: "Gemini", category: "ai", url: "https://gemini.google.com", icon: "✦", enabled: true, color: "#4285F4" },
  { id: "px", name: "Perplexity", category: "ai", url: "https://perplexity.ai", icon: "∞", enabled: true, color: "#20B2AA" },
  { id: "gs", name: "GenSpark", category: "ai", url: "https://genspark.ai", icon: "★", enabled: true, color: "#FF6B35" },
  { id: "sb", name: "Supabase", category: "hosting", url: "https://supabase.com", icon: "⚡", enabled: true, color: "#3ECF8E" },
  { id: "cf", name: "Cloudflare", category: "hosting", url: "https://cloudflare.com", icon: "☁", enabled: true, color: "#F48120" },
  { id: "zo", name: "Zoho", category: "ai", url: "https://zoho.com", icon: "Z", enabled: true, color: "#E42527" },
  { id: "fb2", name: "Firebase", category: "hosting", url: "https://firebase.google.com", icon: "🔥", enabled: true, color: "#FFCA28" },
];

export const LANGUAGES = [
  { code: "en", name: "English", nativeName: "English", dir: "ltr" },
  { code: "ur", name: "Urdu", nativeName: "اردو", dir: "rtl" },
  { code: "ar", name: "Arabic", nativeName: "العربية", dir: "rtl" },
];

export const UNIORBI_BRANCHES = [
  { id: "unifeel", name: "UniFeel", icon: "💚", desc: "Feel the UniVerse", url: "https://uniorbi.com/unifeel" },
  { id: "uniedge", name: "UniEdge", icon: "⚡", desc: "Cutting edge tech", url: "https://uniorbi.com/uniedge" },
  { id: "uniweb", name: "UniWeb", icon: "🌐", desc: "Web solutions", url: "https://uniorbi.com/uniweb" },
  { id: "unihome", name: "UniHome", icon: "🏠", desc: "Smart home hub", url: "https://uniorbi.com/unihome" },
  { id: "unihost", name: "UniHost", icon: "☁", desc: "Cloud hosting", url: "https://uniorbi.com/unihost" },
  { id: "unimail", name: "UniMail", icon: "✉", desc: "@uniorbi.com emails", url: "https://mail.uniorbi.com" },
  { id: "uninews", name: "UniNews", icon: "📰", desc: "Latest news feed", url: "https://uniorbi.com/uninews" },
  { id: "uniflow", name: "UniFlow", icon: "🔄", desc: "Workflow automation", url: "https://uniorbi.com/uniflow" },
];

export const QUICK_BROWSERS = [
  { name: "Google", url: "https://google.com", icon: "🔍", color: "#4285F4" },
  { name: "Bing", url: "https://bing.com", icon: "🔎", color: "#008373" },
  { name: "DuckDuckGo", url: "https://duckduckgo.com", icon: "🦆", color: "#DE5833" },
  { name: "YouTube", url: "https://youtube.com", icon: "▶", color: "#FF0000" },
  { name: "Wikipedia", url: "https://wikipedia.org", icon: "📖", color: "#000" },
  { name: "UniOrbi", url: "https://uniorbi.com", icon: "◉", color: "#059669" },
  { name: "DrIrfan", url: "https://drirfan.online", icon: "🌐", color: "#7c3aed" },
  { name: "Maps", url: "https://maps.google.com", icon: "📍", color: "#EA4335" },
];

export const QURAN_SURAHS = [
  { number: 1, name: "Al-Fatihah", nameAr: "الفاتحة", nameUrdu: "الفاتحہ", verses: 7 },
  { number: 2, name: "Al-Baqarah", nameAr: "البقرة", nameUrdu: "البقرہ", verses: 286 },
  { number: 3, name: "Al-Imran", nameAr: "آل عمران", nameUrdu: "آل عمران", verses: 200 },
  { number: 4, name: "An-Nisa", nameAr: "النساء", nameUrdu: "النساء", verses: 176 },
  { number: 5, name: "Al-Maidah", nameAr: "المائدة", nameUrdu: "المائدہ", verses: 120 },
  { number: 36, name: "Ya-Sin", nameAr: "يس", nameUrdu: "یٰسین", verses: 83 },
  { number: 55, name: "Ar-Rahman", nameAr: "الرحمن", nameUrdu: "الرحمٰن", verses: 78 },
  { number: 67, name: "Al-Mulk", nameAr: "الملك", nameUrdu: "الملک", verses: 30 },
  { number: 112, name: "Al-Ikhlas", nameAr: "الإخلاص", nameUrdu: "الاخلاص", verses: 4 },
  { number: 113, name: "Al-Falaq", nameAr: "الفلق", nameUrdu: "الفلق", verses: 5 },
  { number: 114, name: "An-Nas", nameAr: "الناس", nameUrdu: "الناس", verses: 6 },
];

export const MOCK_CHATS: import("@/types").Chat[] = [
  { id: "1", name: "Ahmad Khan", unreadCount: 3, isOnline: true, isGroup: false, lastMessage: "السلام علیکم! کیسے ہیں؟", lastTime: new Date() },
  { id: "2", name: "UniOrbi Team", unreadCount: 12, isOnline: true, isGroup: true, lastMessage: "New update deployed ✅", lastTime: new Date(Date.now() - 300000) },
  { id: "3", name: "Dr. Sara Ali", unreadCount: 0, isOnline: false, isGroup: false, lastMessage: "جزاک اللہ خیراً", lastTime: new Date(Date.now() - 3600000) },
  { id: "4", name: "ESOneWorld Community", unreadCount: 28, isOnline: true, isGroup: true, lastMessage: "Welcome to the Global Family Platform! 🌍", lastTime: new Date(Date.now() - 7200000) },
  { id: "5", name: "Usman Malik", unreadCount: 1, isOnline: true, isGroup: false, lastMessage: "Share the Quran audio link please", lastTime: new Date(Date.now() - 1800000) },
];

export const APP_STATS = {
  totalUsers: "2.4M+",
  activeNow: "847K",
  messagesSent: "18.6M",
  communitiesActive: "12.4K",
  quranListeners: "340K",
  countriesReached: "127",
};
