import { Grid, Paper, Typography } from '@mui/material';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import ShowMoreText from "react-show-more-text";

const Card = ({ project, name, description, nameParameter, imageLink }) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} className={classNames('mb-16', classes.card)}>
            <Paper component="article" className={classNames(classes.projectCard,
               `relative pb-8 px-4 pt-12 h-full flex flex-col`)}>
                <div
                     aria-label='project icon' 
                     style={{ backgroundImage: `url(${project.imageLink})`}} 
                     className={classNames(classes.projectCardIcon, `bg-contain bg-center bg-no-repeat 
                     absolute left-0 top-0`)}></div>
                <Typography 
                    gutterBottom 
                    component="h2" 
                    variant="h6" 
                    className={classNames(classes.projectCardTitle, 'font-bold text-ellipsis overflow-hidden whitespace-nowrap')}>
                    { project.name }
                </Typography>
                <Typography className={classNames(classes.projectCardDescription, "mb-4 content-css text-sm sm:text-base")}
                    component={ShowMoreText}
                    lines={3}
                    more="Show more"
                    less="Show less">
                    { project.content.description }
                </Typography>
                <div className={classNames(`flex items-end grow`)}>
                    <Link to={`/projects/${nameParameter}`} 
                        className={classNames(classes.projectCardLink, 'no-underline color-transition hover:underline')}>
                        view details
                    </Link>
                </div>
            </Paper>
        </Grid>
    );
};

export default Card;