"use client";

import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

const Toggle = () => {
  const { setTheme } = useTheme();
  const [theme, setThemes] = useState('light');

  const handleTheme = () => {
    setThemes(theme === 'light' ? 'dark' : 'light');
    setTheme(theme === 'light' ? 'dark' : 'light');
  }


  if (theme === 'light') {
    return (
      <Button variant="ghost" size="sm" onClick={handleTheme}>
        <Sun size={18} />
      </Button>
    );
  }

  return (
    <Button variant="ghost" size="sm" onClick={handleTheme}>
      <Moon size={18} />
    </Button>
  );
};

export default Toggle;
