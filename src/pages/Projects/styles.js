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
    },
    loadMoreButton: {
        backgroundImage: 'linear-gradient(to right, #9f2395, #1976d2)',
        backgroundColor: "transparent !important",
        fontSize: ".8rem",
        padding: ".3rem .5rem !important",
        textTransform: "capitalize",
        [theme.breakpoints.up("md")]: {
          padding: ".5rem .8rem !important",
        },
    },
    checkboxGroup: {
        padding: '10px 8px 10px 15px'
    },
}));