import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import loadable from '@loadable/component';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';
import { AppContextProvider } from '../../context/AppContext';
import Header from '../../components/Header'
import Footer from "../../components/Footer";
import ColorSwitcher from "../../components/ColorSwitcher";

const App = () => {
    const theme = createTheme();
    const ProjectDetail = loadable(() => import('../ProjectDetail'));
    const Projects = loadable(() => import('../Projects'));
    const Resume = loadable(() => import('../Resume'));
    const Home = loadable(() => import('../Home'));

    
    return (
        <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
                <AppContextProvider>
                    <Router>
                        <Header />
                        <Routes>
                            <Route exact path="/projects/:name" element={<ProjectDetail />} />
                            <Route exact path="/projects" element={<Projects />} />
                            <Route exact path="/resume" element={<Resume />} />
                            <Route exact path="/" element={<Home />} />
                        </Routes>
                        <Footer />
                    </Router>
                    <ColorSwitcher />
                </AppContextProvider>
            </ThemeProvider>
        </StylesProvider>
    );
};

export default App;