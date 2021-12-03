import { makeStyles } from "@mui/styles";

export const useStyles =  makeStyles(theme => 
    (
        {
            header: {
                paddingBottom: ".9rem",
                paddingTop: ".9rem",
                [theme.breakpoints.up("md")]: {
                  paddingBottom: 0,
                  paddingTop: 0,
                },
            },
            headerLogo: {
              color: '#1976d2',
              [theme.breakpoints.up('md')]: {
                fontSize: '1.9rem !important'
              }
            },
            headerDrawe: {
                width: '70% !important',
                [theme.breakpoints.up(400)]: {
                  width: '280px !important'
                },
                [theme.breakpoints.up(600)]: {
                  width: 'auto !important'
                }
            },
            headerNav: {
                // top: 0,
                //right: 9999,
                backgroundImage: 'linear-gradient(to bottom, #0b4681 , #186bbd ) !important',
                transition: "all 1s",
                [theme.breakpoints.up("sm")]: {
                  top: 0,
                  right: 0,
                  width: "300px !important",
                },
                [theme.breakpoints.up("md")]: {
                  backgroundImage: 'none !important',
                  width: "auto !important",
                },
              },
              headerNavDisplay: {
                right: 0,
              },
              headerItem: {
                [theme.breakpoints.up("md")]: {
                  width: "auto",
                },
              },
              headerNavIcon: {
                minWidth: '0 !important'
              },
              headerNavItemText: {
                width: 'max-content',
                [theme.breakpoints.up('md')]: {
                  color: '#000 !important'
                }
              },
              headerGetStarted: {
                backgroundColor: "#FFF !important",
                color: "#186bbd !important",
                fontSize: ".8rem",
                padding: ".3rem .5rem !important",
                textTransform: "capitalize",
                [theme.breakpoints.up("md")]: {
                  backgroundImage: 'linear-gradient(to right, #9f2395, #1976d2)',
                  backgroundColor: "transparent !important",
                  color: "#FFF !important",
                  fontWeight: '700 !important',
                  marginLeft: 16,
                  padding: ".5rem .8rem !important",
                },
              },
              headerGetStartedDesktop: {},
              headerDrawerBottom: {
                bottom: 19,
              },
              contactMeLink: {
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  width: '80%'
              },
              headerContactMe: {
                padding: ".55rem .5rem !important",
              },
              currentPage: {
                color: '#27b1bf !important',
                fontWeight: '700 !important'
              }
        }
    )
);