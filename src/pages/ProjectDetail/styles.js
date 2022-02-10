import { makeStyles } from "@mui/styles";

export const useStyles =  makeStyles(theme => ({
    videoContainer: {
        height: 250,
        width: '80%',
        [theme.breakpoints.up('sm')]: {
            height: 290
        },
        [theme.breakpoints.up(780)]: {
            height: 350
        },
        [theme.breakpoints.up('md')]: {
            height: 440
        }
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
    },
    description: {
        [theme.breakpoints.up(850)]: {
            width: '80%'
        }
    },
    itemShortcut: {
        backgroundColor: "#000246 !important",
        bottom: 31,
        borderRadius: 9999,
        boxShadow:
        "0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)",
        fontSize: '1.02rem',
        padding: '.7rem 1rem',
        position: "fixed",
        right: 14,
        zIndex: 50,
    },
    itemShortcutIcon: {
        marginRight: 8
    }
}));