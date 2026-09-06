export type ThemeId =
  | "crimson-glass"
  | "emerald-glass"
  | "white-crystal"
  | "paradise"
  | "holographic"
  | "ocean-glass"
  | "dark-galaxy";

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  nameUrdu: string;
  bg: string;
  bgImage?: string;
  primary: string;
  accent: string;
  glass: string;
  glassHover: string;
  text: string;
  subText: string;
  border: string;
  glow: string;
  navBg: string;
}

export type Language = "en" | "ur" | "ar";

export interface User {
  id: string;
  name: string;
  phone: string;
  avatar?: string;
  role: "user" | "admin";
  isVerified: boolean;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: Date;
  type: "text" | "audio" | "image" | "video";
  isRead: boolean;
}

export interface Chat {
  id: string;
  name: string;
  avatar?: string;
  lastMessage?: string;
  lastTime?: Date;
  unreadCount: number;
  isOnline: boolean;
  isGroup: boolean;
}

export interface Integration {
  id: string;
  name: string;
  category: "social" | "website" | "hosting" | "ai";
  url: string;
  icon: string;
  enabled: boolean;
  color: string;
}

export type TabId = "home" | "guests" | "global" | "paradise" | "esmart" | "esonewworld";

export interface AppState {
  currentTab: TabId;
  theme: ThemeId;
  language: Language;
  sidebarLeft: boolean;
  sidebarRight: boolean;
  isAuthenticated: boolean;
  user: User | null;
  adminUnlocked: boolean;
}
