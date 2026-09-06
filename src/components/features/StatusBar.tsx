import { useEffect, useState } from "react";
import { ThemeConfig } from "@/types";

interface Props {
  theme: ThemeConfig;
}

export default function StatusBar({ theme }: Props) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }));
    };
    update();
    const interval = setInterval(update, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex items-center justify-between px-4 py-1 flex-shrink-0 z-10 relative"
      style={{
        background: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(8px)",
        borderBottom: `1px solid ${theme.border}30`,
      }}
    >
      {/* Time */}
      <span className="text-[11px] font-bold" style={{ color: theme.text, opacity: 0.8 }}>
        {time}
      </span>

      {/* Center — app name ticker */}
      <div className="flex-1 overflow-hidden mx-4">
        <p
          className="text-[9px] font-bold text-center glow-text"
          style={{ color: theme.accent }}
        >
          ESOneWorld · UniOrbi · drirfan.online
        </p>
      </div>

      {/* Signal */}
      <div className="flex items-center gap-1">
        <span className="text-[10px]" style={{ color: theme.text, opacity: 0.7 }}>●●●●</span>
        <span className="text-[10px]" style={{ color: theme.text, opacity: 0.7 }}>WiFi</span>
        <span className="text-[10px]" style={{ color: theme.text, opacity: 0.7 }}>🔋</span>
      </div>
    </div>
  );
}
