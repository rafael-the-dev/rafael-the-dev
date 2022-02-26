import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles(theme => ({
  justifyBetweenSm: {
    [theme.breakpoints.up(650)]: {
      justifyContent: 'space-between !important'
    }
  },
  footer: {
      backgroundImage: 'linear-gradient(to bottom, #0b4681 , #186bbd ) !important',
      '.pink-theme &': {
        backgroundImage: 'linear-gradient(to bottom, #b3604eeb, #E7816B) !important',

      },
      [theme.breakpoints.up('md')]: {
        '.pink-theme &': {
          backgroundImage: 'linear-gradient(to bottom, #bd4b32eb, #c16b58f7) !important',
  
        },
      }
  },
  footerBar: {
      backgroundImage: 'linear-gradient(to right, #cf2d09 , #0b099b)',
      height: 7,
      left: 'auto',
      top: 0,
      right: 'auto',
      width: 100
  },
  footerLogo: {
    [theme.breakpoints.up('md')]: {
      fontSize: '1.9rem !important'
    }
  },
  footerPageLink: {
      fontSize: '1.06rem',
      marginBottom: 6
  }
}));