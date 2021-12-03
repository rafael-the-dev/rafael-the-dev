import { Button, Grid } from '@mui/material';
import classNames from 'classnames';
import { useBackground, useDisplay, useResponsive, useTypography } from '../../styles';
import { useStyles } from './styles';
//import audiophileImage from '../../assets/images/audiophile.jpg'
//import neptuneImage from '../../assets/images/neptune.svg'
/*import coffeeroasterImage from '../../assets/images/coffeeroaster.jpg'
import redECommerceIcon from '../../assets/images/red-ecommerce-icon.jfif'
import blueCoffeeIcon from '../../assets/images/coffee-cup.png'*/
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext'
import Card from './Card';
import SearchIcon from '@mui/icons-material/Search';
import React, { useCallback, useEffect, useState, useRef } from 'react';

const ProjectsContainer = () => {
    const display = useDisplay();
    const text = useTypography();
    const bg = useBackground();
    const responsive = useResponsive();
    const classes = useStyles();

    const { projects, setCurrentPage } = useContext(AppContext);

    const [ numberOfVisibleProjects, setNumberOfVisibleProjects ] = useState(8);
    const [ projectsList, setProjectsList ] = useState([]);
    const [ hasMoreProjects, setHasMoreProjects ] = useState(true);

    const currentPageRef = useRef(1);
    const indexRef = useRef(0);
    const handlePaginationChange = useCallback(() => {
        const startIndex = (currentPageRef.current - 1) * numberOfVisibleProjects;
        currentPageRef.current = currentPageRef.current + 1;

        let index = Object.entries(projects).length / numberOfVisibleProjects;
        if(index % 2 !== 0) index = Math.floor(index) + 1;
        indexRef.current = index;
        setHasMoreProjects(index !== 1)

        if(currentPageRef.current > index)
            currentPageRef.current = 1;

        setProjectsList(Object.entries(projects).slice(startIndex, startIndex + numberOfVisibleProjects))
    }, [ numberOfVisibleProjects, projects ]);

    
    const searchInputRef = useRef(null);
    const searchHandler = () => {
        const searchValue = searchInputRef.current.value.toLowerCase();
        if(searchValue) {
           setProjectsList (Object.entries(projects).filter(item => item[1].name.toLowerCase().includes(searchValue)));
        }
    };

    const inputOnChangeHandler = event => {
        const value = event.target.value;
        if(value === '') {
            handlePaginationChange();
        }
    };

    const setListLength = useCallback(width => {
        if(width >= 1400) {
            setNumberOfVisibleProjects(12)
        } else if(width >= 900) {
            setNumberOfVisibleProjects(8)
        } else if(width >= 600) {
            setNumberOfVisibleProjects(6)
        } else {
            setNumberOfVisibleProjects(4)
        }
    }, []);

    useEffect(() => {
        setListLength(window.innerWidth);
        const func = event => setListLength(event.target.innerWidth);
        window.addEventListener('resize', func)
        return () => window.removeEventListener('resize', func);
    }, [ setListLength ]);

    useEffect(() => {
        if(currentPageRef.current >= indexRef.current) {
            currentPageRef.current = 1;
        }

        handlePaginationChange()
    }, [ handlePaginationChange ]);

    const location = useLocation();
    useEffect(() => {
        if(location.pathname) {
            setCurrentPage(location.pathname);
        }
    }, [ setCurrentPage, location ]);

    return (
       <main className={classNames(display.px5, display.pb3)}>
           <form className={classNames(display.flex, display.alignStretch, display.w100, classes.searchForm, display.mb3)}>
                <input
                    ref={searchInputRef}
                    placeholder="Insert text here to search"
                    onChange={inputOnChangeHandler}
                    className={classNames(display.flexGrow1, display.borderNone, display.outlineNone, 
                    classes.searchInput)} 
                />
               <Button 
                    endIcon={<SearchIcon />} 
                     onClick={searchHandler}
                    className={classNames(display.outlineNone, classes.searchButton)}>
                    Search
                </Button>
           </form>
           <Grid container className={classNames(display.mt2, responsive.mdMt2)}>
               {
                    projectsList.map((project, index) => (
                       <Card nameParameter={project[0]} project={project[1]} key={index}/>
                    ))
               }
           </Grid>
            <Button onClick={handlePaginationChange} disabled={!hasMoreProjects} className={classNames(classes.loadMoreButton, text.textLight, text.rem8)}>
                View more
            </Button>
       </main>
    )
};

export default ProjectsContainer;