import { Button, Card, CardActions, CardContent, Collapse, Grid, IconButton, Typography } from '@mui/material';
import { useStyles } from './styles';
//import { Link } from 'react-router-dom';
import classNames from 'classnames';
//import ShowMoreText from "react-show-more-text";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useCallback, useMemo, useState } from 'react'
import ImageGallery from 'react-image-gallery'

const CardContainer = ({ project, name, description, nameParameter, images, imageLink }) => {
    const classes = useStyles();

    const [ open, setOpen ] = useState(false);

    const getImageURL = useCallback((image) => 
        image.startsWith('https://') ? image : `${process.env.PUBLIC_URL}/images/projects-images/${nameParameter}/${image}`, 
    [ nameParameter ]);

    const clickHandler = useCallback(() => setOpen(o => !o), []);

    const carouselImages = useMemo(() => 
        project.images.map(image => ( {
            original: getImageURL(image),
            thumbnail: getImageURL(image),
          }))
    , [ getImageURL, project ]
    );

    const getTools = useMemo(() => {
        const total = project.content.tools.length;
        return project.content?.tools
            .reduce((prevValue, currentValue, currentIndex) => (
                prevValue + currentValue.name + ( currentIndex === total - 1 ? '' : ' | ')
            ), "")
    }, [ project ]);

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} className={classNames('mb-12 pt-0', classes.card)}>
             <Card >
                <div className={classNames(classes.cardImageGalleryContainer)}>
                    <ImageGallery showThumbnails={false} items={carouselImages} />
                </div>
                <CardContent className={classNames('pb-0')}>
                    <Typography 
                        gutterBottom 
                        component="h2" 
                        variant="h6" 
                        className={classNames(classes.projectCardTitle, 'font-bold text-ellipsis overflow-hidden whitespace-nowrap')}>
                        { project.name }
                    </Typography>
                </CardContent>
                <CardActions disableSpacing className={classNames('flex items-center justify-between')}>
                    <a href={project.liveURL} rel="noreferrer" target="_blank">
                        <Button 
                            className={classNames('uppercase', classes.projectCardLink)}>
                            Visit website
                        </Button>
                    </a>
                    <IconButton onClick={clickHandler}>
                        <KeyboardArrowDownIcon className={classNames({'rotate-180': open })}/>
                    </IconButton>
                </CardActions>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <section className={classNames(classes.collapse, `pb-4`)}>
                        <Typography 
                            component="h3" 
                            variant="h6" 
                            className={classNames('font-bold sm:text-lg')}>
                            Description
                        </Typography>
                        <Typography 
                            className={classNames('mt-3 text-base', classes.description)}>
                            { project.content?.description }
                        </Typography>
                        <Typography 
                            className={classNames('mt-3 text-base', classes.tools)}>
                            { getTools }
                        </Typography>
                        <a className="block mt-4" href={project.sourceCodeURL} rel="noreferrer" target="_blank">
                            <Button 
                                className={classNames('text-red-700 uppercase px-0 ')}>
                                Github - source code
                            </Button>
                        </a>
                    </section>
                </Collapse>
             </Card>
        </Grid>
    );
};

export default CardContainer;

/**
 * 
        [
            {
              original: getImageURL(0),
              thumbnail: getImageURL(0),
            },
            {
                original: getImageURL(1),
                thumbnail: getImageURL(1),
            },
            {
                original: getImageURL(2),
                thumbnail: getImageURL(2),
            },
        ]
 * <Grid item xs={12} sm={6} md={4} lg={3} className={classNames('mb-16', classes.card)}>
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
 */