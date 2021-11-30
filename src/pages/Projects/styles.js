import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    searchForm: {
        border: '1px solid #CCC',
        [theme.breakpoints.up(800)]: {
            marginLeft: '15%',
            marginRight: '15%',
            width: '70%'
        }
    },
    searchInput: {
        color: '#555262',
        fontFamily: "'Roboto', sans-serif",
        fontSize: '1rem',
        paddingLeft: 10
    },
    searchButton: {
        height: '53px !important'
    }
}));