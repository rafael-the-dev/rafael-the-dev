import { Grid, Typography } from "@mui/material"
import classNames from 'classnames';
import { useDisplay, useTypography } from '../../../styles';
import { useStyles } from './styles';


const Testimonial = ({ description, author }) => {
    const display = useDisplay();
    const text = useTypography();
    const classes = useStyles();

    return (
        <Grid item xs={12} md={4}>
            <div className={classNames(display.mb1, display.mg, classes.testimonial)}>
                <Typography 
                    component="blockquote" 
                    className={classNames(classes.testimonialDescription, display.mb1, text.rem9)}>
                    { `"${description}"` }
                </Typography>
                <Typography className={classNames(classes.testimonialAuthor, text.font7)}>{ author }</Typography>
            </div>
        </Grid>
    )
};

export default Testimonial;