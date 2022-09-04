import React from 'react';
import { themes } from '../ts/enums/themeEnum';

type TThemeProviderProps = {
  children: React.ReactNode;
};

type TThemeActions = {
  theme: string;
  setTheme: (value: string) => void;
};

const ThemeContext = React.createContext({} as TThemeActions);

export const useTheme = () => {
  return React.useContext(ThemeContext);
};

const getTheme = (): string => {
  const theme = `${window?.localStorage?.getItem('theme')}`;
  if (Object.keys(themes).includes(theme)) return theme;

  const userMedia = window.matchMedia('(prefers-color-scheme: light)');
  if (userMedia.matches) return themes.dark;

  return themes.dark;
};

const ThemeProvider = ({ children }: TThemeProviderProps): JSX.Element => {
  const [theme, setTheme] = React.useState(getTheme);

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
