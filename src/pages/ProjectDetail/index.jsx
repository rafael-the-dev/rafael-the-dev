import { Button, Grid, IconButton, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDisplay, useTypography } from '../../styles';
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
    const text = useTypography();
    const classes = useStyles();

    const [ project, setProject ] = useState({ content: { features: [], tools: [] }})
    const [ expandMore, setExpandMore ] = useState(false);

    const { projects } = useContext(AppContext);

    const getFeatures = useCallback(() => {
        return (
            <List classes={{ root: classes.list }} className={classNames({ [classes.listExpandMore]: expandMore})}>
                {
                    project.content.features.map((feature, index) => {
                        if(typeof feature === 'object') {
                            return (
                                <ListItem key={index} classes={{ root: display.pt0}} className={classNames(display.flex, display.flexColumn, display.alignStart)}>
                                    <ListItemText classes={{ primary: classNames(display.flex, display.alignBaseline, text.rem9) }}>
                                        <CircleIcon  sx={{ fontSize: '.7rem' }}  className={classNames(text.rem7, classes.listItemCircle)} /> { feature.name }
                                    </ListItemText>
                                    <List>
                                        {
                                            feature.list.map((item, subIndex) => (
                                                <ListItem key={subIndex} classes={{ root: display.pt0}} >
                                                    <ListItemText 
                                                        classes={{ primary: classNames(display.flex, display.alignBaseline, text.rem9) }}>
                                                         <CircleOutlinedIcon  sx={{ fontSize: '.7rem' }}  className={classNames(text.rem7, classes.listItemCircle)} /> { item }
                                                    </ListItemText>
                                                </ListItem>
                                            ))
                                        }
                                    </List>
                                </ListItem>
                            );
                        } else {
                            return (
                                <ListItem key={index} classes={{ root: display.pt0}} >
                                    <ListItemText classes={{ primary: classNames(display.flex, display.alignBaseline, text.rem9) }} >
                                        <CircleIcon  sx={{ fontSize: '.7rem' }}  className={classNames(text.rem7, classes.listItemCircle)} /> { feature }
                                    </ListItemText>
                                </ListItem>
                            );
                        }
                    })
                }
            </List>
        );
    }, [ project, text, classes, display, expandMore ]);

    const getTools = useCallback(() => (
        <ul classes={{ root: classes.list }} className={classNames(display.flex, display.alignCenter,
         display.listStyleNone, display.pl1, display.flexWrap)}>
            {
                project.content.tools.map((tool, index) => (
                    <li key={index} className={classNames(display.mb1, display.mr1,  classes.toolsItem)} >{ tool.name }</li>
                ))
            }
        </ul>
    ), [ project, classes, display ]);

    const projectsRefs = useRef(['audiophile-e-commerce', 'dine-restaurant-website', 'photosnap', 'devjobs-web-app',
    'coffeeroasters-subscription-site']);
    let navigate = useNavigate();

    const handlePaginationChange = (event, value) => {
        navigate(`/projects/${projectsRefs.current[value]}`);
    };
    
    const { name } = useParams();
    useEffect(() => {
        setProject(projects[name]);
    }, [ name, projects ]);

    return (
        <Grid container component="main" className={classNames(display.pt1, display.pb3, display.px5)}>
            <Grid item xs={12}>
                <Paper elevation={0} className={classNames(display.flex, display.justifyBetween, display.alignCenter)}>
                    <IconButton>
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography 
                        component="h1" 
                        variant="h6" 
                        classes={{ h6: text.font7 }}
                        className={classNames(display.flexGrow1, text.alignCenter)}>
                        Portfolio
                    </Typography>
                    <IconButton>
                        <ArrowForwardIcon />
                    </IconButton> 
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper elevation={0} 
                    classes={{ root: classNames(classes.videoContainer, display.mt1) }} 
                    className={classNames( display.mlAuto, display.mrAuto)}>
                    <iframe className={classNames(display.h100, display.w100)} src="https://www.youtube.com/embed/u9FnmBdBl5k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper elevation={0} classes={{ root: classNames(display.mr1, display.ml1, display.mt2)}} className={classNames()}>
                    <Typography component="h2" variant="h6" className={classNames(display.mt1, text.font7)}>Description</Typography>
                    <Typography className={classNames(text.rem9)}>{ project.content?.description }</Typography>
                    <Typography component="h2" variant="h6" className={classNames(display.mt1, text.font7)}>Features</Typography>
                    <div>
                        { getFeatures() }
                        <Button onClick={() => setExpandMore(b => !b)}  
                            endIcon={ expandMore ? <ExpandLessIcon />: <ExpandMoreIcon /> }
                            classes={{ root: text.rem9}} 
                            className={classNames()}>
                            Show { expandMore ? 'Less' : 'More'}
                        </Button>
                    </div>
                    <Typography component="h2" variant="h6" className={classNames(display.mt1, text.font7)}>Tools</Typography>
                    { getTools() }
                    <div className={classNames(display.mt1, display.flex, display.alignCenter)}>
                        <Typography 
                            component="h2" 
                            variant="h6" 
                            gutterBottom
                            className={classNames(text.font7)}>
                            Source Code:
                        </Typography>
                        <a 
                            href={project.sourceCodeURL} 
                            rel="noreferrer" 
                            target="_blank" 
                            className={classNames(display.flex, display.alignCenter, display.ml1, classes.linkText)}>
                            <GitHubIcon color="primary" className={classNames(classes.linkIcon)}/> 
                            Github
                        </a>
                    </div>
                    <div className={classNames(display.flex, display.alignCenter)}>
                        <Typography 
                            component="h2" 
                            variant="h6" 
                            className={classNames(text.font7)}>
                            Live site:
                        </Typography>
                        <a 
                            href={project.liveURL} 
                            rel="noreferrer" 
                            target="_blank" 
                            className={classNames(display.flex, display.alignCenter, display.ml1, classes.linkText)}>
                            <WebIcon color="primary" className={classNames(classes.linkIcon)} /> 
                            Github
                        </a>
                    </div>
                    <div className={classNames(display.mt1, display.flex, display.justifyCenter)}>
                        <Pagination count={10} size="small" onChange={handlePaginationChange} /> 
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default ProjectDetail;