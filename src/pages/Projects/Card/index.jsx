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
        <Grid xs={12} sm={6} md={4} lg={3}>
            <Paper component="article" className={classNames(classes.projectCard, display.relative, display.mb3,
                display.pt3, display.pb2, display.pl1)}>
                <div style={{ backgroundImage: `url(${project.imageLink})`}} className={classNames(bg.contain, 
                    bg.noRepeat, bg.center, display.absolute, classes.projectCardIcon)}></div>
                <Typography gutterBottom component="h2" variant="h6" className={classNames(text.font7, classes.projectCardTitle)}>
                    { project.name }
                </Typography>
                <Typography className={classNames(text.rem9, classes.projectCardDescription, display.mb1)}>
                    <ShowMoreText
                    lines={3}
                    more="Show more"
                    less="Show less"
                    className="content-css"
                    >
                        { project.content.description }
                    </ShowMoreText>
                </Typography>
                <Link to={`/projects/${nameParameter}`} 
                    className={classNames(text.decorationNone, classes.projectCardLink)}>
                    view details
                </Link>
            </Paper>
        </Grid>
    );
};

export default Card;