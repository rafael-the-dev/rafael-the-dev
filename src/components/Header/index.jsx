import { Button, Drawer, Hidden, List, ListItem, ListItemButton, ListItemIcon , ListItemText, Paper, Typography } from '@mui/material';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useBackground, useDisplay, useTypography, useResponsive } from '../../styles';
import { useStyles } from './styles'
import React, { useState, useCallback, useMemo } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'


const Header = () => {
    const display = useDisplay();
    const text = useTypography();
    const bg = useBackground();
    const responsive = useResponsive();
    const classes = useStyles();

    const { currentPage } = useContext(AppContext);

    const [ canIOpenNavBar, setCanIOpenNavBar ] = useState(false);
    const menuClickHandler = useCallback(() => setCanIOpenNavBar(b => !b), [ ]);
    const clickHandler = useCallback(() => setCanIOpenNavBar(false), []);

    const headerNavigation = useMemo(() => (
        <Paper elevation={0} component="nav" className={classNames(classes.headerNav, 
            `md:ml-8 md:relative h-full pt-4 md:pt-0`)}>
            <Hidden mdUp>
                <Button onClick={menuClickHandler}><ArrowBackIcon classes={{ root: 'text-white'}} /></Button>
            </Hidden>
            <List component="ul" className={classNames(`flex flex-col md:flex-row`)}>
                <ListItem disablePadding onClick={clickHandler} component={Link} to="/" >
                    <ListItemButton>
                        <Hidden mdUp>
                            <ListItemIcon classes={{ root: classes.headerNavIcon}} className={classNames('mr-4')}>
                                <HomeIcon classes={{ root: classNames('text-white', { [classes.currentPage]: currentPage === '/'})}} />
                            </ListItemIcon>
                        </Hidden>
                        <ListItemText classes={{ root: classNames('text-white md:my-0 md:text-black', 'color-transition', classes.headerNavItemText, 
                            { [classes.currentPage]: currentPage === '/'})}} primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding onClick={clickHandler} component={Link} to="/projects">
                    <ListItemButton>
                        <Hidden mdUp>
                            <ListItemIcon classes={{ root: classes.headerNavIcon}} className={classNames('mr-4')}>
                                <DashboardIcon classes={{ root: classNames('text-white', { [classes.currentPage]: currentPage === '/projects'})}} />
                            </ListItemIcon>
                        </Hidden>
                        <ListItemText classes={{ root: classNames('text-white md:my-0 md:text-black', 'color-transition', classes.headerNavItemText, 
                            { [classes.currentPage]: currentPage === '/projects'})}} primary="Projects" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding onClick={clickHandler} component={Link} to="/resume">
                    <ListItemButton>
                        <Hidden mdUp>
                            <ListItemIcon classes={{ root: classes.headerNavIcon}} className={classNames('mr-4')}>
                                <ArticleIcon classes={{ root: classNames('text-white', { [classes.currentPage]: currentPage === '/resume'})}} />
                            </ListItemIcon>
                        </Hidden>
                        <ListItemText classes={{ root: classNames('text-white md:my-0 md:text-black ', 'color-transition', classes.headerNavItemText, 
                            { [classes.currentPage]: currentPage === '/resume'})}} primary="Resume" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Hidden mdUp>
                <Paper elevation={0} className={classNames(`flex flex-col items-stretch absolute w-full 
                    bg-transparent`, classes.headerDrawerBottom)}>
                    <Link to="/resume" onClick={clickHandler} 
                        className={classNames(classes.contactMeLink, `no-underline`)}>
                        <Button 
                            className={classNames(classes.headerGetStarted, classes.headerContactMe, 
                            'bg-transition', `bg-white text-sm capitalize font-bold w-full text-white py-3
                            hover:border hover:border-white hover:border-solid`)}>
                            Contact me
                        </Button>
                    </Link>
                </Paper>
            </Hidden>
        </Paper>
    ), [ classes, clickHandler, menuClickHandler, currentPage]);

    return (
        <Paper elevation={0} component="header" className={classNames(display.flex, display.alignCenter, 
            display.justifyBetween, display.px5, classes.header, responsive.mdPy1)}>
            <Paper elevation={0} className={classNames(display.flex, display.alignCenter)}>
            <Typography 
                variant="h5" 
                component={Link} 
                to="/" 
                className={classNames(text.noUnderline, text.font7, classes.headerLogo, 'text-color', 'color-transition')}>
                Rafael Tivane
            </Typography>
                <Hidden mdDown>
                    { headerNavigation }
                </Hidden>
                <Hidden mdUp>
                    <Drawer anchor="right" open={canIOpenNavBar} onClose={menuClickHandler} classes={{ paper: classes.headerDrawe}}>
                        { headerNavigation }
                    </Drawer>
                </Hidden>
            </Paper>
            <Paper elevation={0} className={classNames(display.flex, display.alignCenter)}>
                <Hidden mdDown>
                    <Link to="/resume" className={classNames(text.decorationNone)}>
                        <Button className={classNames(classes.headerGetStarted, `py-2.5 uppercase px-4 md:font-bold
                        md:ml-4 text-sm`)}>
                            Contact Me
                        </Button>
                    </Link>
                </Hidden>
                <Hidden mdUp>
                    <button aria-label="menu" className={classNames(bg.transparent, display.outlineNone, 
                        display.borderNone)} onClick={menuClickHandler}>
                        <MenuIcon />
                    </button>
                </Hidden>
            </Paper>
        </Paper>
    );
};

export default Header;

/**
 * 
        <Paper 
            elevation={0}
            component="header" 
            className={classNames(display.flex, display.justifyBetween, display.alignCenter, classes.header)}>
            <Typography variant="h5" component={Link} to="/" className={classNames(text.noUnderline, text.font7)}>Rafael Tivane</Typography>
            <IconButton>
                <MenuOutlinedIcon />
            </IconButton>
        </Paper>
 */