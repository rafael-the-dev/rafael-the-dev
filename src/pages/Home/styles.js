import { makeStyles } from "@mui/styles";
import heroImage from '../../assets/images/home-hero.jfif'

export const useStyles = makeStyles(theme => ({
    heroMobileBanner: {
        backgroundImage: `url(${heroImage})`,
        height: 415
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
}));