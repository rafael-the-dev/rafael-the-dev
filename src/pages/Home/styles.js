import { makeStyles } from "@mui/styles";
import heroImage from '../../assets/images/home-hero-mobile.jpg'
import heroIcon from '../../assets/images/down-arrows.svg'
import heroIllustrationImage from '../../assets/images/homepage/mobile/image-homepage-hero.jpg'
import heroIllustrationTabletImage from '../../assets/images/homepage/tablet/image-homepage-hero.jpg'
import heroIllustrationDesktopImage from '../../assets/images/homepage/desktop/image-homepage-hero.jpg'

export const useStyles = makeStyles(theme => ({
    heroIllustration: {
        backgroundImage: `url(${heroIllustrationImage})`,
        height: 260,
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `url(${heroIllustrationTabletImage})`,
            height: 460
        },
        [theme.breakpoints.up('md')]: {
            backgroundImage: `url(${heroIllustrationDesktopImage})`,
            height: 460
        },
        [theme.breakpoints.up(1100)]: {
            height: 560
        }
    },
    heroContent: {
        [theme.breakpoints.up('sm')]: {
            left: '5%', 
            width: 430
        }
    },
    heroLink: {
        width: 183
    },
    heroLinkIcon: {
        backgroundImage: `url(${heroIcon})`,
        backgroundSize: 25,
        height: 45,
        width: 45
    },
    heroSection: {
        [theme.breakpoints.up(900)]: {
            backgroundColor: '#303030',
            //backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, .5), rgba(0, 0, 0, .1)), url(${heroImage})`,
            color: '#FFF',
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            paddingLeft: '5%',
            paddingRight: '5%',
            
        }
    },
    heroMobileBanner: {
        backgroundImage: `url(${heroImage})`,
        height: 465,
        //height: 415,
        [theme.breakpoints.up(900)]: {
            height: 510,
            width: 400
            //display: 'none !important'
        }
    },
    heroSectionContent: {
        [theme.breakpoints.up(900)]: {
            justifyContent: 'center !important',
            paddingLeft: '0 !important',
            paddingRight: '0 !important',
            width: 400
        }
    },
    heroSectionContentTitle: {
        [theme.breakpoints.up(900)]: {
            fontSize: '2.2rem !important'
        }

    },
    heroSectionContentDescription: {
        [theme.breakpoints.up(900)]: {
            opacity: .8
        }
    },
    headerGetStarted: {
        backgroundColor: "transparent !important",
        backgroundImage: 'linear-gradient(to right, #9f2395, #1976d2) !important',
        padding: ".4rem .7rem !important",
        textTransform: "capitalize",
        '.pink-theme &': {
          backgroundImage: 'linear-gradient(to right, #8d1983, #E7816B) !important',
        },
        [theme.breakpoints.up("md")]: {
            color: "#FFF !important",
            fontWeight: '700 !important',
            //marginLeft: 16,
            padding: ".5rem .8rem !important",
        },
    },
    projectsSection: {
        backgroundColor: '#acf1ff4f',
        '.pink-theme &': {
            backgroundColor: '#e7816b8f',
        },
        [theme.breakpoints.up(820)]: {
            backgroundColor: 'transparent',
            flexDirection: 'row-reverse !important',
            justifyContent: 'space-between',
            marginTop: '2rem',
            '.pink-theme &, &': {
                backgroundColor: 'transparent',
            }
        },
        [theme.breakpoints.up(1024)]: {
            justifyContent: 'space-around',
        }
    },
    projectsSectionContent: {
        [theme.breakpoints.up(820)]: {
            justifyContent: 'center',
            //marginLeft: 83,
            width: '30%'
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
            padding: '2rem',
            width: 450,
            '.pink-theme &': {
                backgroundColor: '#e7816b8f',
            }
        },
        [theme.breakpoints.up(950)]: {
            width: 504
        },
        [theme.breakpoints.up(1050)]: {
            width: 504
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
    },
    aboutMeImageContainer: {
        //height: 270
        [theme.breakpoints.up('sm')]: {
            width: 250
        },
        [theme.breakpoints.up(724)]: {
            width: 305
        },
        [theme.breakpoints.up('md')]: {
            width: 381
        },
        [theme.breakpoints.up(1100)]: {
            width: 418
        }
    },
    aboutMeContent: {
        [theme.breakpoints.up('sm')]: {
            borderColor: 'rgb(51 50 61 / .4)',
            width: 250
        },
        [theme.breakpoints.up(679)]: {
            flexGrow: 1,
            marginRight: '4rem'
        },
        [theme.breakpoints.up(1000)]: {
            flexGrow: 0,
            width: '43%'
        },
        [theme.breakpoints.up(1024)]: {
            flexGrow: 0,
            marginRight: 0,
            width: '43%'
        },
        [theme.breakpoints.up(1100)]: {
            width: 462
        }
    },
    aboutMeDivider: {
        height: 1
    },
    contactMeTitle: {
        [theme.breakpoints.up('sm')]: {
            maxWidth: '50%'
        },
        [theme.breakpoints.up('md')]: {
            //maxWidth: 300
        }
    },
    testimonialsContainer: {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: 'calc(5% - 1rem)',
            paddingRight: 'calc(5% - 1rem)'
        },
    }
}));