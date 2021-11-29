import { Button, Typography } from '@mui/material';
import classNames from 'classnames';
import { useBackground, useDisplay, useTypography } from '../../styles';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';

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
       </main>
    );
};

export default Home;