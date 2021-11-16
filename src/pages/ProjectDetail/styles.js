import { makeStyles } from "@mui/styles";

export const useStyles =  makeStyles(theme => ({
    videoContainer: {
        height: 250,
        width: '80%'
    },
    list: {
        listStyle: 'disc !important',
        maxHeight: 170,
        overflow: 'hidden !important'
    },
    listExpandMore: {
        maxHeight: 'initial'
    },
    listItemCircle: {
        marginRight: '.6rem'
    }
}));