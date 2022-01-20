import { Button, Hidden, Paper, Typography } from '@mui/material';
import { useDisplay, useTypography } from '../../styles';
import { useStyles } from './styles';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import rafaelImage from '../../assets/images/rafael-tivane.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useResponsive } from '../../styles/useResponsive';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import EmailIcon from '@mui/icons-material/Email';//


const LeftSide = ({ classes, display, open, isMobile, text, responsive}) => (
    <div className={classNames(classes.leftSide, display.flex, display.flexColumn, display.alignCenter, 
        display.pt2, responsive.mdPt1, { [display.none]: !open.leftSide && isMobile })}>
        <div className={classNames(display.flex, classes.leftSideIntro, display.pl1, responsive.mdPl0, display.mb1)}>
            <figure className={classNames(classes.imageContainer, display.mr0, display.ml0)}>
                <img 
                    src={rafaelImage}
                    alt="rafael tivane" 
                    className={classNames(display.block, display.h100, display.w100, classes.leftSideImage)}
                />
            </figure>
            <Hidden mdUp>
                <div className={classNames(display.ml1, display.pt1, text.textLight)}>
                    <Typography component="h2" variant="h5" className={classNames(text.font7, 
                        display.pl)}>
                        Rafael Tivane
                    </Typography>
                    <Typography component="p" variant="h6" className={classNames(display.opacity8)}>
                        Frontend Developer
                    </Typography>
                </div>
            </Hidden>
        </div>
        <div className={classNames(display.flex, display.flexColumn, display.w100, display.mb1)}>
            <div className={classNames(classes.leftSideSubtitleContainer, display.pl2, display.mb1)}>
                <Typography component="h2" variant="h5">Contact</Typography>
            </div>
            <div className={classNames(display.flex, display.flexColumn, display.pl2)}>
                <a target="_blank" rel="noreferrer" className={classNames(display.flex, display.alignCenter, 
                    text.decorationNone, classes.contactLinks)} href="mailto:luislangabusiness@gmail.com">
                    <EmailIcon  className={classNames(text.textLight, display.mr1)} /> Gmail
                </a>
                <a target="_blank" rel="noreferrer" className={classNames(display.flex, display.alignCenter, 
                    text.decorationNone, classes.contactLinks)} href="https://linkedin.com/in/rafael-tivane/">
                    <LinkedInIcon  className={classNames(text.textLight, display.mr1)} /> Linkedin
                </a>
                <a target="_blank" rel="noreferrer" className={classNames(display.flex, display.alignCenter, 
                    text.decorationNone, classes.contactLinks)} href="https://github.com/rafael-the-dev/">
                    <GitHubIcon  className={classNames(text.textLight, display.mr1)} /> Github
                </a>
                <a target="_blank" rel="noreferrer" className={classNames(display.flex, display.alignCenter, 
                    text.decorationNone, classes.contactLinks)} href="https://www.instagram.com/rafael_the_dev/?hl=en">
                    <InstagramIcon  className={classNames(text.textLight, display.mr1)} /> Instagram
                </a>
            </div>
        </div>
        <div className={classNames(display.flex, display.flexColumn, display.w100, display.mb1)}>
            <div className={classNames(classes.leftSideSubtitleContainer, display.pl2, display.mb1)}>
                <Typography component="h2" variant="h5">Education</Typography>
            </div>
            <div className={classNames(display.pl2, display.pr1, display.mb1, text.textLight)}>
                <Typography component="h3" >React Developer</Typography>
                <a 
                    href="https://www.alura.com.br/" 
                    target="_blank" rel="noreferrer" 
                    className={classNames(text.textLight, text.decorationNone)}>
                    <Typography component="p" className={classNames(text.rem8, display.opacity8)} >
                        Alura Online
                    </Typography>
                </a>
            </div>
            <div className={classNames(display.pl2, display.pr1, display.mb1, text.textLight)}>
                <Typography component="h3" >Self-taught Programmer</Typography>
                <Typography component="p" className={classNames(text.rem8, display.opacity8)} >
                    Developed professional skills based on online researches, tutorials and udemy courses.
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
                <li className={classNames(classes.expertiseItem)}>React</li>
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
);

const RightSide = ({ responsive, display, open, classes, text, isMobile}) => (
    <div className={classNames(responsive.mdPl3, responsive.mdPt2, display.flex, display.alignStretch,
        display.flexColumn, display.flexGrow1, { [display.none]: !open.rightSide && isMobile })}>
        <Typography component="h2" variant="h4" className={classNames(text.font7, classes.rightSideTitle, 
            display.pl1, responsive.mdPl0)}>
            Rafael Tivane
        </Typography>
        <Typography component="p" variant="h6" className={classNames(classes.darkBlue1, 
            classes.rightSidePosition, display.pl1, responsive.mdPl0)}>
            Frontend Developer
        </Typography>
        <div className={classNames(display.pt1)}>
            <div className={classNames(classes.rightSideSubtitleContainer, display.pl1)}>
                <Typography 
                    component="h3" 
                    variant="h6" className={classNames(classes.rightSideSubtitleContainer, text.textLight)}>
                    About me
                </Typography>
            </div>
            <Typography className={classNames(text.rem9, display.opacity9, display.pl1, display.pr1, display.pt1)}>
                Professional remote Web Developer focused on Front-end Developement with more than 2 years of experience in web development process, 
                Involved in app testing, development, management and problem-solving.
            </Typography>
        </div>
        <div className={classNames(display.pt1)}>
            <div className={classNames(classes.rightSideSubtitleContainer, display.pl1)}>
                <Typography 
                    component="h3" 
                    variant="h6" className={classNames(classes.rightSideSubtitleContainer, text.textLight)}>
                    Work Experience
                </Typography>
            </div>
            <div className={classNames(display.pt1, display.pl1)}>
                <Typography component="h4" className={classNames(classes.experienceSubtitle, classes.darkBlue1)}>Frontend Developer</Typography>
                <Typography component="h5" className={classNames(classes.experienceCompa)}>RetriveAI (2021 - 4 Months)</Typography>
                <ul className={classNames(display.flex, display.flexColumn)}>
                    <li className={classNames(classes.experienceItem)}>Work on the front-end of enterprise applications</li>
                    <li className={classNames(classes.experienceItem)}>Meet with team to align on Sprint objectives</li>
                    <li className={classNames(classes.experienceItem)}>Ensure quality by adhering to technical best practices</li>
                    <li className={classNames(classes.experienceItem)}>and pair programming to tackle difficult issues</li>
                    <li className={classNames(classes.experienceItem)}>Collaborate with backend team in ensuaring technical feasibility</li>
                    <li className={classNames(classes.experienceItem)}>code reviews</li>
                </ul>
            </div>
        </div>
        <div className={classNames(display.pt144)}>
            <div className={classNames(display.pt1, display.pl1)}>
                <Typography component="h3" className={classNames(classes.experienceSubtitle, classes.darkBlue1)}>Personal projects</Typography>
                <ul className={classNames(display.flex, display.flexColumn)}>
                    <li className={classNames(classes.experienceItem)}>
                        <Link className={classNames(text.decorationNone, classes.projectsLink)} to="/projects/dine-restaurant-website">
                            Built out Dine Restaurant Website
                        </Link>
                    </li>
                    <li className={classNames(classes.experienceItem)}>
                        <Link className={classNames(text.decorationNone, classes.projectsLink)} to="/projects/coffeeroasters-subscription-site">
                            Built out Coffeeroasters Subscription Site
                        </Link>
                    </li>
                    <li className={classNames(classes.experienceItem)}>
                        <Link className={classNames(text.decorationNone, classes.projectsLink)} to="/projects/myteam-multi-page-website">
                            Built out Myteam Multipage Website
                        </Link>
                    </li>
                    <li className={classNames(classes.experienceItem)}>
                        <Link className={classNames(text.decorationNone, classes.projectsLink)} to="/projects/planects-fact-web-app">
                            Built out Planects Fact Web App
                        </Link>
                    </li>
                    <li className={classNames(classes.experienceItem)}>
                        <Link className={classNames(text.decorationNone, classes.projectsLink)} to="/projects/photosnap">
                            Built Photosnap multi-page website
                        </Link>
                    </li>
                    <li className={classNames(classes.experienceItem)}>
                        <Link className={classNames(text.decorationNone, classes.projectsLink)} to="/projects/devjobs-web-app">
                            Built out Devjobs web app
                        </Link>
                    </li>
                    <li className={classNames(classes.experienceItem)}>and more</li>
                </ul>
            </div>
        </div>
    </div>
)

const Resume = () => {
    const display = useDisplay();
    const text = useTypography();
    const responsive = useResponsive();
    const classes = useStyles();

    const { setCurrentPage } = useContext(AppContext);

    const [ open, setOpen ] = useState({ leftSide: true, rightSide: false });
    const leftSideButtonClickHandler = () => setOpen(o => ({ leftSide: !o['leftSide'], rightSide: !o['rightSide'] }));
    //const rightSideButtonClickHandler = () => setOpen(o => ({ leftSide: !o['leftSide'], rightSide: !o['rightSide'] }))

    
    const location = useLocation();
    useEffect(() => {
        if(location.pathname) {
            setCurrentPage(location.pathname);
        }
    }, [ setCurrentPage, location ]);
    return (
        <Paper elevation={2} component="main" className={classNames(display.flex, display.alignStretch, classes.main, 
        display.pt1, display.mb3, display.mt2, display.flexColumn, responsive.mdRow)}>
            <Hidden mdUp>
                <div style={{ marginLeft: 7}} className={classNames(display.flex, display.alignStretch, display.mb1)}>
                    <Button 
                        onClick={leftSideButtonClickHandler}
                        className={classNames(classes.button, { [classes.selectedButton]: open.leftSide})}>
                        Left Side
                    </Button>
                    <Button 
                        onClick={leftSideButtonClickHandler}
                        className={classNames(classes.button, { [classes.selectedButton]: open.rightSide})}>
                        Right Side
                    </Button>
                </div>
            </Hidden>
            <Hidden mdUp>
                <LeftSide classes={classes} display={display} text={text} open={open} responsive={responsive} isMobile /> 
            </Hidden>
            <Hidden mdDown>
                <LeftSide classes={classes} display={display} text={text} open={open} responsive={responsive} /> 
            </Hidden>
            <Hidden mdUp>
                <RightSide classes={classes} display={display} text={text} open={open} responsive={responsive} isMobile /> 
            </Hidden>
            <Hidden mdDown>
                <RightSide classes={classes} display={display} text={text} open={open} responsive={responsive} /> 
            </Hidden>
        </Paper>
    );
};

export default Resume;