import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    projectCard: {
        height: '67%',
        [theme.breakpoints.up('sm')]: {
            marginRight: '10% !important'
        }
    },
    projectCardIcon: {
        height: 58,
        left: 0,
        top: 0,
        transform: 'translate(8%, -43%)',
        width: 58
    },
    projectCardTitle: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        width: 245,
        whiteSpace: 'nowrap'
    },
    projectCardLink: {
        color: '#9f2395',
        '.pink-theme &': {
            color: '#E7816B',
        },
        '&:hover': {
            color: '#d70077'
        }
    }
}));