import { makeStyles } from "@mui/styles";


export const useTypography = makeStyles(theme => ({
    alignCenter: {
        textAlign: 'center !important'
    },
    alignLeft: {
        textAlign: 'left !important'
    },
    alignRight: {
        textAlign: 'right !important'
    },
    font7: {
        fontWeight: '700 !important'
    },
    noUnderline: {
        textDecoration: 'none'
    },
    textLight: {
        color: '#FFF !important'
    },
    rem8: {
        fontSize: '.8rem !important'
    },
    rem9: {
        fontSize: '.9rem !important'
    }
}))