import { useContext } from "react";
import { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY } from "./ThemeContext";

interface UseThemeResalt {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme(): UseThemeResalt {
  const { theme, setTheme } = useContext(ThemeContext)
  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGTH : Theme.DARK
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return {
    theme, toggleTheme
  }
}