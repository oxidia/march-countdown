import { useRef, useEffect, useState } from "react";

export const Theme = {
  DARK: "dark",
  LIGHT: "light"
};

export const ThemeSource = {
  SYSTEM: "system",
  STORAGE: "storage"
};

export default function useTheme(props) {
  const [theme, setTheme] = useState(null);
  const { storageKey = "theme" } = props ?? {};

  useEffect(function () {
    setTheme(getInitialTheme());
  }, []);

  useEffect(
    function watchSystemThemeChange() {
      if (!theme) {
        return;
      }

      const matchedMedia = window.matchMedia("(prefers-color-scheme: dark)");

      matchedMedia.addEventListener("change", changeEventListener);

      return function removeListener() {
        matchedMedia.removeEventListener("change", changeEventListener);
      };

      function changeEventListener(e) {
        const newThemeName = e.matches ? Theme.DARK : Theme.LIGHT;

        const { source } = theme;

        if (source == ThemeSource.SYSTEM) {
          setTheme({
            name: newThemeName,
            source
          });
        }
      }
    },
    [theme]
  );

  useEffect(
    function setThemeBodyClassName() {
      if (theme) {
        const { name, source } = theme;
        let isDark = false;

        if (source == ThemeSource.SYSTEM) {
          isDark = getSystemTheme() == Theme.DARK;
        } else {
          isDark = name == Theme.DARK;
        }

        if (isDark) {
          document.documentElement.classList.add(Theme.DARK);
        } else {
          document.documentElement.classList.remove(Theme.DARK);
        }

        localStorage.setItem(storageKey, JSON.stringify(theme));
      }
    },
    [theme]
  );

  function getInitialTheme() {
    const currentTheme = localStorage.getItem(storageKey);

    if (currentTheme) {
      try {
        return JSON.parse(currentTheme);
      } catch (error) {}
    }
    return {
      name: getSystemTheme(),
      source: ThemeSource.SYSTEM
    };
  }

  function getSystemTheme() {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    return isDark ? Theme.DARK : Theme.LIGHT;
  }

  function toggleTheme() {
    const { name } = theme;

    setTheme({
      name: name == Theme.DARK ? Theme.LIGHT : Theme.DARK,
      source: ThemeSource.STORAGE
    });
  }

  return { theme, toggleTheme, setTheme };
}
