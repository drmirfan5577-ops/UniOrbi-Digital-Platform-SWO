import { ThemeConfig } from "@/types";

interface Props {
  theme: ThemeConfig;
  title: string;
  subtitle?: string;
  onLeftStar: () => void;
  onRightStar: () => void;
  rightExtra?: React.ReactNode;
}

export default function Header({ theme, title, subtitle, onLeftStar, onRightStar, rightExtra }: Props) {
  const now = new Date();
  const timeStr = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false });

  return (
    <div
      className="flex items-center justify-between px-3 py-2 z-10 relative flex-shrink-0"
      style={{
        background: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${theme.border}`,
      }}
    >
      {/* Left Star */}
      <button
        onClick={onLeftStar}
        className="star-btn w-9 h-9 rounded-full flex items-center justify-center text-lg"
        style={{ color: theme.accent }}
        title="Menu"
      >
        ✦
      </button>

      {/* Title */}
      <div className="flex-1 text-center">
        <h1
          className="text-sm font-bold tracking-wide gradient-text"
          style={{ color: theme.text }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-[10px] opacity-60" style={{ color: theme.subText }}>
            {subtitle}
          </p>
        )}
      </div>

      {/* Right — extra or star */}
      <div className="flex items-center gap-2">
        {rightExtra}
        <button
          onClick={onRightStar}
          className="star-btn w-9 h-9 rounded-full flex items-center justify-center text-lg"
          style={{ color: theme.accent }}
          title="Settings"
        >
          ✦
        </button>
      </div>
    </div>
  );
}
