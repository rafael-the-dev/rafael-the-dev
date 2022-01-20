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
    selectedButton: {
        backgroundColor: '#03304a !important',
        color: '#FFF !important'
    },
    darkBlue1: {
        color: '#0f4e6c'
    },
    leftSide: {
        backgroundColor: '#1976d2',
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
        borderRadius: '100px 0 0 100px'
    },
    experienceSubtitle: {
        fontSize: '1.2rem !important'
    },
    experienceItem: {
        marginBottom: 7
    },
    projectsLink: {
        color: '#11085e',
        '&:hover': {
            textDecoration: 'underline !important'
        }
    }
})
);