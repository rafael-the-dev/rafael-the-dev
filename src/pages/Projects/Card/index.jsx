import { Grid, Paper, Typography } from '@mui/material';
import { useBackground, useDisplay, useTypography } from '../../../styles';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import ShowMoreText from "react-show-more-text";

const Card = ({ project, name, description, nameParameter, imageLink }) => {
    const display = useDisplay();
    const text = useTypography();
    const bg = useBackground();
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} className={classNames('mb-12')}>
            <Paper component="article" className={classNames(classes.projectCard,
               `relative pb-8 pl-4 pt-12`)}>
                <div aria-label='project icon' style={{ backgroundImage: `url(${project.imageLink})`}} className={classNames( 
                    classes.projectCardIcon, `bg-contain bg-center bg-no-repeat absolute`)}></div>
                <Typography gutterBottom component="h2" variant="h6" className={classNames(text.font7, classes.projectCardTitle)}>
                    { project.name }
                </Typography>
                <Typography className={classNames(text.rem9, classes.projectCardDescription, "mb-4 content-css")}
                    component={ShowMoreText}
                    lines={3}
                    more="Show more"
                    less="Show less">
                    { project.content.description }
                </Typography>
                <Link to={`/projects/${nameParameter}`} 
                    className={classNames(text.decorationNone, classes.projectCardLink, 'color-transition')}>
                    view details
                </Link>
            </Paper>
        </Grid>
    );
};

export default Card;