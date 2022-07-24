import { Button, Checkbox, FormControlLabel, FormGroup, Grid, Hidden, IconButton, Popover, Tooltip } from '@mui/material';
import classNames from 'classnames';
import React, { useCallback, useContext, useEffect, useState, useRef } from 'react';

import { AppContext } from 'src/context/AppContext'
import Card from './components/Card';
import ViewMoreButton from "src/components/button"

import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import classes from './styles.module.css';
import 'react-image-gallery/styles/css/image-gallery.css'

const ProjectsContainer = () => {
    const { projects } = useContext(AppContext);

    const [ numberOfVisibleProjects, setNumberOfVisibleProjects ] = useState(8);
    const [ projectsList, setProjectsList ] = useState([]);
    const [ hasMoreProjects, setHasMoreProjects ] = useState(true);

    const currentPageRef = useRef(1);
    const indexRef = useRef(0);

    const closeStates = useCallback(() => {
        isBoxChecked.current = false;
        setState({
            advanced: false,
            junior: false,
            guru: false,
            intermediate: false,
        });
    }, []);

    const handlePaginationChange = useCallback(() => {
        const startIndex = (currentPageRef.current - 1) * numberOfVisibleProjects;
        currentPageRef.current = currentPageRef.current + 1;

        let index = Object.entries(projects).length / numberOfVisibleProjects;
        if(index % 2 !== 0) index = Math.floor(index) + 1;
        indexRef.current = index;
        setHasMoreProjects(index !== 1)

        if(currentPageRef.current > index)
            currentPageRef.current = 1;
        closeStates();
        setProjectsList(Object.entries(projects).slice(startIndex, startIndex + numberOfVisibleProjects))
    }, [ closeStates, numberOfVisibleProjects, projects ]);

    
    const searchInputRef = useRef(null);
    const searchHandler = () => {
        const searchValue = searchInputRef.current.value.toLowerCase();
        if(searchValue) {
            setProjectsList(Object.entries(projects).filter(item => item[1].name.toLowerCase().includes(searchValue)));
            closeStates();
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
            setNumberOfVisibleProjects(9)
        } else if(width >= 900) {
            setNumberOfVisibleProjects(6)
        } else {
            setNumberOfVisibleProjects(4)
        }
    }, []);

    useEffect(() => {
        setListLength(window.innerWidth);
        const func = event => setListLength(event.target.innerWidth);
        window.addEventListener('resize', func);
        const currentWindow = window;
        return () => { if(currentWindow) currentWindow.removeEventListener('resize', func) };
    }, [ setListLength ]);

    useEffect(() => {
        if(currentPageRef.current >= indexRef.current) {
            currentPageRef.current = 1;
        }

        handlePaginationChange()
    }, [ handlePaginationChange ]);


    const [ anchorEl, setAnchorEl ] = useState(false);
    const [ state, setState ] = useState({
        advanced: false,
        junior: false,
        guru: false,
        intermediate: false,
    });

    useEffect(() => {
        closeStates();
    }, [ closeStates ]);

    const popoverId = anchorEl ? 'popover' : undefined;
    const { advanced, junior, guru, intermediate } = state;
    const isBoxChecked = useRef(false);

    const checkboxSelectHandler = event => {
        const name = event.target.getAttribute('name');
        setState(oldState => ({...oldState, [name.toLowerCase()]: !oldState[name]}));
        isBoxChecked.current = true;
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => setAnchorEl(null);

    const getFilteredInvoices = useCallback(() => {
        let list = Object.entries(projects);
        let filteredList = [];

        if(junior) {
            filteredList = list.filter(item => item[1].level.toLowerCase() === 'junior');
        }
        
        if(intermediate) {
            filteredList = [ ...filteredList, ...list.filter(item => item[1].level.toLowerCase() === 'intermediate')];
        }
        
        if(advanced) {
            filteredList = [ ...filteredList, ...list.filter(item => item[1].level.toLowerCase() === 'advanced')];
        }
        
        if(guru) {
            filteredList = [ ...filteredList, ...list.filter(item => item[1].level.toLowerCase() === 'guru')];
        }

        if(filteredList.length > 0) setProjectsList(filteredList)
        else setProjectsList(list);

    }, [ advanced, junior, guru, intermediate, projects ]);

    useEffect(() => {
        if(isBoxChecked.current) {
            isBoxChecked.current = false;
            getFilteredInvoices();
        }
    }, [ getFilteredInvoices, state ]);

    return (
       <main className={classNames('bg-neutral-800 mt-10 mb-12 px-5 pb-12 pt-8')}>
           <form className={classNames(`bg-neutral-900 flex items-stretch mb-16 sm:px-3`, classes.searchForm,)}>
                <Popover
                    id={popoverId}
                    open={Boolean(anchorEl)}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    >
                    <FormGroup className={classNames(classes.checkboxGroup)}>
                        <FormControlLabel
                            control={<Checkbox checked={junior} onChange={checkboxSelectHandler} name="junior" />}
                            label="Junior"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={intermediate} onChange={checkboxSelectHandler} name="intermediate" />}
                            label="Intermediate"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={advanced} onChange={checkboxSelectHandler} name="advanced" />}
                            label="Advanced"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={guru} onChange={checkboxSelectHandler} name="guru" />}
                            label="Guru"
                        />
                    </FormGroup>
                </Popover>
                <input
                    ref={searchInputRef}
                    placeholder="Insert text here to search"
                    onChange={inputOnChangeHandler}
                    className={classNames(classes.searchInput, `bg-transparent text-base grow border-0 outline-none`)} 
                />
                <Hidden smUp>
                    <Tooltip title="filter projects">
                        <IconButton  onClick={handleClick}>
                            <FilterAltIcon className={classNames(classes.mobileIcons, `text-orange-700`)} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="search">
                        <IconButton onClick={searchHandler}>
                            <SearchIcon className={classNames(classes.mobileIcons, `text-orange-700`)} />
                        </IconButton>
                    </Tooltip>
                </Hidden>
                <Hidden smDown>
                    <Button 
                        aria-describedby={popoverId}
                        aria-haspopup="true" 
                        endIcon={<FilterAltIcon />} 
                        className={classNames('text-color text-orange-700', 'color-transition')}
                        onClick={handleClick}>
                        Filter
                    </Button>
                <Button 
                        endIcon={<SearchIcon />} 
                        onClick={searchHandler}
                        className={classNames(classes.searchButton, 'outline-none text-color text-orange-700', 'color-transition')}>
                        Search
                    </Button>
                </Hidden>
           </form>
           <Grid container className={classNames('mt-8 sm:justify-between')}>
               {
                    projectsList.map((project, index) => (
                       <Card nameParameter={project[0]} project={project[1]} key={index}/>
                    ))
               }
           </Grid>
            <ViewMoreButton 
                onClick={handlePaginationChange} 
                disabled={!hasMoreProjects}>
                View more
            </ViewMoreButton>
       </main>
    )
};

export default ProjectsContainer;