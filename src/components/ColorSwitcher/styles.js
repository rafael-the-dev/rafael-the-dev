import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    container: {
        left: 0,
        position: 'fixed',
        top: '46vh',
        zIndex: 1000
    },
    spinner: {
        borderRadius: '50%',
        height: 50,
        transition: 'left 2s ease-in-out',
        width: 50
    },
    spinnerHide: {
        left: -200,
        position: 'absolute',
    },
    buttonsContainer: {
        background: '#FFF',
        display: 'grid',
        gridGap: '10px 10px',
        gridTemplateColumns: '40px 40px',
        gridTemplateRows: '40px',
        left: -250,
        padding:' 0.6rem 0.7rem',
        position: 'absolute',
        transition: 'left 2s ease-in-out',
        top: 0
    },
    buttonsContainerDisplay: {
        left: 0
    },
    blueTheme: {
        backgroundColor: '#1976d2'
    },
    lightPinkTheme: {
        backgroundColor: '#E7816B'
    }
}));