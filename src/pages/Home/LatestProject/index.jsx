import { Paper, Typography } from '@mui/material';
//import { useBackground, useDisplay, useTypography } from '../../../styles';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const LatestProject = ({ name, description, image, nameParameter, imageClassName, liveURL }) => {
    const classes = useStyles();

    return (
        <Paper component="article" className={classNames( `flex items-center p-4 mb-4`)}>
            <div 
                aria-label="project icon"
                style={{ backgroundImage: `url(${image})`}} 
                className={classNames(classes.projectImage, imageClassName, 
                `bg-center bg-no-repeat bg-contain`)}></div>
            <div className={classNames('flex flex-col')}>
                <Typography align="left" component="h3" gutterBottom 
                    className={classNames(classes.projectsTitle, 'font-bold')}>
                    { name }
                </Typography>
                <Typography gutterBottom className={classNames('text-base')}>
                    { description }
                </Typography>
                <a 
                     className={classNames('no-underline uppercase', classes.projectLink)}
                    href={liveURL} 
                    rel="noreferrer" 
                    target="_blank">
                    Visit website
                </a>
            </div>
        </Paper>
    )
};

export default LatestProject;

/**
 * 
                <Link to={`/projects/${nameParameter}`} className={classNames('no-underline', classes.projectLink)}>
                    view details
                </Link>
 */