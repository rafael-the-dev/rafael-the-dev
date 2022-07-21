import { Button, Drawer, Hidden, IconButton, List, ListItemButton, ListItemIcon , ListItemText, Paper, Typography } from '@mui/material';
import classNames from 'classnames';
import Link from 'next/link';
import React, { useCallback, useContext, useMemo, useState } from 'react';
import { useRouter } from "next/router"

import classes from './styles.module.css';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import DashboardIcon from '@mui/icons-material/Dashboard';

import ListItem from "./components/list-item"

const Header = () => {
    const { pathname } = useRouter();

    const [ canIOpenNavBar, setCanIOpenNavBar ] = useState(false);
    const menuClickHandler = useCallback(() => setCanIOpenNavBar(b => !b), [ ]);
    const clickHandler = useCallback(() => setCanIOpenNavBar(false), []);

    const headerNavigation = useMemo(() => (
        <nav className={classNames(classes.headerNav, 
            `flex flex-col items-start md:ml-8 md:relative h-full pt-4 md:pt-0`)}>
            <Hidden mdUp>
                <IconButton 
                    onClick={menuClickHandler}>
                    <ArrowBackIcon className='text-white hover:text-orange-700' />
                </IconButton>
            </Hidden>
            <List component="ul" className={classNames(`flex flex-col grow px-5 md:flex-row`)}>
                <ListItem href="/" onClick={clickHandler} pathName="/" text="Home" />
                <ListItem href="projects" onClick={clickHandler} pathName="/projects" text="projects" />
                <ListItem href="resume" onClick={clickHandler} pathName="/resume" text="resume" />                
            </List>
            <Hidden mdUp>
                <div className={classNames(`px-5 pb-4 w-full 
                    bg-transparent`, classes.headerDrawerBottom)}>
                    <Link href="resume" onClick={clickHandler} 
                        className={classNames(classes.contactMeLink, `no-underline`)}>
                        <Button 
                            className={classNames(classes.headerGetStarted, classes.headerContactMe, 
                            `bg-orange-700 text-sm capitalize font-bold w-full text-white py-3
                            hover:bg-orange-900`)}>
                            Contact me
                        </Button>
                    </Link>
                </div>
            </Hidden>
        </nav>
    ), [ classes, clickHandler, menuClickHandler, pathname]);

    return (
        <header 
            className={classNames( 
            classes.header, `flex items-center justify-between px-5 md:py-4 bg-neutral-800`)}>
            <div className={classNames(`flex items-center`)}>
                <Link href="/">
                    <Typography 
                        className={classNames(classes.headerLogo, 'font-bold text-2xl uppercase')}>
                        Rafael Tivane
                    </Typography>
                </Link>
                <Hidden mdDown>
                    { headerNavigation }
                </Hidden>
                <Hidden mdUp>
                    <Drawer anchor="right" open={canIOpenNavBar} onClose={menuClickHandler} classes={{ paper: classes.headerDrawe}}>
                        { headerNavigation }
                    </Drawer>
                </Hidden>
            </div>
            <div className={classNames('flex items-center')}>
                <Hidden mdDown>
                    <Link href="/resume" className={classNames('no-underline')}>
                        <Button className={classNames(classes.headerGetStarted, `py-2.5 uppercase px-4 md:font-bold
                        md:ml-4 md:bg-transparent text-sm hover:opacity-80`)}>
                            Contact Me
                        </Button>
                    </Link>
                </Hidden>
                <Hidden mdUp>
                    <IconButton 
                        aria-label="menu" 
                        className={classNames('outline-none border-0 text-white hover:text-orange-500')} 
                        onClick={menuClickHandler}>
                        <MenuIcon />
                    </IconButton>
                </Hidden>
            </div>
        </header>
    );
};

export default Header;