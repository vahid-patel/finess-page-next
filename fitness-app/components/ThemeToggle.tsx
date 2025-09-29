'use client';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Moon, Sun } from 'lucide-react';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Avoid SSR/client mismatch
    return null;
  }
  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </Button>
  );
}

export default ThemeToggle;
