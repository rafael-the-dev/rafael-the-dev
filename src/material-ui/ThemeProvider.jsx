import { ThemeProvider } from '@mui/material/styles';

import { theme } from "./theme"

const ThemeProviderContainer  = ({ children }) => {

    return (
        <ThemeProvider theme={theme}>
            { children }
        </ThemeProvider>
    );
};

export default ThemeProviderContainer;