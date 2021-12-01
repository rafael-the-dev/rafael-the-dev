import { Grid, Paper, Typography } from '@mui/material';
import { useBackground, useDisplay, useTypography } from '../../styles';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import ShowMoreText from "react-show-more-text";
import rafaelImage from '../../assets/images/home-hero.jfif';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Resume = () => {
    const display = useDisplay();
    const text = useTypography();
    const bg = useBackground();
    const classes = useStyles();

    return (
        <Paper elevation={2} component="main" className={classNames(display.flex, display.alignStretch, classes.main, 
        display.pt1, display.mb2, display.mt2)}>
            <div className={classNames(classes.leftSide, display.flex, display.flexColumn, display.alignCenter, display.pt1)}>
                <figure className={classNames(classes.imageContainer, display.radius50)}>
                    <img 
                        src={rafaelImage}
                        alt="rafael tivane" 
                        className={classNames(display.block, display.h100, display.w100, display.radius50)}
                    />
                </figure>
                <div className={classNames(display.flex, display.flexColumn, display.w100, display.mb1)}>
                    <div className={classNames(classes.leftSideSubtitleContainer, display.pl2, display.mb1)}>
                        <Typography component="h2" variant="h5">Contact</Typography>
                    </div>
                    <div className={classNames(display.flex, display.flexColumn, display.pl2)}>
                        <a target="_blank" rel="noreferrer" className={classNames(display.flex, display.alignCenter, 
                            text.decorationNone, classes.contactLinks)} href="https://linkedin.com/in/rafael-tivane/">
                            <LinkedInIcon  className={classNames(text.textLight, display.mr1)} /> Linkedin
                        </a>
                        <a target="_blank" rel="noreferrer" className={classNames(display.flex, display.alignCenter, 
                            text.decorationNone, classes.contactLinks)} href="https://github.com/rafael-the-dev/">
                            <GitHubIcon  className={classNames(text.textLight, display.mr1)} /> Github
                        </a>
                        <a target="_blank" rel="noreferrer" className={classNames(display.flex, display.alignCenter, 
                            text.decorationNone, classes.contactLinks)} href="/">
                            <InstagramIcon  className={classNames(text.textLight, display.mr1)} /> Instagram
                        </a>
                    </div>
                </div>
                <div className={classNames(display.flex, display.flexColumn, display.w100, display.mb1)}>
                    <div className={classNames(classes.leftSideSubtitleContainer, display.pl2, display.mb1)}>
                        <Typography component="h2" variant="h5">Education</Typography>
                    </div>
                    <div className={classNames(display.pl2, display.pr1, display.mb1, text.textLight)}>
                        <Typography component="h3" >Self-taught Programmer</Typography>
                        <Typography component="p" className={classNames(text.rem8, display.opacity8)} >
                            Lorem, ipsum dolor sit  nulla, sint numquam id eum. Arincidunt commodi, facilis ea.
                        </Typography>
                    </div>
                    <div className={classNames(display.pl2, display.pr1, display.mb1, text.textLight)}>
                        <Typography component="h3" >Self-taught Programmer</Typography>
                        <Typography component="p" className={classNames(text.rem8, display.opacity8)} >
                            Lorem, ipsum dolor sit  nulla, sint numquam id eum. Arincidunt commodi, facilis ea.
                        </Typography>
                    </div>
                    <div className={classNames(display.pl2, display.pr1, text.textLight)}>
                        <Typography component="h3" >Self-taught Programmer</Typography>
                        <Typography component="p" className={classNames(text.rem8, display.opacity8)} >
                            Lorem, ipsum dolor sit  nulla, sint numquam id eum. Arincidunt commodi, facilis ea.
                        </Typography>
                    </div>
                </div>
                <div className={classNames(display.flex, display.flexColumn, display.w100)}>
                    <div className={classNames(classes.leftSideSubtitleContainer, display.pl2, display.mb1)}>
                        <Typography component="h2" variant="h5">Expertise</Typography>
                    </div>
                    <ul className={classNames(display.flex, display.flexColumn, display.pl2, text.textLight, display.opacity9, display.mt0)}>
                        <li className={classNames(classes.expertiseItem)}>JavaScript</li>
                        <li className={classNames(classes.expertiseItem)}>HTML5</li>
                        <li className={classNames(classes.expertiseItem)}>CSS3</li>
                        <li className={classNames(classes.expertiseItem)}>Material-UI</li>
                        <li className={classNames(classes.expertiseItem)}>Bootstrap 5</li>
                    </ul>
                </div>
                <div className={classNames(display.flex, display.flexColumn, display.w100)}>
                    <div className={classNames(classes.leftSideSubtitleContainer, display.pl2, display.mb1)}>
                        <Typography component="h2" variant="h5">Languages</Typography>
                    </div>
                    <ul className={classNames(display.flex, display.flexColumn, display.pl2, text.textLight, display.opacity9, display.mt0)}>
                        <li className={classNames(classes.expertiseItem)}>English</li>
                        <li className={classNames(classes.expertiseItem)}>Portuguese</li>
                    </ul>
                </div>
            </div>
            <div></div>
        </Paper>
    );
};

export default Resume;