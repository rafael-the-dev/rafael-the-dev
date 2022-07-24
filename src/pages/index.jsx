import { CardMedia, Hidden, Paper, Typography } from '@mui/material';
import classNames from 'classnames';
import { useContext, useMemo } from 'react';

import classes from "src/styles/Home.module.css"

import Link from "src/components/link";
import Card from "src/components/portfolio-card"
import Button from "src/components/button"
import TestimonialCard from "src/components/testimonial"

import { AppContext } from "src/context/AppContext"

const AboutImage = () => (
    <CardMedia
        component="img"
        className={classes.aboutImage}
        image="/rafael-tivane-2.jpg"
    />
);

const Home = () => {
    const { projects } = useContext(AppContext);

    const portfolio = useMemo(() => {
        return Object.entries(projects).filter(item => [
            'arch-studio-multi-page-website', 'payAPI-multi-page website', 'scoot-multi-page-website', 'audiophile-e-commerce', 'invoice-app', 'devjobs-web-app'
        ].includes(item[0]));
    }, [ projects ]);

    const testimonails = useMemo(() => (
        [
            {
                image: "https://media-exp1.licdn.com/dms/image/C4D03AQH3Y9iC59JdxA/profile-displayphoto-shrink_100_100/0/1657766172391?e=1663804800&v=beta&t=FasBzr6tMUUrV3U7-MVGuIybYnewIy8QxdSoMJmuwRA",
                name: "Daniel Carlos",
                plataform: "Linkedin",
                text: "Rafael is a talented and dedicated professional frontend developer, his works are well made, besides this he is available to cooporate. I need his help in my project, after one hour after he was able to clear my doubts and help me to move forward."
            }, 
            {
                image: "https://media-exp1.licdn.com/dms/image/C4D03AQEajsmy19CXwg/profile-displayphoto-shrink_100_100/0/1641121573551?e=1663804800&v=beta&t=iAAO71pvHiVcDWRuxRcCdaIfkNXF9A8fQg23kSa6fA8",
                name: "Jai Chaudhary",
                plataform: "Linkedin",
                text: "I highly recommend Rafael. Rafael has helped me to understand many concepts of React even after leaving the organization. He is positive and helpful. He has never hesitated to provide support when needed."
            }
        ]
    ), []);

    return (
       <main className={classNames("py-6")}>
           <section className={classNames(classes.hero, 
                "bg-neutral-800 px-5 lg:px-8 py-12 md:flex md:items-center md:justify-between")}>
                <div className="flex flex-col items-center md:items-start">
                    <Typography
                        className="text-center text-white text-lg uppercase md:text-left md:text-xl"
                        component="h1">
                        I am Rafael Tivane<br/>
                        <span className={classNames(classes.position, 'block capitalize font-black mt-4 text-gradient text-3xl sm:text-4xl md:text-6xl')}>
                            frontend developer
                        </span>
                    </Typography>
                    <Link className="mt-8" href="/#contact-me">
                        <Button>Contact me</Button>
                    </Link>
                </div>
                <Hidden mdDown>
                    <Paper 
                        className={classNames(classes.heroImageContainer, "rounded-none")}
                        elevation={4}>
                        <CardMedia 
                            alt="rafael tivane"
                            component="img"
                            className={classes.heroImage}
                            image='/rafael-tivane.jpg'
                        />
                    </Paper>
                </Hidden>
           </section>
           <section className={classNames(classes.about, "bg-neutral-800 mt-6 md:flex md:flex-row-reverse")}>
                <AboutImage />
                <div className="flex flex-col md:justify-center pt-8 pb-14">
                    <Typography
                        component="h2"
                        className={classNames(classes.aboutTitle, "font-bold text-center text-white")}>
                        I love building beautiful and responsive websites
                    </Typography>
                    <Typography 
                        className={classNames(`px-5 md:px-16 text-center text-base text-slate-200 leading-7 sm:leading-8 mt-4`)}
                        component="p">
                        I’m a front-end developer looking for a new role in an exciting company. 
                        I focus on writing accessible HTML, using modern CSS practices and writing 
                        clean JavaScript. When writing JavaScript code, I mostly use React. 
                    </Typography>
                    <Typography
                        className={classNames(`px-5 md:px-16 text-center text-base text-slate-200 leading-7 sm:leading-8 mt-4`)}
                        component="p">
                        I’m based in Maputo, 
                        Mozambique, but I’m happy working remotely and have experience in remote teams. 
                        When I’m not coding, you’ll find me outdoors. I love being out in 
                        nature whether that’s going for a walk, run or reading. I’d love you to 
                        check out my work.
                    </Typography>
                </div>
           </section>
           <section className={classNames("bg-neutral-800 mt-8 py-12 px-5")}>
                <Typography
                    component="h2"
                    className="capitalize font-bold text-center text-white text-2xl md:text-3xl">
                    My portfolio
                </Typography>
                <ul className={classNames(classes.portfolioList, "my-10 sm:flex sm:justify-between sm:flex-wrap")}>
                    {
                        portfolio.map(item => <Card key={item[0]} id={item[0]} { ...item[1]} />)
                    }
                </ul>
                <div className="flex justify-end">
                    <Link className="" href="projects">
                        <Button>
                            View more
                        </Button>
                    </Link>
                </div>
           </section>
           <section className={classNames("bg-neutral-800 mt-8 mb-4 py-12 px-5")}>
                <Typography
                    component="h2"
                    className="capitalize font-bold text-center text-white text-2xl md:text-3xl">
                    testimonials
                </Typography>
                <div className="mt-12 md:flex justify-between">
                    {
                        testimonails.map((testimonial, index) => <TestimonialCard key={index} { ...testimonial } />)
                    }
                </div>
            </section>
       </main>
    );
};

export default Home;