
import React from "react";
import { Moon, Sun } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Toggle 
      variant="outline" 
      size="sm"
      pressed={theme === "dark"}
      onPressedChange={toggleTheme}
      aria-label="Toggle theme"
      className="bg-sidebar-accent hover:bg-sidebar-accent/80 text-sidebar-foreground border-none w-8 h-8"
    >
      {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
    </Toggle>
  );
};

export default ThemeToggle;
