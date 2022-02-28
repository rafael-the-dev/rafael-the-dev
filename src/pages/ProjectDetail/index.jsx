import { Button, Grid, IconButton, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDisplay } from '../../styles';
import classNames from 'classnames';
import { useStyles } from './styles'
import { AppContext } from '../../context/AppContext';
import React, { useContext, useCallback, useEffect, useState, useRef } from "react";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CircleIcon from '@mui/icons-material/Circle';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import { Pagination } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const ProjectDetail = () => {
    const display = useDisplay();
    const classes = useStyles();

    const [ project, setProject ] = useState({ backward: '', content: { features: [], tools: [] }, forward: ''})
    const [ expandMore, setExpandMore ] = useState(false);

    const { projects } = useContext(AppContext);

    const getFeatures = useCallback(() => {
        return (
            <List classes={{ root: classes.list }} className={classNames({ [classes.listExpandMore]: expandMore})}>
                {
                    project.content.features.map((feature, index) => {
                        if(typeof feature === 'object') {
                            return (
                                <ListItem 
                                    key={index} 
                                    classes={{ root: 'pt-0'}} 
                                    className={classNames('flex flex-col items-start')}>
                                    <ListItemText 
                                        classes={{ primary: classNames('flex items-baseline text-sm sm:text-base') }}>
                                        <CircleIcon  
                                            sx={{ fontSize: '.7rem' }}  
                                            className={classNames('text-sm', classes.listItemCircle)} 
                                        /> 
                                        { feature.name }
                                    </ListItemText>
                                    <List>
                                        {
                                            feature.list.map((item, subIndex) => (
                                                <ListItem key={subIndex} classes={{ root: 'pt-0'}} >
                                                    <ListItemText 
                                                        classes={{ primary: classNames('flex items-baseline text-sm sm:text-base') }}>
                                                         <CircleOutlinedIcon  
                                                            sx={{ fontSize: '.7rem' }}  
                                                            className={classNames('text-sm', classes.listItemCircle)} 
                                                        /> 
                                                            { item }
                                                    </ListItemText>
                                                </ListItem>
                                            ))
                                        }
                                    </List>
                                </ListItem>
                            );
                        } else {
                            return (
                                <ListItem key={index} classes={{ root: 'pt-0'}} >
                                    <ListItemText 
                                        classes={{ primary: classNames('flex items-baseline text-sm sm:text-base') }} >
                                        <CircleIcon  
                                            sx={{ fontSize: '.7rem' }}  
                                            className={classNames('text-sm', classes.listItemCircle)} 
                                        /> 
                                        { feature }
                                    </ListItemText>
                                </ListItem>
                            );
                        }
                    })
                }
            </List>
        );
    }, [ project, classes, expandMore ]);

    const getTools = useCallback(() => (
        <ul classes={{ root: classes.list }} className={classNames('flex items-center list-none pl-4 flex-wrap')}>
            {
                project.content.tools.map((tool, index) => (
                    <li 
                        key={index} 
                        className={classNames('mb-4 mr-4 color-transition',classes.toolsItem)} >
                        { tool.name }
                    </li>
                ))
            }
        </ul>
    ), [ project, classes ]);

    //['audiophile-e-commerce', 'dine-restaurant-website', 'photosnap', 'devjobs-web-app',
    //'coffeeroasters-subscription-site']
    const projectsRefs = useRef([]);
    let navigate = useNavigate();

    const handlePaginationChange = (event, value) => {
        navigate(`/projects/${projectsRefs.current[value - 1]}`);
    };

    const handlerNavigate = prop => () => {
        navigate(prop);
    }
    
    const { name } = useParams();
    const [ defaultIndex, setDefaultIndex ] = useState(1);

    useEffect(() => {
        setProject(projects[name]);
        let index = Object.keys(projects).findIndex(item => item === name);
        if(index === -1)
            navigate('/projects')
        
        setDefaultIndex(index + 1)
    }, [ name, projects, navigate ]);
    
    useEffect(() => {
        projectsRefs.current = Object.keys(projects);
    }, [ projects ]);

    return (
        <Grid container component="main" className={classNames(display.px5, 'pt-4 pb-12')}>
            <Grid item xs={12}>
                <Paper 
                    elevation={0} 
                    className={classNames('flex justify-between items-center')}>
                    <IconButton onClick={handlerNavigate(project.backward)}>
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography 
                        component="h1" 
                        variant="h6" 
                        classes={{ h6: 'font-bold' }}
                        className={classNames('grow text-center')}>
                        { project.name }
                    </Typography>
                    <IconButton onClick={handlerNavigate(project.forward)}>
                        <ArrowForwardIcon />
                    </IconButton> 
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper elevation={0} 
                    classes={{ root: classNames(classes.videoContainer, 'mt-4') }} 
                    className={classNames('mx-auto')}>
                        <iframe 
                            className={classNames(classes.video, 'w-full')}
                            frameborder="0" 
                            height="100%"
                            allow="autoplay; fullscreen; picture-in-picture" 
                            allowfullscreen
                            title={`${project.title} video`}
                            src={project.videoURL}
                            width="100%">
                        </iframe>
                    
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper elevation={0} classes={{ root: classNames('mx-4 mt-8')}} className={classNames()}>
                    <Typography 
                        component="h2" 
                        variant="h6" 
                        className={classNames('mt-4 font-bold')}>
                            Description
                        </Typography>
                    <Typography 
                        className={classNames('text-sm sm:text-base', classes.description)}>
                        { project.content?.description }
                    </Typography>
                    <Typography 
                        component="h2" 
                        variant="h6" 
                        className={classNames('mt-4 font-bold')}>
                        Features
                    </Typography>
                    <div>
                        { getFeatures() }
                        <Button onClick={() => setExpandMore(b => !b)}  
                            endIcon={ expandMore ? <ExpandLessIcon />: <ExpandMoreIcon /> }
                            classes={{ root: 'text-sm sm:text-base'}} 
                            className={classNames()}>
                            Show { expandMore ? 'Less' : 'More'}
                        </Button>
                    </div>
                    <Typography component="h2" variant="h6" className={classNames('mt-4 font-bold')}>Tools</Typography>
                    { getTools() }
                    <div className={classNames('mt-4 flex items-center')}>
                        <Typography 
                            component="h2" 
                            variant="h6" 
                            gutterBottom
                            className={classNames('font-bold')}>
                            Source Code:
                        </Typography>
                        <a 
                            href={project.sourceCodeURL} 
                            rel="noreferrer" 
                            target="_blank" 
                            className={classNames(`flex items-center ml4`, classes.linkText, 'color-transition')}>
                            <GitHubIcon color="primary" className={classNames(classes.linkIcon, 'color-transition')}/> 
                            Github
                        </a>
                    </div>
                    <div className={classNames('flex items-center')}>
                        <Typography 
                            component="h2" 
                            variant="h6" 
                            className={classNames('font-bold')}>
                            Live site:
                        </Typography>
                        <a 
                            href={project.liveURL} 
                            rel="noreferrer" 
                            target="_blank" 
                            className={classNames(`flex items-center ml-4`, classes.linkText, 'color-transition')}>
                            <WebIcon color="primary" className={classNames(classes.linkIcon, 'color-transition')} /> 
                            click here to view
                        </a>
                    </div>
                    <div className={classNames('mt-4 flex justify-center')}>
                        <Pagination 
                            count={Object.keys(projects).length} 
                            size="small" 
                            onChange={handlePaginationChange} 
                            page={defaultIndex}
                        /> 
                    </div>
                    <a 
                        href={project.liveURL} 
                        rel="noreferrer" 
                        target="_blank" 
                        className={classNames(classes.itemShortcut,
                        'flex items-center no-underline text-white bg-transition', 'color-transition')}>
                        <WebIcon 
                            color="primary" 
                            className={classNames(classes.itemShortcutIcon, 'text-white color-transition')} 
                        /> 
                        view the live app
                    </a>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default ProjectDetail;

/**
 * <iframe 
        className={classNames(display.h100, display.w100)} 
        src={project.videoURL}
        title={`${project.title} video`} 
        frameborder="0" 
        X-Frame-Options=""
        allow="autoplay; encrypted-media; fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        >
    </iframe>
 * 
 */