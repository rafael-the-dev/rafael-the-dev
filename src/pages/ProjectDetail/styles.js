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
        borderRadius: 9999,//15
        color: '#1976d2',
        padding: '0.4rem 0.8rem',
        '.pink-theme &': {
            borderColor: '#E7816B !important',
            color: '#E7816B'
        }
    },
    linkIcon: {
        marginRight: 5,
        '.pink-theme &': {
            color: '#E7816B !important'
        }
    },
    linkText: {
        color: '#1976d2',
        fontSize: '1.2rem',
        '.pink-theme &': {
            color: '#E7816B !important'
        }
    },
    description: {
        [theme.breakpoints.up(850)]: {
            width: '80%'
        }
    },
    liveAndGitURL: {
    },
    itemShortcut: {
        backgroundColor: "#000246",
        bottom: 31,
        borderRadius: 9999,
        boxShadow:
        "0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)",
        fontSize: '1.02rem',
        padding: '.7rem 1rem',
        position: "fixed",
        right: 14,
        zIndex: 50,
        '.pink-theme &': {
            backgroundColor: '#d3624a'
        }
    },
    itemShortcutIcon: {
        marginRight: 8
    }
}));