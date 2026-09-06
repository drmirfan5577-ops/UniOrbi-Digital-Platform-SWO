import { useState, useEffect } from "react";
import { ThemeId, ThemeConfig } from "@/types";
import { THEMES } from "@/constants";

export function useTheme() {
  const [themeId, setThemeId] = useState<ThemeId>(() => {
    return (localStorage.getItem("esonewworld-theme") as ThemeId) || "emerald-glass";
  });

  const theme: ThemeConfig = THEMES.find((t) => t.id === themeId) || THEMES[1];

  const changeTheme = (id: ThemeId) => {
    setThemeId(id);
    localStorage.setItem("esonewworld-theme", id);
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--theme-primary", theme.primary);
    document.documentElement.style.setProperty("--theme-accent", theme.accent);
    document.documentElement.style.setProperty("--theme-glow", theme.glow);
    document.documentElement.style.setProperty("--theme-text", theme.text);
    document.documentElement.style.setProperty("--theme-border", theme.border);
  }, [theme]);

  return { themeId, theme, changeTheme, themes: THEMES };
}
