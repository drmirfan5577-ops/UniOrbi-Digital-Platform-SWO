import { ThemeConfig } from "@/types";

interface Props {
  theme: ThemeConfig;
}

export default function AppBackground({ theme }: Props) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Background image */}
      {theme.bgImage && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${theme.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}

      {/* Gradient overlay for themes without image */}
      {!theme.bgImage && (
        <div className={`absolute inset-0 bg-gradient-to-br ${theme.bg}`} />
      )}

      {/* Glass overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: theme.id === "dark-galaxy"
            ? "linear-gradient(135deg, rgba(15,10,30,0.7) 0%, rgba(40,10,60,0.5) 50%, rgba(15,10,30,0.7) 100%)"
            : "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.2) 100%)",
        }}
      />

      {/* Animated light orbs */}
      <div
        className="absolute top-[10%] left-[20%] w-64 h-64 rounded-full opacity-20 blur-3xl float-anim"
        style={{
          background: `radial-gradient(circle, ${theme.accent}90 0%, transparent 70%)`,
          animationDelay: "0s",
        }}
      />
      <div
        className="absolute bottom-[20%] right-[15%] w-48 h-48 rounded-full opacity-15 blur-3xl float-anim"
        style={{
          background: `radial-gradient(circle, ${theme.accent}80 0%, transparent 70%)`,
          animationDelay: "1.5s",
        }}
      />
      <div
        className="absolute top-[50%] right-[30%] w-32 h-32 rounded-full opacity-10 blur-2xl float-anim"
        style={{
          background: `radial-gradient(circle, ${theme.accent}70 0%, transparent 70%)`,
          animationDelay: "3s",
        }}
      />
    </div>
  );
}
