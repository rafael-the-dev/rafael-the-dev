import { Button, Grid, Typography } from '@mui/material';
import classNames from 'classnames';
import { useBackground, useDisplay, useTypography } from '../../styles';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import LatestProject from './LatestProject';
import audiophileImage from '../../assets/images/audiophile.jpg'
import neptuneImage from '../../assets/images/neptune.svg'
import coffeeroasterImage from '../../assets/images/coffeeroaster.jpg'
import redECommerceIcon from '../../assets/images/red-ecommerce-icon.jfif'
import blueCoffeeIcon from '../../assets/images/coffee-cup.png'

const Home = () => {
    const display = useDisplay();
    const text = useTypography();
    const bg = useBackground();
    const classes = useStyles();

    return (
       <main>
           <section>
                <div className={classNames(classes.heroMobileBanner, bg.noRepeat, bg.cover, bg.center)}></div>
               <div className={classNames(display.flex, display.flexColumn, display.pt1, display.px5, display.pb2)}>
                    <Typography component="h1" variant="h5" gutterBottom className={classNames(text.font7)}>Hello! I am Rafael Tivane</Typography>
                    <Typography variant="body2">i'm remote web developer, I am focused on frontend development. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nobis voluptatibus nulla tenetur doloremque deserunt! Aliquam officia quibusdam cumque eligendi neque in dolorem sint, eius itaque, natus laboriosam ipsam repellat.</Typography>
                    <Link to="/register" className={classNames(text.decorationNone, display.mt1)}>
                        <Button className={classNames(classes.headerGetStarted, text.textLight, text.rem8)}>Contact Me</Button>
                    </Link>
               </div>
           </section>
           <section className={classNames(display.px5, classes.projectsSection, display.mb3, display.pt2, display.pb3)}>
                <Typography component="h2" variant="h6" gutterBottom className={classNames(text.font7, classes.projectsSectionTitle)}>
                    My latest projects
                </Typography>
                <Typography variant="body2" className={classNames(classes.projectsSectionDescription)}>
                    Frontend projects built out using hottest tooks that every programmer must know.
                </Typography>
                <div className={classNames(display.flex, display.flexColumn, display.alignStretch, display.mt2)}>
                    <LatestProject 
                        name="Audiophile E-commerce"
                        description="Frontend projects built out using hottest tooks that every programmer must know."
                        image={redECommerceIcon}
                        nameParameter="audiophile-e-commerce"
                    />
                    <LatestProject 
                        name="Planects Fact Web App"
                        description="Frontend projects built out using hottest tooks that every programmer must know."
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxLxJF47Y1wAKA4mo3dvcWrLd-rgm1KutnUg&usqp=CAU"
                        nameParameter="planects-fact-web-app"
                    />
                    <LatestProject 
                        name="Coffeeroasters Subscription Site"
                        description="Frontend projects built out using hottest tooks that every programmer must know."
                        image="https://cdn1.iconfinder.com/data/icons/e-commerance-7/56/coffee__cup__mug__drink__glass-512.png"
                        nameParameter="coffeeroasters-subscription-site"
                    />
                </div>
                <Link to="/register" className={classNames(text.decorationNone, display.mt1)}>
                    <Button className={classNames(classes.headerGetStarted, text.textLight, text.rem8)}>
                        View more
                    </Button>
                </Link>
           </section>
       </main>
    );
};

export default Home;