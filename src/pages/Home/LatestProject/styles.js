import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    projectImage: {
        borderRadius: '50%',
        height: 50,
        marginRight: 20,
        width: 112
    },
    projectsTitle: {
        fontSize: '1rem !important'
    },
    projectLink: {
        color: '#9f2395',
        '&:hover': {
            color: '#d70077'
        }
    }
}))