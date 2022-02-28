import { Button, Checkbox, FormControlLabel, FormGroup, Grid, Hidden, IconButton, Popover, Tooltip } from '@mui/material';
import classNames from 'classnames';
import { useDisplay } from '../../styles';
import { useStyles } from './styles';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext'
import Card from './Card';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import React, { useCallback, useEffect, useState, useRef } from 'react';

const ProjectsContainer = () => {
    //const bg = useBackground();
    const display = useDisplay();
    const classes = useStyles();

    const { projects, setCurrentPage } = useContext(AppContext);

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
    //const [ isBoxChecked, setIsBoxChecked ] = useState(false);
    const isBoxChecked = useRef(false);

    const checkboxSelectHandler = event => {
        const name = event.target.getAttribute('name');
        setState(oldState => ({...oldState, [name.toLowerCase()]: !oldState[name]}));
        //setIsBoxChecked(true);
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
            console.log('junior list', list)

        }

        
        if(intermediate) {
            filteredList = [ ...filteredList, ...list.filter(item => item[1].level.toLowerCase() === 'intermediate')];
            console.log('intermediate list', list)

        }

        
        if(advanced) {
            filteredList = [ ...filteredList, ...list.filter(item => item[1].level.toLowerCase() === 'advanced')];
            console.log('advanced list', list)

        }

        
        if(guru) {
            filteredList = [ ...filteredList, ...list.filter(item => item[1].level.toLowerCase() === 'guru')];
            console.log('guru list', list)

        }
        console.log(filteredList);
        console.log(list)
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
       <main className={classNames(display.px5, 'pb-12 pt-6')}>
           <form className={classNames(`flex items-stretch mb-16`, classes.searchForm,)}>
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
                    className={classNames(classes.searchInput, `text-base grow border-0 outline-none`)} 
                />
                <Hidden smUp>
                    <Tooltip title="filter projects">
                        <IconButton  onClick={handleClick}>
                            <FilterAltIcon className={classNames(classes.mobileIcons)} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="search">
                        <IconButton onClick={searchHandler}>
                            <SearchIcon className={classNames(classes.mobileIcons)} />
                        </IconButton>
                    </Tooltip>
                </Hidden>
                <Hidden smDown>
                    <Button 
                        aria-describedby={popoverId}
                        aria-haspopup="true" 
                        endIcon={<FilterAltIcon />} 
                        className={classNames('text-color', 'color-transition')}
                        onClick={handleClick}>
                        Filter
                    </Button>
                <Button 
                        endIcon={<SearchIcon />} 
                        onClick={searchHandler}
                        className={classNames(classes.searchButton, 'outline-none text-color', 'color-transition')}>
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
            <Button 
                onClick={handlePaginationChange} 
                disabled={!hasMoreProjects} 
                className={classNames(classes.loadMoreButton, `text-white text-sm bg-transition
                bg-transparent py-2.5 px-4 capitalize hover:opacity-90`)}>
                View more
            </Button>
       </main>
    )
};

export default ProjectsContainer;