import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    main: {
        [theme.breakpoints.up(600)]: {
            minHeight: '70vh'
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 800
        }
    },
    leftSide: {
        backgroundColor: '#1976d2',
        [theme.breakpoints.up(600)]: {
            borderRadius: '100px 100px 0 0',
            width: 200
        }
    },
    imageContainer: {
        height: 144,
        width: 137,
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
    }
})
);