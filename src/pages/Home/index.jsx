import { Button, Grid, Typography } from '@mui/material';
import classNames from 'classnames';
import { useBackground, useDisplay, useTypography } from '../../styles';
import { useStyles } from './styles';
import { Link, useLocation } from 'react-router-dom';
import LatestProject from './LatestProject';
import redECommerceIcon from '../../assets/images/red-ecommerce-icon.jfif'
import Testimonial from './Testimonial';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';

const Home = () => {
    const display = useDisplay();
    const text = useTypography();
    const bg = useBackground();
    const classes = useStyles();

    const { setCurrentPage } = useContext(AppContext);

    const location = useLocation();
    useEffect(() => {
        if(location.pathname) {
            setCurrentPage(location.pathname);
        }
    }, [ setCurrentPage, location ]);

    return (
       <main>
           <section className={classNames(classes.heroSection, bg.cover, bg.noRepeat, bg.center)}>
                <div className={classNames(classes.heroMobileBanner, bg.noRepeat, bg.cover, bg.center)}></div>
               <div className={classNames(display.flex, display.flexColumn, display.pt1, display.px5, display.pb2,
                    classes.heroSectionContent)}>
                    <Typography component="h1" variant="h5" gutterBottom className={classNames(text.font7)}>Hello! I am Rafael Tivane</Typography>
                    <Typography variant="body2" className={classNames(classes.heroSectionContentDescription)}>
                        Professional remote Web Developer focused on Front-end Developement with more than 2 years of experience in web development process, 
                        Involved in app testing, development, management and problem-solving.
                    </Typography>
                    <Link to="/projects" className={classNames(text.decorationNone, display.mt1)}>
                        <Button className={classNames(classes.headerGetStarted, text.textLight, text.rem8)}>View Projects</Button>
                    </Link>
               </div>
           </section>
           <section className={classNames(display.px5, display.flex, display.flexColumn, classes.projectsSection, display.mb2, display.pt2, display.pb3)}>
                <div className={classNames(display.flex, display.flexColumn, classes.projectsSectionContent)}>
                    <Typography component="h2" variant="h6" gutterBottom className={classNames(text.font7, classes.projectsSectionTitle)}>
                        My latest projects
                    </Typography>
                    <Typography variant="body2" className={classNames(classes.projectsSectionDescription)}>
                        Frontend projects built out using hottest tools that every programmer must know.
                    </Typography>
                    <Link to="/register" className={classNames(text.decorationNone, display.mt1, display.none,
                        classes.projectsSectionTableLink)}>
                        <Button className={classNames(classes.headerGetStarted, text.textLight, text.rem8)}>
                            View more
                        </Button>
                    </Link>
                </div>
                <div className={classNames(display.flex, display.flexColumn, display.alignStretch, display.mt2, 
                    classes.projectsSectionProjectsContainer)}>
                    <LatestProject 
                        name="Audiophile E-commerce"
                        description="Multi-page e-commerce app with optimal layout for the app depending on their device's screen size."
                        image={redECommerceIcon}
                        nameParameter="audiophile-e-commerce"
                        imageClassName={classNames(classes.audioPhileImage)}
                    />
                    <LatestProject 
                        name="Planects Fact Web App"
                        description='8-page planets fact app that users can view each planet page and toggle between the "Overview", "Internal Structure", and "Surface Geology" tabs.'
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxLxJF47Y1wAKA4mo3dvcWrLd-rgm1KutnUg&usqp=CAU"
                        nameParameter="planects-fact-web-app"
                    />
                    <LatestProject 
                        name="Coffeeroasters Subscription Site"
                        description="3-page coffee subscription website that users can make selections to create a coffee subscription and see an order summary modal of their choices ."
                        image="https://cdn1.iconfinder.com/data/icons/e-commerance-7/56/coffee__cup__mug__drink__glass-512.png"
                        nameParameter="coffeeroasters-subscription-site"
                    />
                </div>
                <Link to="/register" className={classNames(text.decorationNone, display.mt1, classes.projectsSectionLink)}>
                    <Button className={classNames(classes.headerGetStarted, text.textLight, text.rem8)}>
                        View more
                    </Button>
                </Link>
           </section>
           <section className={classNames(display.px5, display.pb3)}>
               <Typography component="h2" variant="h6" className={classNames(text.font7, display.mb2, classes.projectsSectionTitle)}>
                   Testimonials
                </Typography>
               <Grid container>
                   <Testimonial 
                        author="Kady Baker"
                        description="The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned."
                   />
                   <Testimonial 
                        author="Kady Baker"
                        description="The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned."
                   />
                   <Testimonial 
                        author="Kady Baker"
                        description="The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned."
                   />
               </Grid>
           </section>
       </main>
    );
};

export default Home;