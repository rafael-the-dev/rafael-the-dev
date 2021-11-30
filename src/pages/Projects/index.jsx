import { Button, Grid, Typography } from '@mui/material';
import classNames from 'classnames';
import { useBackground, useDisplay, useResponsive, useTypography } from '../../styles';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
//import audiophileImage from '../../assets/images/audiophile.jpg'
//import neptuneImage from '../../assets/images/neptune.svg'
/*import coffeeroasterImage from '../../assets/images/coffeeroaster.jpg'
import redECommerceIcon from '../../assets/images/red-ecommerce-icon.jfif'
import blueCoffeeIcon from '../../assets/images/coffee-cup.png'*/
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext'
import Card from './Card';
import SearchIcon from '@mui/icons-material/Search';

const ProjectsContainer = () => {
    const display = useDisplay();
    const text = useTypography();
    const bg = useBackground();
    const responsive = useResponsive();
    const classes = useStyles();

    const { projects } = useContext(AppContext)

    return (
       <main className={classNames(display.px5)}>
           <form className={classNames(display.flex, display.alignStretch, display.w100, classes.searchForm, display.mb3)}>
               <input className={classNames(display.flexGrow1, display.borderNone, display.outlineNone, classes.searchInput)} />
               <Button endIcon={<SearchIcon />} className={classNames(display.outlineNone, classes.searchButton)}>Search</Button>
           </form>
           <Grid container className={classNames(display.mt2, responsive.mdMt2)}>
               {
                   Object.entries(projects).map((project, index) => (
                       <Card nameParameter={project[0]} project={project[1]} key={index}/>
                   ))
               }
           </Grid>
       </main>
    )
};

export default ProjectsContainer;