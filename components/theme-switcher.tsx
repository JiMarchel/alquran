import { useTheme } from "next-themes";
import React from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex items-center gap-4">
      <div>
        {theme === "light" ? (
          <Button
            size="icon"
            onClick={() => setTheme("dark")}
            variant="outline"
          >
            <Sun />
          </Button>
        ) : (
          <Button
            size="icon"
            variant="outline"
            onClick={() => setTheme("light")}
          >
            <Moon />
          </Button>
        )}
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold">
          {theme![0].toUpperCase() + theme!.slice(1)}
        </h1>
        <p className="text-muted-foreground text-sm font-medium underline">
          Current theme
        </p>
      </div>
    </div>
  );
};
