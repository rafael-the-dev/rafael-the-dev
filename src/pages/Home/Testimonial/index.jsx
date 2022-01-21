import { Grid, Tooltip, Typography } from "@mui/material"
import classNames from 'classnames';
import { useDisplay, useTypography } from '../../../styles';
import { useStyles } from './styles';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';


const Testimonial = ({ author, description, linkedLink }) => {
    const display = useDisplay();
    const text = useTypography();
    const classes = useStyles();

    return (
        <Grid item xs={12} md={4} component="article">
            <Tooltip title="Click to contact testimonial author on linkedIN">
                <a href={linkedLink} target="_blank" rel="noreferrer" className={classNames(display.mb1, display.mg, classes.testimonial, text.noUnderline,
                    display.block, classes.container, display.h100)}>
                    <FormatQuoteIcon className={classNames(classes.quoteIcon)} />
                    <Typography 
                        component="blockquote" 
                        className={classNames(classes.testimonialDescription, display.mb1, text.rem9)}>
                        { `"${description}"` }
                    </Typography>
                    <Typography className={classNames(classes.testimonialAuthor, text.font7)}>{ author }</Typography>
                </a>
            </Tooltip>
        </Grid>
    )
};

export default Testimonial;