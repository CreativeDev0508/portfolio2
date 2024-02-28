import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { CONSTANTS } from '../constants';
import { useTranslation } from 'react-i18next';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [atBottom, setAtBottom] = useState(false);
  const [theme, setUserTheme] = useState(() => {
    const savedTheme = localStorage.getItem('userTheme');
    if (savedTheme) {
      try {
        const initialValue = JSON.parse(savedTheme);
        return initialValue;
      } catch (error) {
        return '';
      }
    } else {
      return '';
    }
  });
  const toggleMoreProjects = () => {
    setShowMoreProjects(!showMoreProjects);
  };
  const { t } = useTranslation();

  // For handling whether the user has scrolled to bottom of page - changes sidebar color
  const handleScroll = () => {
    const pageBottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight -
        CONSTANTS.SPACE_BEFORE_PAGE_BOTTOM;
    if (pageBottom) {
      setAtBottom(true);
    } else {
      setAtBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Changes the document title based on the language selected
  useEffect(() => {
    document.title = t('app-title');
  }, [t]);

  // Light/Dark theme toggler
  const toggleTheme = () => {
    theme === 'dark'
      ? setUserTheme(prevTheme => (prevTheme = 'light'))
      : setUserTheme(prevTheme => (prevTheme = 'dark'));
  };

  // Sets theme upon loading the page
  useEffect(() => {
    localStorage.setItem('userTheme', JSON.stringify(theme));
  }, [theme]);

  // Check user preference for dark mode
  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    if (prefersDarkMode) {
      setUserTheme('dark');
    }
  }, []);
  useEffect(() => {
    const prefersLightMode = window.matchMedia(
      '(prefers-color-scheme: light)'
    ).matches;
    if (prefersLightMode) {
      setUserTheme('light');
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        showMoreProjects,
        toggleMoreProjects,
        atBottom,
        toggleTheme,
        theme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
