import { ThemeProvider } from 'styled-components';
import { base, lightTheme, darkTheme } from './themes/themes';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import GlobalStyles from './styles/Global/GlobalStyles';
import Skills from './components/Skills/Skills';
import Sidebar from './components/Sidebar/Sidebar';
import Projects from './components/Projects/Projects';
import Navigation from './components/Navigation/Navigation';
import ProjectGallery from './components/AdditionalProjects/ProjectGallery';
import { useGlobalContext } from './Context/Context';
import Footer from './components/Footer/Footer';
import './index.css';

function App() {
  const { theme } = useGlobalContext();
  const lightMode = { ...lightTheme };
  const darkMode = { ...darkTheme };

  const currentTheme = {
    ...base,
    ...(theme === 'light' ? lightMode : darkMode),
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Navigation />
      <Sidebar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ProjectGallery />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
