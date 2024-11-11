import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { ThemeProvider, createTheme, PaletteMode } from '@mui/material';
import { getThemeOptions } from '../theme';

interface CustomThemeContextProps {
  mode: PaletteMode;
  toggleTheme: () => void;
}

const CustomThemeContext = createContext<CustomThemeContextProps>({
  mode: 'dark',
  toggleTheme: () => {},
});

export const useCustomTheme = () => useContext(CustomThemeContext);

export const CustomThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>(() => {
    const savedMode = localStorage.getItem('themeMode') as PaletteMode;
    return savedMode || 'dark';
  });
  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode); // Save the mode to localStorage
  };
  const theme = useMemo(() => createTheme(getThemeOptions(mode)), [mode]);

  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode') as PaletteMode;
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);
  return (
    <CustomThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};
