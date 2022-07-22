import { Button, Hidden, IconButton, List, ListItemButton, ListItemIcon , ListItemText, Paper, Typography } from '@mui/material';
import classNames from 'classnames';
import Link from 'next/link';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';

import classes from './styles.module.css';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuIcon from '@mui/icons-material/Menu';

import ListItem from "./components/list-item"
import Drawer from "src/components/drawer"

const Header = () => {
    const openHandler = useRef(null);
    const closeHandler = useRef(null);
    const headerRef = useRef(null);

    const scrollHandler = useCallback(() => {
        if(window.scrollY > 80) {
            if(!headerRef.current.classList.contains(classes.headerFixed))
                headerRef.current.classList.add(classes.headerFixed);
        } else {
            if(headerRef.current.classList.contains(classes.headerFixed))
                headerRef.current.classList.remove(classes.headerFixed);
        }
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);

        const currentWindow = window;
        return () => {
            if(currentWindow) currentWindow.removeEventListener("scroll", scrollHandler)
        }
    }, [ scrollHandler ])

    const headerNavigation = useMemo(() => (
        <nav className={classNames(classes.headerNav, 
            `flex flex-col items-start md:ml-8 md:relative h-full pt-4 md:pt-0`)}>
            <Hidden mdUp>
                <IconButton 
                    onClick={() => closeHandler.current?.()}>
                    <ArrowBackIcon className='text-white hover:text-orange-700' />
                </IconButton>
            </Hidden>
            <List component="ul" className={classNames(`flex flex-col grow px-5 md:flex-row`)}>
                <ListItem href="/"  pathName="/" text="Home" />
                <ListItem href="projects"  pathName="/projects" text="projects" />
                <ListItem href="resume"  pathName="/resume" text="resume" />                
            </List>
            <Hidden mdUp>
                <div className={classNames(`px-5 pb-4 w-full 
                    bg-transparent`, classes.headerDrawerBottom)}>
                    <Link href="resume"
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
    ), [ classes ]);

    return (
        <header 
            className={classNames( 
            classes.header, `flex items-center justify-between px-5 lg:px-8 md:py-4 bg-neutral-800`)}
            ref={headerRef}>
            <div className={classNames(`flex items-center`)}>
                <Link href="/">
                    <Typography 
                        className={classNames(classes.headerLogo, 'font-bold text-2xl text-gradient uppercase md:text-3xl lg:font-black lg:text-4xl')}>
                        Rafael Tivane
                    </Typography>
                </Link>
                <Hidden mdUp>
                    <Drawer 
                        onClick={openHandler}
                        onClose={closeHandler}
                        drawerPaperClassName={classes.headerDrawe}>
                        { headerNavigation }
                    </Drawer>
                </Hidden>
            </div>
            <div className={classNames('flex items-center')}>
                <Hidden mdDown>
                    { headerNavigation }
                </Hidden>
                <Hidden mdUp>
                    <IconButton 
                        aria-label="menu" 
                        className={classNames('outline-none border-0 text-white hover:text-orange-500')} 
                        onClick={() => openHandler.current?.()}>
                        <MenuIcon />
                    </IconButton>
                </Hidden>
            </div>
        </header>
    );
};

export default Header;