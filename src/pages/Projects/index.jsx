import { Button, Grid, Typography } from '@mui/material';
import classNames from 'classnames';
import { useBackground, useDisplay, useTypography } from '../../styles';
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

const ProjectsContainer = () => {
    const display = useDisplay();
    const text = useTypography();
    const bg = useBackground();
    const classes = useStyles();

    const { projects } = useContext(AppContext)

    return (
       <main className={classNames(display.px5)}>
           <Grid container className={classNames(display.mt2)}>
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