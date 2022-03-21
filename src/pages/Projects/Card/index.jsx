import { Button, Card, CardActions, CardContent, Grid, IconButton, Typography } from '@mui/material';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import ShowMoreText from "react-show-more-text";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useCallback, useMemo, useRef } from 'react'
import ImageGallery from 'react-image-gallery'

const CardContainer = ({ project, name, description, nameParameter, images, imageLink }) => {
    const classes = useStyles();

    const getImageURL = useCallback((index) => 
        project.images[index].startsWith('https://') ? project.images[index] : `${process.env.PUBLIC_URL}/images/projects-images/${nameParameter}/${project.images[index]}`, 
    [ nameParameter, project ]);

    const carouselImages = useMemo(() =>
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
            {
                original: getImageURL(3),
                thumbnail: getImageURL(3),
            },
        ], [ getImageURL ]
    );

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} className={classNames('mb-16 pt-0', classes.card)}>
             <Card >
                <div className={classNames(classes.cardImageGalleryContainer)}>
                    <ImageGallery showThumbnails={false} items={carouselImages} />
                </div>
                <CardContent>
                    <Typography 
                        gutterBottom 
                        component="h2" 
                        variant="h6" 
                        className={classNames(classes.projectCardTitle, 'font-bold text-ellipsis overflow-hidden whitespace-nowrap')}>
                        { project.name }
                    </Typography>
                </CardContent>
                <CardActions disableSpacing className={classNames('flex items-center justify-between')}>
                    <a href='/'>
                        <Button className={classNames('uppercase')}>Visit website</Button>
                    </a>
                    <IconButton>
                        <KeyboardArrowDownIcon />
                    </IconButton>
                </CardActions>
             </Card>
        </Grid>
    );
};

export default CardContainer;

/**
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