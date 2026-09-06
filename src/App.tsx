import { useState } from "react";
import { TabId, ThemeId } from "@/types";
import { useTheme } from "@/hooks/useTheme";
import { useAuth } from "@/hooks/useAuth";
import { useLanguage } from "@/hooks/useLanguage";

import AppBackground from "@/components/layout/AppBackground";
import BottomNav from "@/components/layout/BottomNav";
import Header from "@/components/layout/Header";
import LeftSidebar from "@/components/layout/LeftSidebar";
import RightSidebar from "@/components/layout/RightSidebar";
import StatusBar from "@/components/features/StatusBar";

import LoginPage from "@/pages/Auth/LoginPage";
import UniBrowser from "@/pages/Home/UniBrowser";
import GuestRoom from "@/pages/GuestRoom/GuestRoom";
import GlobalPage from "@/pages/Global/GlobalPage";
import ParadisePage from "@/pages/Paradise/ParadisePage";
import ESmartPage from "@/pages/ESmart/ESmartPage";
import ESOneWorldPage from "@/pages/ESOneWorld/ESOneWorldPage";
import AdminPanel from "@/pages/Admin/AdminPanel";

const TAB_TITLES: Record<TabId, { en: string; ur: string }> = {
  home: { en: "UniBrowser", ur: "یونی براؤزر" },
  guests: { en: "Guest Room", ur: "گیسٹ روم" },
  global: { en: "Global", ur: "گلوبل" },
  paradise: { en: "Paradise", ur: "جنت" },
  esmart: { en: "E-Smart · UniOrbi", ur: "ای سمارٹ" },
  esonewworld: { en: "ESOneWorld", ur: "ای ایس ون ورلڈ" },
};

export default function App() {
  const { theme, themeId, changeTheme } = useTheme();
  const { user, isAuthenticated, adminUnlocked, sendOTP, verifyOTP, logout, unlockAdmin, lockAdmin } = useAuth();
  const { t, lang, changeLanguage, fontClass } = useLanguage();

  const [currentTab, setCurrentTab] = useState<TabId>("home");
  const [leftSidebar, setLeftSidebar] = useState(false);
  const [rightSidebar, setRightSidebar] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);

  const tabTitle = TAB_TITLES[currentTab];

  const handleTabChange = (tab: TabId) => {
    setCurrentTab(tab);
    setLeftSidebar(false);
    setRightSidebar(false);
    setShowAdmin(false);
  };

  const handleOpenAdmin = () => {
    setShowAdmin(true);
    setLeftSidebar(false);
    setRightSidebar(false);
  };

  if (!isAuthenticated) {
    return (
      <div
        className={`w-full h-full ${fontClass}`}
        style={{ maxWidth: "480px", margin: "0 auto", position: "relative" }}
      >
        <LoginPage
          theme={theme}
          onSendOTP={sendOTP}
          onVerifyOTP={verifyOTP}
        />
      </div>
    );
  }

  return (
    <div
      className={`w-full h-full ${fontClass} relative overflow-hidden`}
      style={{ maxWidth: "480px", margin: "0 auto" }}
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      {/* Background */}
      <AppBackground theme={theme} />

      {/* Main content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Status bar */}
        <StatusBar theme={theme} />

        {/* Header */}
        <Header
          theme={theme}
          title={lang === "ur" ? tabTitle.ur : tabTitle.en}
          subtitle={lang !== "ur" ? tabTitle.ur : undefined}
          onLeftStar={() => { setLeftSidebar(!leftSidebar); setRightSidebar(false); }}
          onRightStar={() => { setRightSidebar(!rightSidebar); setLeftSidebar(false); }}
        />

        {/* Page content */}
        <div className="flex-1 overflow-hidden relative">
          {showAdmin ? (
            <AdminPanel
              theme={theme}
              t={t}
              isUnlocked={adminUnlocked}
              onUnlock={unlockAdmin}
              onLock={lockAdmin}
              currentThemeId={themeId}
              onThemeChange={(id: ThemeId) => changeTheme(id)}
            />
          ) : (
            <>
              {currentTab === "home" && <UniBrowser theme={theme} t={t} />}
              {currentTab === "guests" && <GuestRoom theme={theme} t={t} />}
              {currentTab === "global" && <GlobalPage theme={theme} t={t} />}
              {currentTab === "paradise" && <ParadisePage theme={theme} t={t} />}
              {currentTab === "esmart" && <ESmartPage theme={theme} t={t} />}
              {currentTab === "esonewworld" && (
                <ESOneWorldPage
                  theme={theme}
                  t={t}
                  onOpenAdmin={handleOpenAdmin}
                  isAdmin={adminUnlocked}
                />
              )}
            </>
          )}

          {/* Sidebars */}
          {leftSidebar && (
            <>
              <div
                className="absolute inset-0 z-40"
                style={{ background: "rgba(0,0,0,0.2)" }}
                onClick={() => setLeftSidebar(false)}
              />
              <LeftSidebar
                theme={theme}
                t={t}
                user={user}
                lang={lang}
                onLanguageChange={changeLanguage}
                onClose={() => setLeftSidebar(false)}
                onLogout={logout}
                onOpenAdmin={handleOpenAdmin}
                isAdmin={adminUnlocked}
              />
            </>
          )}

          {rightSidebar && (
            <>
              <div
                className="absolute inset-0 z-40"
                style={{ background: "rgba(0,0,0,0.2)" }}
                onClick={() => setRightSidebar(false)}
              />
              <RightSidebar
                theme={theme}
                t={t}
                currentThemeId={themeId}
                onThemeChange={(id: ThemeId) => { changeTheme(id); }}
                onClose={() => setRightSidebar(false)}
              />
            </>
          )}
        </div>

        {/* Bottom Navigation */}
        <BottomNav
          current={showAdmin ? "esonewworld" : currentTab}
          onChange={(tab) => {
            setShowAdmin(false);
            handleTabChange(tab);
          }}
          theme={theme}
          t={t}
        />
      </div>
    </div>
  );
}
