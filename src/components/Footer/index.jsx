import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDisplay } from '../../styles';
import { useStyles } from './styles';
import classNames from 'classnames';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    const display = useDisplay();
    const classes = useStyles();

    return (
        <Container maxWidth={false} component="footer" className={classNames(classes.footer, 
            display.px5, 'footer', 'bg-transition', `flex flex-col py-8 relative sm:flex-row sm:justify-between`)}>
            <div className={classNames(classes.footerBar, 'absolute')}></div>
            <div className={classNames(`flex flex-col `)}>
                <Link to="/" className={classNames('no-underline')}>
                    <Typography 
                        variant="h5" 
                        component="h2" 
                        className={classNames('text-white no-underline font-bold', classes.footerLogo)}>
                        Rafael Tivane
                    </Typography>
                </Link>
                <div 
                    className={classNames(`flex flex-col mt-4 sm:flex-row`)}>
                    <Link className={classNames('text-white no-underline sm:mr-4', classes.footerPageLink)} to="/">Home</Link>
                    <Link className={classNames('text-white no-underline sm:mr-4', classes.footerPageLink)} to="/projects">Projects</Link>
                    <Link className={classNames('text-white no-underline', classes.footerPageLink)} to="/resume">Resume</Link>
                </div>
            </div>
            <div className={classNames('flex flex-col sm:items-end')}>
                <div className={classNames(`flex items-center mt-4 sm:mt-0`)}>
                    <a target="_blank" rel="noreferrer" className={classNames('mr-4')} href="mailto:luislangabusiness@gmail.com">
                        <EmailIcon  className={classNames('text-white')} />
                    </a>
                    <a target="_blank" rel="noreferrer" className={classNames('mr-4')} href="https://linkedin.com/in/rafael-tivane/">
                        <LinkedInIcon  className={classNames('text-white')} />
                    </a>
                    <a target="_blank" rel="noreferrer" className={classNames('mr-4')} href="https://github.com/rafael-the-dev/">
                        <GitHubIcon  className={classNames('text-white')} />
                    </a>
                    <a target="_blank" rel="noreferrer" className={classNames()} href="https://www.instagram.com/rafael_the_dev/?hl=en">
                        <InstagramIcon  className={classNames('text-white')} />
                    </a>
                </div>
                <Typography 
                    variant="body2" 
                    to="/" 
                    className={classNames(classes.headerLogo, 
                    `text-white no-underline mt-4 md:items-end`)}>
                { new Date().getFullYear() }
                </Typography>
            </div>
        </Container>
    );
};

export default Footer;