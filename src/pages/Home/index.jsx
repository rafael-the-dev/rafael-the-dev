import { Button, Divider, Grid, Hidden, Typography } from '@mui/material';
import classNames from 'classnames';
import { useDisplay } from '../../styles';
import { useStyles } from './styles';
import { Link, useLocation } from 'react-router-dom';
import LatestProject from './LatestProject';
import redECommerceIcon from '../../assets/images/red-ecommerce-icon.jfif'
import Testimonial from './Testimonial';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import rafaelTivaneImage from '../../assets/images/home-hero-mobile.jpg'
import './styles.scss'

const Home = () => {
    const classes = useStyles();
    const display = useDisplay();
    //const responsive = useResponsive();

    const { setCurrentPage } = useContext(AppContext);

    const Image = ({ src }) => (
        <div className={classNames(classes.aboutMeImageContainer)}>
            <img 
                alt="Alex Spencer"
                className={classNames(`block h-full w-full sm:object-contain`)}
                src={src}
            />
        </div>
    );

    const location = useLocation();
    useEffect(() => {
        if(location.pathname) {
            setCurrentPage(location.pathname);
        }
    }, [ setCurrentPage, location ]);

    return (
       <main className={classNames()}>
           <section className={classNames(display.px5, `sm:relative`)}>
                <div 
                    aria-label='illustration image'
                    className={classNames(classes.heroIllustration, `bg-cover bg-no-repeat bg-center`)}>
                </div>
                <div className={classNames(classes.heroContent, `flex flex-col py-6 sm:absolute sm:bottom-0 
                    sm:bg-white sm:pr-8 md:py-8`)}>
                    <Typography 
                        className={classNames(`font-bold text-blue-900 text-3xl`)}
                        component="h1">
                        Hey, I’m <b>Rafael Tivane</b> and I love building beautiful and responsive websites
                    </Typography>
                    <a 
                        className={classNames(classes.heroLink, `uppercase text-slate-50 bg-blue-900 flex 
                        items-center mt-6 py-1 hover:opacity-90`)}
                        href="#about-me" >
                        <span 
                            aria-label='arrow icon'
                            className={classNames(classes.heroLinkIcon, `bg-no-repeat bg-center`)}>
                        </span>
                        <span className={classNames(`grow text-center`)}>About me</span>
                    </a>
                </div>
            </section>
            <section 
                className={classNames(display.px5, `py-16 sm:flex sm:items-stretch sm:justify-between md:justify-center
                md:py-20 lg:pt-32 lg:pb-16 sm:flex-row-reverse lg:justify-around`)}
                >
                <Hidden smUp>
                    <Image src={rafaelTivaneImage} />
                </Hidden>
                <Hidden mdUp smDown>
                    <Image src={rafaelTivaneImage} />
                </Hidden>
                <Hidden mdDown>
                    <Image src={rafaelTivaneImage} />
                </Hidden>
                <div 
                    className={classNames(classes.aboutMeContent, `py-8 sm:flex 
                    sm:flex-col sm:justify-center`)}
                    id="about-me">
                    <Hidden smUp>
                        <Divider className={classNames(classes.aboutMeDivider, `bg-blue-500 opacity-50`)} />
                    </Hidden>
                    <Typography 
                        className={classNames(`font-bold text-blue-900 text-3xl mt-6 sm:mt-0`)}
                        component="h2">
                        About me
                    </Typography>
                    <Typography 
                        className={classNames(`text-sm sm:text-base leading-7 sm:leading-8 text-blue-800 mt-4`)}
                        component="p">
                        I’m a front-end developer looking for a new role in an exciting company. 
                        I focus on writing accessible HTML, using modern CSS practices and writing 
                        clean JavaScript. When writing JavaScript code, I mostly use React. I’m based in Maputo, 
                        Mozambique, but I’m happy working remotely and have experience in remote teams. 
                        When I’m not coding, you’ll find me outdoors. I love being out in 
                        nature whether that’s going for a walk, run or reading. I’d love you to 
                        check out my work.
                    </Typography>
                    <Link 
                        className={classNames(`mt-4 inline-block`)}
                        to="/">
                        <Button 
                            className={classNames(`text-blue-800 border-blue-900 py-2.5 px-4 
                            hover:bg-blue-900 hover:text-slate-50 hover:border-0`)}
                            variant="outlined">
                            Go to portfolio
                        </Button>
                    </Link>
                </div>
            </section>
           <section className={classNames(display.px5, `flex flex-col mb-8 pt-8 pb-12`, classes.projectsSection, 
               'bg-transition')}>
                <div className={classNames(`flex flex-col`, classes.projectsSectionContent)}>
                    <Typography 
                        component="h2" 
                        variant="h6" 
                        gutterBottom 
                        className={classNames(`font-bold sm:text-3xl`, classes.projectsSectionTitle)}>
                        My latest projects
                    </Typography>
                    <Typography variant="body2" className={classNames(classes.projectsSectionDescription, `text-sm sm:text-base leading-7 sm:leading-8`)}>
                        Frontend projects built out using hottest tools that every programmer must know.
                    </Typography>
                    <Link to="/projects" className={classNames(`mt-4 no-underline hidden`,
                        classes.projectsSectionTableLink)}>
                        <Button 
                            className={classNames(classes.headerGetStarted, `bg-transition text-white text-sm
                            px-6 py-3 md:font-bold `)}>
                            View more
                        </Button>
                    </Link>
                </div>
                <div className={classNames(`flex flex-col items-stretch mt-8`, 
                    classes.projectsSectionProjectsContainer, 'bg-transition')}>
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
                <Link to="/projects" className={classNames(`mt-4 no-underline`, classes.projectsSectionLink)}>
                    <Button className={classNames(`text-white text-sm`, classes.headerGetStarted, 'bg-transition')}>
                        View more
                    </Button>
                </Link>
           </section>
           <section className={classNames(classes.testimonialsContainer, `pb-12`)}>
               <Typography component="h2" variant="h6" className={classNames(display.px5, 
                'projectsSectionTitle sm:px-0', `font-bold mb-8`, classes.testimonialsSectionTitle)}>
                   Testimonials
                </Typography>
               <Grid container>
                   <Testimonial 
                        author="Daniel Carlos da Silva"
                        linkedLink="https://www.linkedin.com/in/danielcarloss/"
                        description="Rafael is a talented and dedicated professional frontend developer, his works are well made, besides this he is available to cooporate. I need his help in my project, after one hour after he was able to clear my doubts and help me to move forward."
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
           <section className={classNames(display.px5, `flex flex-col sm:items-center pb-16 sm:flex-row sm:justify-between`)}>
                <Typography 
                    className={classNames(classes.contactMeTitle, `font-bold
                    text-blue-800 text-3xl sm:mt-0`)}
                    component="h2">
                    Interested in doing a project together?
                </Typography>
                <Link 
                    className={classNames(`mt-6 sm:mt-0 inline-block`)}
                    to="/">
                    <Button 
                        className={classNames(`text-blue-500 border-blue-500 py-2.5 px-4 hover:bg-blue-600
                        hover:text-slate-50`)}
                        variant="outlined">
                        Contact me
                    </Button>
                </Link>
            </section>
       </main>
    );
};

export default Home;


/**
 * <section className={classNames(classes.heroSection, bg.cover, bg.noRepeat, bg.center)}>
                <div className={classNames(classes.heroMobileBanner, bg.noRepeat, bg.cover, bg.center)}></div>
                <div className={classNames(display.flex, display.flexColumn, display.pt1, display.px5, display.pb2,
                        classes.heroSectionContent)}>
                        <Typography component="h1" variant="h5" gutterBottom className={classNames(text.font7, classes.heroSectionContentTitle)}>
                            Hello! I am Rafael Tivane
                        </Typography>
                        <Typography variant="body2" className={classNames(classes.heroSectionContentDescription)}>
                            Professional remote Web Developer focused on Front-end Developement with more than 2 years of experience in web development process, 
                            Involved in app testing, development, management and problem-solving.
                        </Typography>
                        <Link to="/projects" className={classNames(text.decorationNone, display.mt1)}>
                            <Button className={classNames(classes.headerGetStarted, text.textLight, text.rem8, 'bg-transition')}>View Projects</Button>
                        </Link>
                </div>
           </section>
 */