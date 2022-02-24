import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDisplay, useTypography } from '../../styles';
import { useStyles } from './styles';
import classNames from 'classnames';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    const display = useDisplay();
    const text = useTypography();
    const classes = useStyles();

    return (
        <Container maxWidth={false} component="footer" className={classNames(display.flex, display.flexColumn, display.alignStart,
            display.pt2, display.pb2, classes.footer, display.relative, classes.rowSm, classes.justifyBetweenSm, 
            display.px5, 'footer', 'bg-transition')}>
            <div className={classNames(classes.footerBar, display.absolute)}></div>
            <div className={classNames(display.flex, display.flexColumn , display.alignStart)}>
                <Link to="/" className={classNames(text.decorationNone)}>
                    <Typography 
                        variant="h5" 
                        component="h2" 
                        className={classNames(text.textLight, text.noUnderline, text.font7, classes.footerLogo)}>
                        Rafael Tivane
                    </Typography>
                </Link>
                <div className={classNames(display.flex, display.flexColumn, display.alignStart, display.mt1, classes.rowSm)}>
                    <Link className={classNames(text.textLight, classes.footerPageLink, text.decorationNone, classes.mr1Sm)} to="/">Home</Link>
                    <Link className={classNames(text.textLight, classes.footerPageLink, text.decorationNone, classes.mr1Sm)} to="/projects">Projects</Link>
                    <Link className={classNames(text.textLight, classes.footerPageLink, text.decorationNone, classes.mr1Sm)} to="/resume">Resume</Link>
                </div>
            </div>
            <div className={classNames(display.flex, display.flexColumn)}>
                <div className={classNames(display.flex, display.alignCenter, display.justifyCenter, display.mt1)}>
                    <a target="_blank" rel="noreferrer" className={classNames(display.mr1)} href="mailto:luislangabusiness@gmail.com">
                        <EmailIcon  className={classNames(text.textLight)} />
                    </a>
                    <a target="_blank" rel="noreferrer" className={classNames(display.mr1)} href="https://linkedin.com/in/rafael-tivane/">
                        <LinkedInIcon  className={classNames(text.textLight)} />
                    </a>
                    <a target="_blank" rel="noreferrer" className={classNames(display.mr1)} href="https://github.com/rafael-the-dev/">
                        <GitHubIcon  className={classNames(text.textLight)} />
                    </a>
                    <a target="_blank" rel="noreferrer" className={classNames(display.mr)} href="https://www.instagram.com/rafael_the_dev/?hl=en">
                        <InstagramIcon  className={classNames(text.textLight)} />
                    </a>
                </div>
                <Typography 
                    variant="body2" 
                    to="/" 
                    className={classNames(text.textLight, text.noUnderline, classes.headerLogo, display.mt1, 
                    text.mdAlignEnd, classes.mt0Sm)}>
                { new Date().getFullYear()}
                </Typography>
            </div>
        </Container>
    );
};

export default Footer;