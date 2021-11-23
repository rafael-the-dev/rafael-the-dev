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
              color: '#1976d2'
            },
            headerDrawe: {
                width: '70% !important'
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
                  backgroundImage: 'none',
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
              headerGetStarted: {
                backgroundColor: "#FFF !important",
                color: "#186bbd !important",
                fontSize: ".8rem",
                padding: ".3rem .5rem !important",
                textTransform: "capitalize",
                [theme.breakpoints.up("md")]: {
                  marginLeft: 16,
                  padding: ".5rem .8rem !important",
                },
              },
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
        }
    )
);