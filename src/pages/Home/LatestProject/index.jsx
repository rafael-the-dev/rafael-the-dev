import { Paper, Typography } from '@mui/material';
import { useBackground, useDisplay, useTypography } from '../../../styles';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const LatestProject = ({ name, description, image, nameParameter }) => {
    const display = useDisplay();
    const text = useTypography();
    const bg = useBackground();
    const classes = useStyles();

    return (
        <Paper component="article" className={classNames(display.flex, display.alignCenter, display.pt1, display.pb1, 
            display.pl1, display.pr1, display.mb1)}>
            <div style={{ backgroundImage: `url(${image})`}} className={classNames(bg.center, bg.noRepeat, 
                classes.projectImage, bg.contain)}></div>
            <div className={classNames(display.flex, display.flexColumn)}>
                <Typography align="left" component="h3" gutterBottom 
                    className={classNames(text.font7, classes.projectsTitle)}>
                    { name }
                </Typography>
                <Typography gutterBottom className={classNames(text.rem9)}>
                    { description }
                </Typography>
                <Link to={`/projects/${nameParameter}`} className={classNames(text.decorationNone, classes.projectLink)}>
                    view details
                </Link>
            </div>
        </Paper>
    )
};

export default LatestProject;