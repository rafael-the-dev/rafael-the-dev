import { Button, Drawer, Grid, Hidden, IconButton, List, ListItem, ListItemButton, ListItemIcon , ListItemText, Paper, Typography } from '@mui/material';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useBackground, useDisplay, useTypography, useResponsive } from '../../styles';
import { useStyles } from './styles'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import React, { useState, useCallback, useMemo } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
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

    const headerNavigation = useMemo(() => (
        <Paper elevation={0} component="nav" className={classNames(responsive.mdMl2, classes.headerNav, 
             responsive.mdRelative, display.h100, display.pt1, responsive.mdPt0)}>
            <Hidden mdUp>
                <Button onClick={menuClickHandler}><ArrowBackIcon classes={{ root: text.textLight}} /></Button>
            </Hidden>
            <List component="ul" className={classNames(display.flex, display.flexColumn, responsive.mdRow)}>
                <ListItem disablePadding component={Link} to="/" >
                    <ListItemButton>
                        <Hidden mdUp>
                            <ListItemIcon classes={{ root: classes.headerNavIcon}} className={classNames(display.mr1)}>
                                <HomeIcon classes={{ root: classNames(text.textLight, { [classes.currentPage]: currentPage === '/'})}} />
                            </ListItemIcon>
                        </Hidden>
                        <ListItemText classes={{ root: classNames(text.textLight, classes.headerNavItemText, 
                            responsive.mdMb0, responsive.mdMt0, { [classes.currentPage]: currentPage === '/'})}} primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding component={Link} to="/projects">
                    <ListItemButton>
                        <Hidden mdUp>
                            <ListItemIcon classes={{ root: classes.headerNavIcon}} className={classNames(display.mr1)}>
                                <HomeIcon classes={{ root: classNames(text.textLight, { [classes.currentPage]: currentPage === '/projects'})}} />
                            </ListItemIcon>
                        </Hidden>
                        <ListItemText classes={{ root: classNames(text.textLight, classes.headerNavItemText, 
                            responsive.mdMb0, responsive.mdMt0, { [classes.currentPage]: currentPage === '/projects'})}} primary="Projects" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding component={Link} to="/resume">
                    <ListItemButton>
                        <Hidden mdUp>
                            <ListItemIcon classes={{ root: classes.headerNavIcon}} className={classNames(display.mr1)}>
                                <HomeIcon classes={{ root: classNames(text.textLight, { [classes.currentPage]: currentPage === '/resume'})}} />
                            </ListItemIcon>
                        </Hidden>
                        <ListItemText classes={{ root: classNames(text.textLight, classes.headerNavItemText, 
                            responsive.mdMb0, responsive.mdMt0, { [classes.currentPage]: currentPage === '/resume'})}} primary="Resume" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Hidden mdUp>
                <Paper elevation={0} className={classNames(display.flex, display.flexColumn, 
                    display.alignStretch, display.absolute, display.w100, bg.transparent, classes.headerDrawerBottom)}>
                    <Link to="/register" className={classNames(text.decorationNone, classes.contactMeLink)}>
                        <Button 
                            className={classNames(classes.headerGetStarted, text.font7, display.w100, classes.headerContactMe, text.textLight)}>
                            Contact me
                        </Button>
                    </Link>
                </Paper>
            </Hidden>
        </Paper>
    ), [ classes, display, responsive, text, menuClickHandler, bg, currentPage]);

    return (
        <Paper elevation={0} component="header" className={classNames(display.flex, display.alignCenter, 
            display.justifyBetween, display.px5, classes.header, responsive.mdPy1)}>
            <Paper elevation={0} className={classNames(display.flex, display.alignCenter)}>
            <Typography 
                variant="h5" 
                component={Link} 
                to="/" 
                className={classNames(text.noUnderline, text.font7, classes.headerLogo)}>
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
                    <Link to="/register" className={classNames(text.decorationNone)}>
                        <Button className={classNames(classes.headerGetStarted)}>Contact Me</Button>
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