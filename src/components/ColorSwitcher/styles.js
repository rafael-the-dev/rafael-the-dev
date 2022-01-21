import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    container: {
        left: 0,
        position: 'fixed',
        top: '48vh'
    },
    spinner: {
        borderRadius: '50%',
        height: 50,
        width: 50
    }
}));