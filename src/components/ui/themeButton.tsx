// components/ui/ThemeButton.tsx
"use client";
import { useZusStore } from "@/store/useStore";
import { Moon, Sun } from "lucide-react";

const ThemeButton = () => {
  const theme = useZusStore((state) => state.theme);
  const setTheme = useZusStore((state) => state.setTheme);
  const isDark = theme === "dark";

  const handleThemeChange = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button onClick={handleThemeChange}>
      {isDark ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
    </button>
  );
};

export default ThemeButton;
