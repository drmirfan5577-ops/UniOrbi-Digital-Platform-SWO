import { useState } from "react";
import { ThemeConfig } from "@/types";
import bgEmerald from "@/assets/bg-emerald-glass.jpg";

interface Props {
  theme: ThemeConfig;
  onSendOTP: (phone: string) => string;
  onVerifyOTP: (otp: string) => boolean;
}

export default function LoginPage({ theme, onSendOTP, onVerifyOTP }: Props) {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [sentOTP, setSentOTP] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendOTP = () => {
    if (phone.length < 10) {
      setError("Please enter a valid phone number");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const generated = onSendOTP(phone);
      setSentOTP(generated);
      setStep("otp");
      setError("");
      setLoading(false);
    }, 1200);
  };

  const handleVerify = () => {
    setLoading(true);
    setTimeout(() => {
      const success = onVerifyOTP(otp);
      if (!success) {
        setError("Invalid OTP. Please try again.");
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div
      className="h-full w-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgEmerald})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.3)" }} />

      {/* Card */}
      <div
        className="relative z-10 w-full max-w-sm mx-4 p-6 rounded-3xl"
        style={{
          background: "rgba(255,255,255,0.22)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.45)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.5)",
        }}
      >
        {/* Logo */}
        <div className="text-center mb-6">
          <div
            className="w-20 h-20 rounded-2xl mx-auto mb-3 flex items-center justify-center text-3xl font-black text-white carved-btn"
            style={{
              background: `linear-gradient(135deg, ${theme.accent}, ${theme.primary})`,
              boxShadow: theme.glow,
            }}
          >
            ESW
          </div>
          <h1 className="text-xl font-black text-white drop-shadow">ESOneWorld</h1>
          <p className="text-xs text-white/70 mt-1">A Global Family Platform</p>
          <p className="text-[10px] text-white/50 font-urdu mt-0.5">ایک عالمی خاندانی پلیٹ فارم</p>
        </div>

        {step === "phone" ? (
          <>
            <label className="block text-xs font-semibold text-white/80 mb-1.5">
              📱 Phone Number
            </label>
            <div className="flex gap-2 mb-3">
              <div
                className="px-3 py-3 rounded-xl text-sm font-medium text-white"
                style={{
                  background: "rgba(255,255,255,0.2)",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
              >
                +92
              </div>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="3XX XXXXXXX"
                className="flex-1 px-3 py-3 rounded-xl text-sm text-white placeholder-white/50 outline-none"
                style={{
                  background: "rgba(255,255,255,0.2)",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
                onKeyDown={(e) => e.key === "Enter" && handleSendOTP()}
              />
            </div>

            {error && <p className="text-red-300 text-xs mb-3">{error}</p>}

            <button
              onClick={handleSendOTP}
              disabled={loading}
              className="w-full py-3 rounded-xl text-sm font-bold text-white transition-all"
              style={{
                background: `linear-gradient(135deg, ${theme.accent}, ${theme.primary})`,
                boxShadow: loading ? "none" : theme.glow,
                opacity: loading ? 0.7 : 1,
              }}
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </>
        ) : (
          <>
            <div className="text-center mb-4">
              <p className="text-xs text-white/70">OTP sent to</p>
              <p className="text-sm font-bold text-white">+92 {phone}</p>
              {/* Show OTP in dev mode */}
              <div
                className="mt-2 p-2 rounded-lg text-center"
                style={{ background: "rgba(255,255,255,0.15)" }}
              >
                <p className="text-[10px] text-white/60">Demo OTP (dev only):</p>
                <p className="text-lg font-mono font-black text-white glow-text">{sentOTP}</p>
              </div>
            </div>

            <label className="block text-xs font-semibold text-white/80 mb-1.5">
              🔐 Enter 6-digit OTP
            </label>
            <input
              type="number"
              value={otp}
              onChange={(e) => setOtp(e.target.value.slice(0, 6))}
              placeholder="000000"
              className="w-full px-4 py-3 rounded-xl text-center text-xl font-mono font-bold text-white placeholder-white/30 outline-none mb-3 tracking-widest"
              style={{
                background: "rgba(255,255,255,0.2)",
                border: `1px solid ${theme.border}`,
              }}
              onKeyDown={(e) => e.key === "Enter" && handleVerify()}
            />

            {error && <p className="text-red-300 text-xs mb-3">{error}</p>}

            <button
              onClick={handleVerify}
              disabled={loading || otp.length < 6}
              className="w-full py-3 rounded-xl text-sm font-bold text-white transition-all mb-2"
              style={{
                background: `linear-gradient(135deg, ${theme.accent}, ${theme.primary})`,
                boxShadow: loading ? "none" : theme.glow,
                opacity: loading || otp.length < 6 ? 0.6 : 1,
              }}
            >
              {loading ? "Verifying..." : "Verify & Login"}
            </button>

            <button
              onClick={() => { setStep("phone"); setError(""); }}
              className="w-full py-2 text-xs text-white/60 hover:text-white/90 transition-colors"
            >
              ← Change Number
            </button>
          </>
        )}
      </div>

      {/* Footer */}
      <p className="relative z-10 text-white/40 text-[10px] mt-6 text-center">
        By continuing you agree to our Terms & Privacy Policy
      </p>
    </div>
  );
}
