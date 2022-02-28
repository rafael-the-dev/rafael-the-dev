import { Button, Hidden, Paper, Typography } from '@mui/material';
import { useStyles } from './styles';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import rafaelImage from '../../assets/images/rafael-tivane.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import EmailIcon from '@mui/icons-material/Email';//


const LeftSide = ({ classes, open, isMobile}) => (
    <div className={classNames(classes.leftSide, `flex flex-col items-center pt-8 md:pt-4`, 
        { 'hidden': !open.leftSide && isMobile }, 'bg-transition')}>
        <div className={classNames(classes.leftSideIntro, `flex pl-4 mb-8 md:pl-0`)}>
            <figure className={classNames(classes.imageContainer, 'mx-0')}>
                <img 
                    src={rafaelImage}
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

const RightSide = ({ open, classes, isMobile}) => (
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
                    <li className={classNames(classes.experienceItem)}>
                        <Link className={classNames('no-underline color-transition', classes.projectsLink)} to="/projects/dine-restaurant-website">
                            Built out Dine Restaurant Website
                        </Link>
                    </li>
                    <li className={classNames(classes.experienceItem)}>
                        <Link className={classNames('no-underline color-transition', classes.projectsLink)} to="/projects/coffeeroasters-subscription-site">
                            Built out Coffeeroasters Subscription Site
                        </Link>
                    </li>
                    <li className={classNames(classes.experienceItem)}>
                        <Link className={classNames('no-underline color-transition', classes.projectsLink)} to="/projects/myteam-multi-page-website">
                            Built out Myteam Multipage Website
                        </Link>
                    </li>
                    <li className={classNames(classes.experienceItem)}>
                        <Link className={classNames('no-underline color-transition', classes.projectsLink)} to="/projects/planects-fact-web-app">
                            Built out Planects Fact Web App
                        </Link>
                    </li>
                    <li className={classNames(classes.experienceItem)}>
                        <Link className={classNames('no-underline color-transition', classes.projectsLink)} to="/projects/photosnap">
                            Built Photosnap multi-page website
                        </Link>
                    </li>
                    <li className={classNames(classes.experienceItem)}>
                        <Link className={classNames('no-underline color-transition', classes.projectsLink)} to="/projects/devjobs-web-app">
                            Built out Devjobs web app
                        </Link>
                    </li>
                    <li className={classNames(classes.experienceItem)}>
                        <Link className={classNames('no-underline color-transition', classes.projectsLink)} to="/projects">
                            view more projects
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
)

const Resume = () => {
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
        <Paper elevation={2} component="main" className={classNames(classes.main, `flex flex-col items-stretch 
            pt-4 mb-12 mt-8 md:flex-row`)}>
            <Hidden mdUp>
                <div style={{ marginLeft: 7}} className={classNames('flex items-stretch mb-4')}>
                    <Button 
                        onClick={leftSideButtonClickHandler}
                        className={classNames(classes.button, { [classes.selectedButton]: open.leftSide, [classes.notSelectedButton]: !open.leftSide}, 'bg-transition', 'color-transition')}>
                        Left Side
                    </Button>
                    <Button 
                        onClick={leftSideButtonClickHandler}
                        className={classNames(classes.button, { [classes.selectedButton]: open.rightSide, [classes.notSelectedButton]: !open.rightSide}, 'bg-transition', 'color-transition')}>
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