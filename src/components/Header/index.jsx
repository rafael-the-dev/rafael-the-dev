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


const Header = () => {
    const display = useDisplay();
    const text = useTypography();
    const bg = useBackground();
    const responsive = useResponsive();
    const classes = useStyles();

    const [ canIOpenNavBar, setCanIOpenNavBar ] = useState(false);
    const menuClickHandler = useCallback(() => setCanIOpenNavBar(b => !b), [ ]);

    const headerNavigation = useMemo(() => (
        <Paper elevation={0} component="nav" className={classNames(responsive.mdMl2, classes.headerNav, 
             responsive.mdRelative, display.h100, display.pt1, responsive.mdPt0)}>
            <Hidden mdUp>
                <Button onClick={menuClickHandler}><ArrowBackIcon classes={{ root: text.textLight}} /></Button>
            </Hidden>
            <List component="ul" className={classNames(display.flex, display.flexColumn, responsive.mdRow)}>
                <ListItem disablePadding >
                    <ListItemButton>
                        <ListItemIcon classes={{ root: classes.headerNavIcon}} className={classNames(display.mr1)}>
                            <HomeIcon classes={{ root: text.textLight}} />
                        </ListItemIcon>
                        <ListItemText classes={{ root: text.textLight}} primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon classes={{ root: classes.headerNavIcon}} className={classNames(display.mr1)}>
                            <HomeIcon classes={{ root: text.textLight}} />
                        </ListItemIcon>
                        <ListItemText classes={{ root: text.textLight}} primary="About us" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon classes={{ root: classes.headerNavIcon}} className={classNames(display.mr1)}>
                            <HomeIcon classes={{ root: text.textLight}} />
                        </ListItemIcon>
                        <ListItemText classes={{ root: text.textLight}} primary="Blogs" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Hidden mdUp>
                <Paper elevation={0} className={classNames(display.flex, display.flexColumn, 
                    display.alignStretch, display.absolute, display.w100, classes.headerDrawerBottom)}>
                    <Link to="/register" className={classNames(text.decorationNone, classes.contactMeLink)}>
                        <Button 
                            className={classNames(classes.headerGetStarted, text.font7, display.w100, classes.headerContactMe, text.textLight)}>
                            Contact me
                        </Button>
                    </Link>
                </Paper>
            </Hidden>
        </Paper>
    ), [ classes, display, responsive, text, menuClickHandler]);

    return (
        <Paper elevation={0} component="header" className={classNames(display.flex, display.alignCenter, 
            display.justifyBetween, display.px5, classes.header)}>
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
                    <Link to="/sign-in" className={classNames(text.noUnderline)}>
                        <Button>Log in</Button>
                    </Link>
                    <Link to="/register" className={classNames(text.decorationNone)}>
                        <Button className={classNames(classes.headerGetStarted)}>Get Started</Button>
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