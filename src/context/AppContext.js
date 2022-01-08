import React, { createContext, useState } from 'react';
import redECommerceIcon from '../assets/images/red-ecommerce-icon.jfif'

export const AppContext = createContext();
AppContext.displayName = 'AppContext';

export const AppContextProvider = ({ children }) => {
    const projects = {
        'audiophile-e-commerce': {
            backward: '/projects/myteam-multi-page-website',
            forward: '/projects/dine-restaurant-website',
            liveURL: 'https://pro-audiophile-ecommerce.netlify.app/',
            sourceCodeURL: 'https://github.com/rafael-the-dev/Audiophile-E-commerce',
            name: 'Audiophile e-commerce',
            level: 'guru',
            videoURL: '',
            imageLink: `${redECommerceIcon}`,
            content: {
                description: "Audiophile e-commerce is a frontend project for shopping with optimal layout for the app depending on their device's screen size",
                features: [
                    "View the optimal layout for the app depending on their device's screen size", 
                    "See hover states for all interactive elements on the page",
                    "Add/Remove products from the cart",
                    "Edit product quantities in the cart",
                    "Fill in all fields in the checkout",
                    "Receive form validations if fields are missed or incorrect during checkout",
                    {
                        name: 'See correct checkout totals depending on the products in the cart',
                        list: [
                            'Shipping always adds $50 to the order',
                            'VAT is calculated as 20% of the product total, excluding shipping'
                        ]
                    },
                    "See an order confirmation modal after checking out with an order summary",
                    "Keep track of what's in the cart, even after refreshing the browser"
                ],
                tools: [
                    {
                        name: 'React JS',
                        url: ''
                    },
                    {
                        name: 'HTML',
                        url: ''
                    },
                    {
                        name: 'CSS',
                        url: ''
                    },
                    {
                        name: 'JavaScript',
                        url: ''
                    },
                    {
                        name: 'Redux',
                        url: ''
                    },
                    {
                        name: 'React Router Dom',
                        url: ''
                    }
                ]

            }
        },
        'dine-restaurant-website': {
            backward: '/projects/audiophile-e-commerce',
            forward: '/projects/coffeeroasters-subscription-site',
            liveURL: 'https://pro-dine-restaurant.netlify.app/',
            sourceCodeURL: 'https://github.com/rafael-the-dev/Dine-restaurant-website',
            name: 'Dine Restaurant Website',
            level: 'intermediate',
            videoURL: '',
            imageLink: 'https://i.pinimg.com/originals/c9/b9/85/c9b985bba6c9d60ab8955099bc633dcf.png',
            content: {
                description: 'Dine Restaurant Website is a frontend project for shopping',
                features: [
                    "View the optimal layout for the app depending on their device's screen size", 
                    "See hover states for all interactive elements on the page",
                    "See the correct content for the Family Gatherings, Special Events, and Social Events section when the user clicks each tab",
                    "Receive form validations if fields are missed or incorrect during checkout",
                    {
                        name: 'Receive an error message when the booking form is submitted if:',
                        list: [
                            'The Name or Email Address fields are empty should show "This field is required"',
                            'The Email Address is not formatted correctly should show "Please use a valid email address"',
                            'Any of the Pick a date or Pick a time fields are empty should show "This field is incomplete"'
                        ]
                    },
                ],
                tools: [
                    {
                        name: 'React JS',
                        url: ''
                    },
                    {
                        name: 'HTML',
                        url: ''
                    },
                    {
                        name: 'CSS',
                        url: ''
                    },
                    {
                        name: 'JavaScript',
                        url: ''
                    },
                    {
                        name: 'Material-ui',
                        url: ''
                    },
                    {
                        name: 'classnames',
                        url: ''
                    },
                    {
                        name: 'Loadable components',
                        url: ''
                    },
                    {
                        name: 'React Hook form',
                        url: ''
                    },
                    {
                        name: 'React router dom',
                        url: ''
                    }
                ]

            }
        },
        'coffeeroasters-subscription-site': {
            backward: '/projects/dine-restaurant-website',
            forward: '/projects/photosnap',
            liveURL: 'https://pro-coffeeroasters.netlify.app/',
            sourceCodeURL: 'https://github.com/rafael-the-dev/Coffeeroasters-subscription-site',
            name: 'Coffeeroasters Subscription Site',
            level: 'intermediate',
            videoURL: '',
            imageLink: 'https://cdn1.iconfinder.com/data/icons/e-commerance-7/56/coffee__cup__mug__drink__glass-512.png',
            content: {
                description: 'Coffeeroasters Subscription Site is a frontend project for coffee subscription  that users can make selections to create a coffee subscription and see an order summary modal of their choices .',
                features: [
                    "View the optimal layout for the app depending on their device's screen size", 
                    "See hover states for all interactive elements on the page",
                    "Make selections to create a coffee subscription and see an order summary modal of their choices (details provided below)",
                    {
                        name: 'Calculating per month cost for the Order Summary modal',
                        list: [
                            'If Every Week is selected, the Order Summary modal should show the per shipment price multiplied by 4. For example, if 250g weight is selected, the price would be $28.80/month',
                            'If Every 2 Weeks is selected, the Order Summary modal should show the per shipment price multiplied by 2. For example, if 250g weight is selected, the price would be $19.20/month',
                            'If Every Month is selected, the Order Summary modal should show the per shipment price multiplied by 1. For example, if 250g weight is selected, the price would be $12.00/month'
                        ]
                    },
                    "See an order confirmation modal after checking out with an order summary"
                ],
                tools: [
                    {
                        name: 'React JS',
                        url: ''
                    },
                    {
                        name: 'HTML',
                        url: ''
                    },
                    {
                        name: 'CSS',
                        url: ''
                    },
                    {
                        name: 'JavaScript',
                        url: ''
                    },
                    {
                        name: 'Material-ui',
                        url: ''
                    },
                    {
                        name: 'classnames',
                        url: ''
                    },
                    {
                        name: 'Material-ui',
                        url: ''
                    },
                    {
                        name: 'classnames',
                        url: ''
                    }
                ]

            }
        },
        'photosnap': {
            backward: '/projects/coffeeroasters-subscription-site',
            forward: '/projects/devjobs-web-app',
            liveURL: 'https://pro-audiophile-ecommerce.netlify.app/',
            sourceCodeURL: 'https://github.com/rafael-the-dev/photosnap',
            name: 'Photosnap multi-page website',
            level: 'advanced',
            videoURL: '',
            imageLink: 'https://cdn4.iconfinder.com/data/icons/traveling-and-tourism/135/Landscape-512.png',
            content: {
                description: 'Audiophile e-commerce is a frontend project for shopping',
                features: [
                    "View the optimal layout for the app depending on their device's screen size", 
                    "See hover states for all interactive elements on the page",
                ],
                tools: [
                    {
                        name: 'React JS',
                        url: ''
                    },
                    {
                        name: 'HTML',
                        url: ''
                    },
                    {
                        name: 'CSS',
                        url: ''
                    },
                    {
                        name: 'JavaScript',
                        url: ''
                    },
                    {
                        name: 'React Router Dom',
                        url: ''
                    },
                    {
                        name: 'SASS',
                        url: ''
                    }
                ]

            }
        },
        'devjobs-web-app': {
            backward: '/projects/photosnap',
            forward: '/projects/planects-fact-web-app',
            liveURL: 'https://pro-devjobs.netlify.app/',
            sourceCodeURL: 'https://github.com/rafael-the-dev/devjobs',
            name: 'Devjobs web app',
            level: 'advanced',
            videoURL: '',
            imageLink: 'https://png.pngitem.com/pimgs/s/133-1337753_job-vector-vacancy-job-icon-hd-png-download.png',
            content: {
                description: 'Devjobs web app is a frontend project for shopping',
                features: [
                    "View the optimal layout for the app depending on their device's screen size", 
                    "See hover states for all interactive elements on the page",
                    "Be able to filter jobs on the index page by title, location, and whether a job is for a full-time position",
                    "Be able to click a job from the index page so that they can read more information and apply for the job",
                    "Toggle theme state from light to dark, vice-versa"
                ],
                tools: [
                    {
                        name: 'React JS',
                        url: ''
                    },
                    {
                        name: 'HTML',
                        url: ''
                    },
                    {
                        name: 'CSS',
                        url: ''
                    },
                    {
                        name: 'JavaScript',
                        url: ''
                    },
                    {
                        name: 'react router dom',
                        url: ''
                    },
                    {
                        name: 'React-Bootstrap',
                        url: ''
                    },
                    {
                        name: 'loadable-components',
                        url: ''
                    }
                ]

            }
        },
        'planects-fact-web-app': {
            backward: '/projects/devjobs-web-app',
            forward: '/projects/myteam-multi-page-website',
            liveURL: 'https://pro-planets-fact-site.netlify.app',
            sourceCodeURL: 'https://github.com/rafael-the-dev/planect-fact-site',
            name: 'Planects Fact Web App',
            level: 'intermediate',
            videoURL: '',
            imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxLxJF47Y1wAKA4mo3dvcWrLd-rgm1KutnUg&usqp=CAU',
            content: {
                description: '8-page planets fact app is a front-end app that users can view each planet page and toggle between the "Overview", "Internal Structure", and "Surface Geology" tabs.',
                features: [
                    "View the optimal layout for the app depending on their device's screen size", 
                    'See hover states for all interactive elements on the page View each planet page and toggle between the "Overview", "Internal Structure", and "Surface Geology" tabs',
                ],
                tools: [
                    {
                        name: 'React JS',
                        url: ''
                    },
                    {
                        name: 'HTML',
                        url: ''
                    },
                    {
                        name: 'CSS',
                        url: ''
                    },
                    {
                        name: 'JavaScript',
                        url: ''
                    },
                    {
                        name: 'react router dom',
                        url: ''
                    }
                ]

            }
        },
        'myteam-multi-page-website': {
            backward: '/projects/planects-fact-web-app',
            forward: '/projects/audiophile-e-commerce',
            liveURL: 'https://pro-myteam-multi-page.netlify.app',
            sourceCodeURL: 'https://github.com/rafael-the-dev/myteam-multi-page-website',
            name: 'Myteam Multipage Website',
            level: 'advanced',
            videoURL: '',
            imageLink: 'https://cdn-icons-png.flaticon.com/512/236/236822.png',
            content: {
                description: 'My Team Multipage is a frontend project that shows',
                features: [
                    "View the optimal layout for the app depending on their device's screen size", 
                    "See hover states for all interactive elements on the page",
                    "See the correct content for each team member on the About page when the + icon is clicked",
                    {
                        name: 'Receive an error message when the contact form is submitted if:',
                        list: [
                            'The Name, Email Address or Message fields are empty should show "This field is required"',
                            'The Email Address is not formatted correctly should show "Please use a valid email address"'
                        ]
                    }
                ],
                tools: [
                    {
                        name: 'React JS',
                        url: ''
                    },
                    {
                        name: 'HTML',
                        url: ''
                    },
                    {
                        name: 'CSS',
                        url: ''
                    },
                    {
                        name: 'JavaScript',
                        url: ''
                    },
                    {
                        name: 'Material-ui',
                        url: ''
                    },
                    {
                        name: 'classnames',
                        url: ''
                    },
                    {
                        name: 'React hook form',
                        url: ''
                    },
                    {
                        name: 'React router dom',
                        url: ''
                    },
                    {
                        name: 'Loadable-components',
                        url: ''
                    },
                    {
                        name: 'AOS',
                        url: ''
                    }
                ]

            }
        }
    };

    const [ currentPage, setCurrentPage ] = useState('');

    return (
        <AppContext.Provider value={{ currentPage, projects, setCurrentPage }}>
            { children }
        </AppContext.Provider>
    );
}