import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    card: {
        [theme.breakpoints.up('sm')]: {
            maxWidth: '48.5%'
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: '31.5%'
        },
        [theme.breakpoints.up('lg')]: {
            maxWidth: '23.5%'
        }
    },
    cardImageGalleryContainer: {
        //height: 300
    },
    projectCard: {
        //height: '67% !important',
        [theme.breakpoints.up('sm')]: {
            //marginRight: '10% !important'
        }
    },
    projectCardIcon: {
        height: 58,
        //left: 0,
        //top: 0,
        transform: 'translate(8%, -43%)',
        width: 58
    },
    projectCardTitle: {
        //textOverflow: 'ellipsis',
        //overflow: 'hidden',
        width: 245,
        //whiteSpace: 'nowrap'
    },
    projectCardDescription: {
        '& a': {
            color: '#186bbd',
            "&:hover": {
                textDecoration: 'underline'
            }
        }
    },
    projectCardLink: {
        //color: '#9f2395 !important',
        '.pink-theme &': {
            color: '#E7816B !important',
        },
        '&:hover': {
            color: '#d70077 !important'
        }
    },
    collapse: {
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    tools: {
        color: '#213032'
    }
}));