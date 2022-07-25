import { Hidden, Paper, Typography } from '@mui/material';
import Link from "next/link";
import classNames from 'classnames';
import classes from "./styles.module.css"
import { useState } from 'react';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';//

import ProjectLink from "./components/projects-link";
import Button from "./components/button";


const LeftSide = ({ open, isMobile}) => (
    <div className={classNames(classes.leftSide, `bg-neutral-800 flex flex-col items-center pt-8 md:pt-4`, 
        { 'hidden': !open.leftSide && isMobile }, 'bg-transition')}>
        <div className={classNames(classes.leftSideIntro, `flex pl-4 mb-8 md:pl-0`)}>
            <figure className={classNames(classes.imageContainer, 'mx-0')}>
                <img 
                    src="/rafael-tivane.jpg"
                    alt="rafael tivane" 
                    className={classNames('block h-full w-full', classes.leftSideImage)}
                />
            </figure>
            <Hidden mdUp>
                <div className={classNames('ml-4 pt-4 text-white')}>
                    <Typography component="h2" variant="h5" className={classNames('font-bold')}>
                        Rafael Tivane
                    </Typography>
                    <Typography component="p" variant="h6" className={classNames('opacity-80')}>
                        Frontend Developer
                    </Typography>
                </div>
            </Hidden>
        </div>
        <div className={classNames('flex flex-col w-full mb-4')}>
            <div className={classNames(classes.leftSideSubtitleContainer, 'pl-8 mb-4')}>
                <Typography component="h2" variant="h5">Contact</Typography>
            </div>
            <div className={classNames('flex flex-col pl-8')}>
                <a target="_blank" rel="noreferrer" className={classNames('flex items-center no-underline', 
                    classes.contactLinks)} href="mailto:luislangabusiness@gmail.com">
                    <EmailIcon  className={classNames('text-white mr-4')} /> Gmail
                </a>
                <a target="_blank" rel="noreferrer" className={classNames('flex items-center no-underline' 
                    ,classes.contactLinks)} href="https://linkedin.com/in/rafael-tivane/">
                    <LinkedInIcon  className={classNames('text-white mr-4')} /> Linkedin
                </a>
                <a target="_blank" rel="noreferrer" className={classNames('flex items-center no-underline' 
                    ,classes.contactLinks)} href="https://github.com/rafael-the-dev/">
                    <GitHubIcon  className={classNames('text-white mr-4')} /> Github
                </a>
                <a target="_blank" rel="noreferrer" className={classNames('flex items-center no-underline' 
                    ,classes.contactLinks)} href="https://www.instagram.com/rafael_the_dev/?hl=en">
                    <InstagramIcon  className={classNames('text-white mr-4')} /> Instagram
                </a>
            </div>
        </div>
        <div className={classNames('flex flex-col w-full mb-4')}>
            <div className={classNames(classes.leftSideSubtitleContainer, 'pl-8 mb-4')}>
                <Typography component="h2" variant="h5">Education</Typography>
            </div>
            <div className={classNames('pl-8 pr-1 mb-4 text-white')}>
                <Typography component="h3" >React Developer</Typography>
                <a 
                    href="https://www.alura.com.br/" 
                    target="_blank" rel="noreferrer" 
                    className={classNames('text-white no-underline')}>
                    <Typography component="p" className={classNames('text-sm opacity-80')} >
                        Alura Online
                    </Typography>
                </a>
            </div>
            <div className={classNames('pl-8 pr-4 mb-4 text-white')}>
                <Typography component="h3" >Self-taught Programmer</Typography>
                <Typography component="p" className={classNames('text-sm opacity-80')} >
                    Developed professional skills based on online researches, tutorials and udemy courses.
                </Typography>
            </div>
        </div>
        <div className={classNames('flex flex-col w-full', )}>
            <div className={classNames(classes.leftSideSubtitleContainer, 'pl-8 mb-4')}>
                <Typography component="h2" variant="h5">Expertise</Typography>
            </div>
            <ul className={classNames(`flex flex-col pl-8 text-white opacity-90 mt-0`)}>
                <li className={classNames(classes.expertiseItem)}>JavaScript</li>
                <li className={classNames(classes.expertiseItem)}>HTML5</li>
                <li className={classNames(classes.expertiseItem)}>CSS3</li>
                <li className={classNames(classes.expertiseItem)}>React</li>
                <li className={classNames(classes.expertiseItem)}>Material-UI</li>
                <li className={classNames(classes.expertiseItem)}>Bootstrap 5</li>
            </ul>
        </div>
        <div className={classNames('flex flex-col w-full pb-8 md:pb-0')}>
            <div className={classNames(classes.leftSideSubtitleContainer, 'pl-8 mb-4')}>
                <Typography component="h2" variant="h5">Languages</Typography>
            </div>
            <ul className={classNames(`flex flex-col pl-8 text-white opacity-90 mt-0`)}>
                <li className={classNames(classes.expertiseItem)}>English</li>
                <li className={classNames(classes.expertiseItem)}>Portuguese</li>
            </ul>
        </div>
    </div>
);

const RightSide = ({ open, isMobile}) => (
    <div className={classNames(`md:pl-12 md:pt-8 flex items-stretch flex-col grow pb-8`, 
        { 'hidden': !open.rightSide && isMobile })}>
        <Typography component="h2" variant="h4" className={classNames(classes.rightSideTitle, 
            'font-bold pl-4 md:pl-0 color-transition')}>
            Rafael Tivane
        </Typography>
        <Typography component="p" variant="h6" className={classNames(classes.darkBlue1, 'color-transition pl-4 md:pl-0', 
            classes.rightSidePosition)}>
            Frontend Developer
        </Typography>
        <div className={classNames('pt-4')}>
            <div className={classNames(classes.rightSideSubtitleContainer, 'bg-transition pl-4')}>
                <Typography 
                    component="h3" 
                    variant="h6" 
                    className={classNames(classes.rightSideSubtitleContainer, 'bg-transition text-white')}>
                    About me
                </Typography>
            </div>
            <Typography className={classNames(`sm:text-base opacity-90 px-4 pt-4 mb-4`)}>
                I’m a front-end developer looking for a new role in an exciting company. 
                I focus on writing accessible HTML, using modern CSS practices and writing 
                clean JavaScript. When writing JavaScript code, I mostly use React. 
                Besides these I spend time working on personal projects, challenges and learning new skills.
            </Typography>
            <Typography className={classNames(`sm:text-base opacity-90 px-4`)}>
                I’m based in Maputo, 
                Mozambique, but I’m happy working remotely and have experience in remote teams. 
                When I’m not coding, you’ll find me outdoors. I love being out in 
                nature whether that’s going for a walk, run or reading. 
            </Typography>
        </div>
        <div className={classNames('pt-4')}>
            <div className={classNames(classes.rightSideSubtitleContainer, 'bg-transition pl-4')}>
                <Typography 
                    component="h3" 
                    variant="h6" className={classNames(classes.rightSideSubtitleContainer, 'bg-transition text-white')}>
                    Work Experience
                </Typography>
            </div>
            <div className={classNames('pt-4 pl-4')}>
                <Typography 
                    component="h4" 
                    className={classNames(classes.experienceSubtitle, classes.darkBlue1, 'color-transition')}>
                    Frontend Developer
                </Typography>
                <Typography 
                    component="h5" 
                    className={classNames(classes.experienceCompa, 'mb-2')}>
                    RetriveAI (2022 - 2021)
                </Typography>
                <ul className={classNames('flex flex-col pl-8 pr-4 list-disc')}>
                    <li className={classNames(classes.experienceItem)}>Work on the front-end of enterprise applications</li>
                    <li className={classNames(classes.experienceItem)}>Meet with team to align on Sprint objectives</li>
                    <li className={classNames(classes.experienceItem)}>Ensure quality by adhering to technical best practices</li>
                    <li className={classNames(classes.experienceItem)}>and pair programming to tackle difficult issues</li>
                    <li className={classNames(classes.experienceItem)}>Collaborate with backend team in ensuaring technical feasibility</li>
                    <li className={classNames(classes.experienceItem)}>code reviews</li>
                </ul>
            </div>
        </div>
        <div className={classNames()}>
            <div className={classNames('pt-4 pl-4')}>
                <Typography 
                    component="h3" 
                    className={classNames(classes.experienceSubtitle, classes.darkBlue1, 'mb-2 color-transition')}>
                    Personal projects
                </Typography>
                <ul className={classNames('flex flex-col pl-8 pr-4 list-disc')}>
                    <ProjectLink id="dine-restaurant-website" label="Built out Dine Restaurant Website" />
                    <ProjectLink id="coffeeroasters-subscription-site" label="Built out Coffeeroasters Subscription Site" />
                    <ProjectLink id="myteam-multi-page-website" label="Built out Myteam Multipage Website" />
                    <ProjectLink id="planects-fact-web-app" label="Built out Planects Fact Web App" />
                    <ProjectLink id="photosnap" label="Built Photosnap multi-page website" />
                    <ProjectLink id="devjobs-web-app" label="Built out Devjobs web app" />
                </ul>
            </div>
        </div>
    </div>
)

const Resume = () => {
    const [ open, setOpen ] = useState({ leftSide: true, rightSide: false });
    const leftSideButtonClickHandler = () => setOpen(o => ({ leftSide: !o['leftSide'], rightSide: !o['rightSide'] }));

    return (
        <Paper elevation={2} component="main" className={classNames(classes.main, `bg-neutral-800 flex flex-col items-stretch 
            pt-4 mb-12 mt-8 md:flex-row`)}>
            <Hidden mdUp>
                <div style={{ marginLeft: 7}} className={classNames('flex items-stretch mb-4')}>
                    <Button 
                        onClick={leftSideButtonClickHandler}
                        selected={open.leftSide}>
                        Left Side
                    </Button>
                    <Button 
                        onClick={leftSideButtonClickHandler}
                        selected={open.rightSide}>
                        Right Side
                    </Button>
                </div>
            </Hidden>
            <Hidden mdUp>
                <LeftSide classes={classes} open={open} isMobile /> 
            </Hidden>
            <Hidden mdDown>
                <LeftSide classes={classes} open={open} /> 
            </Hidden>
            <Hidden mdUp>
                <RightSide classes={classes} open={open} isMobile /> 
            </Hidden>
            <Hidden mdDown>
                <RightSide classes={classes} open={open} /> 
            </Hidden>
        </Paper>
    );
};

export default Resume;

/*

                Professional remote Web Developer focused on Front-end Developement with more than 2 years of experience in web development process, 
                Involved in app testing, development, management and problem-solving.
    */