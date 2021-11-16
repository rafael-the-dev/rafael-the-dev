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

const App = () => {
    const theme = createTheme();
    const ProjectDetail = loadable(() => import('../ProjectDetail'));

    
    return (
        <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
                <AppContextProvider>
                    <Router>
                        <Header />
                        <Routes>
                            <Route exact path="/" element={<ProjectDetail />} />
                        </Routes>
                    </Router>
                </AppContextProvider>
            </ThemeProvider>
        </StylesProvider>
    );
};

export default App;