import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    main: {
        marginLeft: '5%',
        marginRight: '5%',
        [theme.breakpoints.up(600)]: {
            minHeight: '70vh',
            marginLeft: '15%',
            marginRight: '15%',
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 800
        }
    },
    notSelectedButton: {
        '.pink-theme &': {
            color: '#c55239 !important',
        }
    },
    selectedButton: {
        backgroundColor: '#03304a !important',
        color: '#FFF !important',
        '.pink-theme &': {
            backgroundColor: '#c55239 !important',
        },
    },
    darkBlue1: {
        color: '#0f4e6c',
        '.pink-theme &': {
            color: '#d36b55 !important',
        }
    },
    leftSide: {
        backgroundColor: '#1976d2',
        '.pink-theme &': {
            backgroundColor: '#E7816B',
        },
        [theme.breakpoints.up('md')]: {
            borderRadius: '100px 100px 0 0',
            width: 200
        }
    },
    leftSideIntro: {
        alignSelf: 'flex-start',
        [theme.breakpoints.up('md')]: {
            alignSelf: 'initial',
        }
    },
    imageContainer: {
        height: 144,
        width: 144,
        [theme.breakpoints.up('md')]: {
            borderRadius: '50%',
            marginLeft: '40px !important',
            marginRight: '40px !important',
        }
    },
    leftSideImage: {
        objectFit: 'cover',
        [theme.breakpoints.up('md')]: {
            borderRadius: '50%'
        }
    },
    leftSideSubtitleContainer: {
        borderRadius: '0 65px 69px 0',
        background: '#FFF',
        width: '73%'
    },
    contactLinks: {
        color: '#e7e6e9',
        marginBottom: 10
    },
    expertiseItem: {
        listStyleType: 'none',
        marginBottom: 7
    },
    rightSideTitle: {
        color: '#081f3e',
        '.pink-theme &': {
            color: '#56251a !important',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '3.75rem !important'
        }
    },
    rightSidePosition: {
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem !important'
        }

    },
    rightSideSubtitleContainer: {
        backgroundColor: '#294468',
        borderRadius: '100px 0 0 100px',
        '.pink-theme &': {
            backgroundColor: '#d36b55 !important',
        }
    },
    experienceSubtitle: {
        fontSize: '1.2rem !important'
    },
    experienceItem: {
        marginBottom: 7
    },
    projectsLink: {
        color: '#11085e',
        '.pink-theme &': {
            color: '#201310d9 !important',
        },
        '&:hover': {
            textDecoration: 'underline !important'
        }
    }
})
);