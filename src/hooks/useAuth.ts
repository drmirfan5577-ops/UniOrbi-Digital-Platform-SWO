import { useState, useEffect } from "react";
import { User } from "@/types";
import { generateOTP } from "@/lib/utils";

export function useAuth() {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem("esonewworld-user");
    return stored ? JSON.parse(stored) : null;
  });
  const [isAuthenticated, setIsAuthenticated] = useState(!!user);
  const [pendingOTP, setPendingOTP] = useState<string | null>(null);
  const [pendingPhone, setPendingPhone] = useState<string | null>(null);
  const [adminUnlocked, setAdminUnlocked] = useState(() => {
    return localStorage.getItem("esonewworld-admin") === "true";
  });

  const sendOTP = (phone: string): string => {
    const otp = generateOTP();
    setPendingOTP(otp);
    setPendingPhone(phone);
    console.log(`[OTP for ${phone}]: ${otp}`);
    return otp;
  };

  const verifyOTP = (otp: string): boolean => {
    if (otp === pendingOTP && pendingPhone) {
      const newUser: User = {
        id: Date.now().toString(),
        name: "User " + pendingPhone.slice(-4),
        phone: pendingPhone,
        role: "user",
        isVerified: true,
      };
      setUser(newUser);
      setIsAuthenticated(true);
      localStorage.setItem("esonewworld-user", JSON.stringify(newUser));
      setPendingOTP(null);
      setPendingPhone(null);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setAdminUnlocked(false);
    localStorage.removeItem("esonewworld-user");
    localStorage.removeItem("esonewworld-admin");
  };

  const unlockAdmin = (password: string): boolean => {
    if (password === "@1122#") {
      setAdminUnlocked(true);
      localStorage.setItem("esonewworld-admin", "true");
      return true;
    }
    return false;
  };

  const lockAdmin = () => {
    setAdminUnlocked(false);
    localStorage.removeItem("esonewworld-admin");
  };

  return { user, isAuthenticated, adminUnlocked, sendOTP, verifyOTP, logout, unlockAdmin, lockAdmin, pendingPhone };
}
