import { makeStyles } from "@mui/styles";

export const useStyles =  makeStyles(theme => ({
    videoContainer: {
        height: 250,
        width: '80%'
    },
    list: {
        listStyle: 'disc !important',
        maxHeight: 170,
        overflow: 'hidden !important'
    },
    listExpandMore: {
        maxHeight: 'initial'
    },
    listItemCircle: {
        marginRight: '.6rem'
    },
    toolsItem: {
        border: '1px solid #1976d2',
        borderRadius: 15,
        color: '#1976d2',
        padding: '0.4rem 0.8rem',
    },
    linkIcon: {
        marginRight: 5
    },
    linkText: {
        color: '#1976d2',
        fontSize: '1.2rem'
    }
}));