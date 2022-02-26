import { Grid, Tooltip, Typography } from "@mui/material"
import classNames from 'classnames';
import { useDisplay } from '../../../styles';
import { useStyles } from './styles';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';


const Testimonial = ({ author, description, linkedLink }) => {
    const display = useDisplay();
    const classes = useStyles();

    return (
        <Grid item xs={12} md={4} component="article">
            <Tooltip title="Click to contact testimonial author on linkedIN">
                <a href={linkedLink} target="_blank" rel="noreferrer" 
                    className={classNames(display.mg, classes.testimonial,
                    classes.container, `mb-4 no-underline block h-full`)}>
                    <FormatQuoteIcon className={classNames(classes.quoteIcon, 'color-transition')} />
                    <Typography 
                        component="blockquote" 
                        className={classNames(classes.testimonialDescription, `mb-4 text-base`)}>
                        { `"${description}"` }
                    </Typography>
                    <Typography className={classNames(classes.testimonialAuthor, `font-bold`)}>
                        { author }
                    </Typography>
                </a>
            </Tooltip>
        </Grid>
    )
};

export default Testimonial;