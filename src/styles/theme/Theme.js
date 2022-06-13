import { createContext } from 'react';
import { usePersistedState } from '../../hooks/usePersistedState';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = usePersistedState('theme', 'light');
  const toggleTheme = () => {
    console.log(theme);
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('light');
    console.log(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
