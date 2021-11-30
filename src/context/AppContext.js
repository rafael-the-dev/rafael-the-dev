import React, { createContext} from 'react';
import redECommerceIcon from '../assets/images/red-ecommerce-icon.jfif'

export const AppContext = createContext();
AppContext.displayName = 'AppContext';

export const AppContextProvider = ({ children }) => {
    const projects = {
        'audiophile-e-commerce': {
            backward: 'Audiophile e-commerce',
            forward: 'Audiophile e-commerce',
            liveURL: 'https://pro-audiophile-ecommerce.netlify.app/',
            sourceCodeURL: 'https://github.com/rafael-the-dev/Audiophile-E-commerce',
            name: 'Audiophile e-commerce',
            videoURL: '',
            imageLink: `${redECommerceIcon}`,
            content: {
                description: 'Audiophile e-commerce is a frontend project for shopping',
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
                            'Shipping always adds $50 to the order'
                        ]
                    },
                    "See an order confirmation modal after checking out with an order summary"
                ],
                tools: [
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
        'dine-restaurant-website': {
            backward: 'Audiophile e-commerce',
            forward: 'Audiophile e-commerce',
            liveURL: 'https://pro-dine-restaurant.netlify.app/',
            sourceCodeURL: 'https://github.com/rafael-the-dev/Dine-restaurant-website',
            name: 'Dine Restaurant Website',
            videoURL: '',
            imageLink: 'https://i.pinimg.com/originals/c9/b9/85/c9b985bba6c9d60ab8955099bc633dcf.png',
            content: {
                description: 'Audiophile e-commerce is a frontend project for shopping',
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
                            'Shipping always adds $50 to the order'
                        ]
                    },
                    "See an order confirmation modal after checking out with an order summary"
                ],
                tools: [
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
        'coffeeroasters-subscription-site': {
            backward: 'Audiophile e-commerce',
            forward: 'Audiophile e-commerce',
            liveURL: 'https://pro-audiophile-ecommerce.netlify.app/',
            sourceCodeURL: 'https://github.com/rafael-the-dev/Coffeeroasters-subscription-site',
            name: 'Coffeeroasters Subscription Site',
            videoURL: '',
            imageLink: 'https://cdn1.iconfinder.com/data/icons/e-commerance-7/56/coffee__cup__mug__drink__glass-512.png',
            content: {
                description: 'Audiophile e-commerce is a frontend project for shopping',
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
                            'Shipping always adds $50 to the order'
                        ]
                    },
                    "See an order confirmation modal after checking out with an order summary"
                ],
                tools: [
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
            backward: 'Audiophile e-commerce',
            forward: 'Audiophile e-commerce',
            liveURL: 'https://pro-audiophile-ecommerce.netlify.app/',
            sourceCodeURL: 'https://github.com/rafael-the-dev/photosnap',
            name: 'Photosnap',
            videoURL: '',
            imageLink: 'https://cdn4.iconfinder.com/data/icons/traveling-and-tourism/135/Landscape-512.png',
            content: {
                description: 'Audiophile e-commerce is a frontend project for shopping',
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
                            'Shipping always adds $50 to the order'
                        ]
                    },
                    "See an order confirmation modal after checking out with an order summary"
                ],
                tools: [
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
        'devjobs-web-app': {
            backward: 'Audiophile e-commerce',
            forward: 'Audiophile e-commerce',
            liveURL: 'https://pro-audiophile-ecommerce.netlify.app/',
            sourceCodeURL: 'https://github.com/rafael-the-dev/devjobs',
            name: 'Devjobs web app',
            videoURL: '',
            imageLink: 'https://png.pngitem.com/pimgs/s/133-1337753_job-vector-vacancy-job-icon-hd-png-download.png',
            content: {
                description: 'Audiophile e-commerce is a frontend project for shopping',
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
                            'Shipping always adds $50 to the order'
                        ]
                    },
                    "See an order confirmation modal after checking out with an order summary"
                ],
                tools: [
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
        'planects-fact-web-app': {
            backward: 'Audiophile e-commerce',
            forward: 'Audiophile e-commerce',
            liveURL: 'https://pro-planets-fact-site.netlify.app',
            sourceCodeURL: 'https://github.com/rafael-the-dev/planect-fact-site',
            name: 'Planects Fact Web App',
            videoURL: '',
            imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxLxJF47Y1wAKA4mo3dvcWrLd-rgm1KutnUg&usqp=CAU',
            content: {
                description: 'Audiophile e-commerce is a frontend project for shopping',
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
                            'Shipping always adds $50 to the order'
                        ]
                    },
                    "See an order confirmation modal after checking out with an order summary"
                ],
                tools: [
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
        }
    };

    return (
        <AppContext.Provider value={{ projects }}>
            { children }
        </AppContext.Provider>
    );
}