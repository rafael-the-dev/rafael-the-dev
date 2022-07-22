import { Container, Typography } from '@mui/material';
import Link from 'src/components/link';
import classes from './styles.module.css';
import classNames from 'classnames';
import { useRouter } from "next/router";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    const { pathname } = useRouter();

    return (
        <Container maxWidth={false} component="footer" className={classNames(classes.footer, 
            'px-5 lg:px-8 footer', 'bg-transition', `flex flex-col py-8 relative sm:flex-row sm:justify-between`)}>
            <div className={classNames(classes.footerBar, 'absolute')}></div>
            <div className={classNames(`flex flex-col `)}>
                <Link href="/" className={classNames('no-underline')}>
                    <Typography 
                        variant="h5" 
                        component="h2" 
                        className={classNames('font-bold text-2xl uppercase md:text-3xl lg:font-black lg:text-4xl', classes.footerLogo)}>
                        Rafael Tivane
                    </Typography>
                </Link>
                <ul 
                    className={classNames(`flex flex-col mt-4 sm:flex-row`)}>
                    <Link 
                        className={classNames('text-white no-underline hover:text-orange-900 sm:mr-4', classes.footerPageLink,
                        { "text-orange-700": pathname === "/"})} 
                        href="/">
                        Home
                    </Link>
                    <Link 
                        className={classNames('text-white no-underline hover:text-orange-900 sm:mr-4', classes.footerPageLink,
                        { "text-orange-700": pathname === "/projects"})} 
                        href="/projects">
                        Projects
                    </Link>
                    <Link 
                        className={classNames('text-white no-underline hover:text-orange-900', classes.footerPageLink,
                        { "text-orange-700": pathname === "/resume"})} 
                        href="/resume">
                        Resume
                    </Link>
                </ul>
            </div>
            <div className={classNames('flex flex-col sm:items-end')}>
                <div className={classNames(`flex items-center mt-4 sm:mt-0`)}>
                    <a target="_blank" rel="noreferrer" className={classNames('mr-4')} href="mailto:luislangabusiness@gmail.com">
                        <EmailIcon  className={classNames('text-white hover:text-orange-700')} />
                    </a>
                    <a target="_blank" rel="noreferrer" className={classNames('mr-4')} href="https://linkedin.com/in/rafael-tivane/">
                        <LinkedInIcon  className={classNames('text-white hover:text-orange-700')} />
                    </a>
                    <a target="_blank" rel="noreferrer" className={classNames('mr-4')} href="https://github.com/rafael-the-dev/">
                        <GitHubIcon  className={classNames('text-white hover:text-orange-700')} />
                    </a>
                    <a target="_blank" rel="noreferrer" className={classNames()} href="https://www.instagram.com/rafael_the_dev/?hl=en">
                        <InstagramIcon  className={classNames('text-white hover:text-orange-700')} />
                    </a>
                </div>
                <Typography 
                    variant="body2" 
                    className={classNames(classes.headerLogo, 
                    `text-white no-underline mt-4 md:items-end`)}>
                { new Date().getFullYear() }
                </Typography>
            </div>
        </Container>
    );
};

export default Footer;