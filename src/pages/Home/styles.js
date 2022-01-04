import { makeStyles } from "@mui/styles";
import heroImage from '../../assets/images/home-hero.jfif'

export const useStyles = makeStyles(theme => ({
    heroSection: {
        [theme.breakpoints.up(900)]: {
            alignCenter: 'center',
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, .5), rgba(0, 0, 0, .1)), url(${heroImage})`,
            color: '#FFF',
            display: 'flex',
            height: 510,
            
        }
    },
    heroMobileBanner: {
        backgroundImage: `url(${heroImage})`,
        height: 415,
        [theme.breakpoints.up(900)]: {
            display: 'none !important'
        }
    },
    heroSectionContent: {
        [theme.breakpoints.up(900)]: {
            justifyContent: 'center !important',
            width: 400
        }
    },
    heroSectionContentDescription: {
        [theme.breakpoints.up(900)]: {
            opacity: .8
        }
    },
    headerGetStarted: {
        backgroundColor: "transparent !important",
        backgroundImage: 'linear-gradient(to right, #9f2395, #1976d2)',
        padding: ".4rem .7rem !important",
        textTransform: "capitalize",
        [theme.breakpoints.up("md")]: {
            color: "#FFF !important",
            fontWeight: '700 !important',
            marginLeft: 16,
            padding: ".5rem .8rem !important",
        },
    },
    projectsSection: {
        backgroundColor: '#acf1ff4f',
        [theme.breakpoints.up(820)]: {
            backgroundColor: 'transparent',
            flexDirection: 'row-reverse !important',
            justifyContent: 'center',
            marginTop: '2rem'
        }
    },
    projectsSectionContent: {
        [theme.breakpoints.up(820)]: {
            justifyContent: 'center',
            marginLeft: 83,
            width: 384
        }

    },
    projectsSectionTitle: {
        color: '#00000e',
        fontFamily: "'Abril Fatface', cursive !important",
        fontSize: '1.4rem !important'
        //font-family: 'Mochiy Pop P One', sans-serif;
    },
    projectsSectionDescription: {
        color: '#2e2e2e'
    },
    projectsSectionTableLink: {
        [theme.breakpoints.up(820)]: {
            display: 'block !important'
        }

    },
    projectsSectionProjectsContainer: {
        [theme.breakpoints.up(820)]: {
            backgroundColor: '#acf1ff4f',
            marginTop: '0 !important',
            padding: '2rem'
        },
        [theme.breakpoints.up(1050)]: {
            width: 400
        }
    },
    projectsSectionLink: {
        [theme.breakpoints.up(820)]: {
            display: 'none !important'
        }
    },
    audioPhileImage: {
        height: '37px !important',
        width: '84px !important'
    }
}));