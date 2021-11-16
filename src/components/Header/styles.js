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
            headerDrawe: {
                width: '70% !important'
            },
            headerNav: {
                // top: 0,
                //right: 9999,
                transition: "all 1s",
                [theme.breakpoints.up("sm")]: {
                  top: 0,
                  right: 0,
                  width: "300px !important",
                },
                [theme.breakpoints.up("md")]: {
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
              headerGetStarted: {
                backgroundColor: "#0d0d6e !important",
                color: "#FFF",
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