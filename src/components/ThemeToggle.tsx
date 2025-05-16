
import React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import { toast } from "@/hooks/use-toast";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const handleToggleTheme = () => {
    toggleTheme();
    toast({
      title: `Theme Changed`,
      description: `Theme switched to ${theme === "dark" ? "light" : "dark"} mode`,
      duration: 2000,
    });
  };

  return (
    <Button 
      variant="outline" 
      size="icon"
      onClick={handleToggleTheme}
      aria-label="Toggle theme"
      className="bg-sidebar-accent hover:bg-sidebar-accent/80 text-sidebar-foreground border-none w-8 h-8"
    >
      {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
    </Button>
  );
};

export default ThemeToggle;
