import { Button, Checkbox, FormControlLabel, FormGroup, Grid, Hidden, Popover } from '@mui/material';
import classNames from 'classnames';
import { useDisplay, useResponsive, useTypography } from '../../styles';
import { useStyles } from './styles';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext'
import Card from './Card';
import SearchIcon from '@mui/icons-material/Search';
import React, { useCallback, useEffect, useState, useRef } from 'react';

const ProjectsContainer = () => {
    const display = useDisplay();
    const text = useTypography();
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
           setProjectsList(Object.entries(projects).filter(item => item[1].name.toLowerCase().includes(searchValue)));
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
        junior: true,
        guru: false,
        intermediate: true,
    });

    const popoverId = anchorEl ? 'popover' : undefined;
    const { advanced, junior, guru, intermediate } = state;
    const checkboxSelectHandler = event => {
        const name = event.target.getAttribute('name');
        setState(oldState => ({...oldState, [name.toLowerCase()]: !oldState[name]}));
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => setAnchorEl(null);

    /*const getFilteredInvoices = useCallback(() => {
        let filter = []; 
        Object.entries(state).forEach(currentValue => {
            if(currentValue[1]) {
                filter.push(...invoicesList.filter(invoice => invoice.status.toLowerCase() === currentValue[0]));
            }
        }, []);
        if(filter.length > 0)
            return filter;
        else 
            return invoicesList;
    }, [ state, invoicesList ])*/

    return (
       <main className={classNames(display.px5, display.pb3)}>
           <form className={classNames(display.flex, display.alignStretch, display.w100, classes.searchForm, display.mb3)}>
                
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
                    className={classNames(display.flexGrow1, display.borderNone, display.outlineNone, 
                    classes.searchInput)} 
                />
                <Button 
                    aria-describedby={popoverId}
                    aria-haspopup="true" 
                    className={classNames()}
                    onClick={handleClick}>
                    Filter
                </Button>
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