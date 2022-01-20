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
                description: "Audiophile e-commerce is a frontend project for shopping with optimal layout for the app depending on their device's screen size. In this challenge I have been working with complex muiltipage app and states managment.",
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
                description: 'Dine Restaurant Website is a frontend project for making reservaiton on a restaurant, This challenge made me more confident in my frontend skills by enabling me to use some tricks for form validation design details.',
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
                description: 'Coffeeroasters Subscription Site is a frontend project for coffee subscription  that users can make selections to create a coffee subscription and see an order summary modal of their choices. In this challenge I tested my JS skills by making interactive subscription page.',
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
            liveURL: 'https://pro-photosnap.netlify.app/',
            sourceCodeURL: 'https://github.com/rafael-the-dev/photosnap',
            name: 'Photosnap multi-page website',
            level: 'advanced',
            videoURL: '',
            imageLink: 'https://cdn4.iconfinder.com/data/icons/traveling-and-tourism/135/Landscape-512.png',
            content: {
                description: 'Photosnap is a frontend project for photo-sharing, This was a perfect opportunity to put my CSS Grid skills to the test and to train my eye for detail by getting my solution as close to the design!',
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
                description: 'Devjobs web app is a frontend project that pulls data from a local JSON file or 3rd paty API, This was a great opportunity to practice JS, CSS grids and data filtering',
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
                description: '8-page planets fact app is a front-end app that shows 8-page fact site for all planets in our solar system',
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
            forward: '/projects/designo-multi-page-website',
            liveURL: 'https://pro-myteam-multi-page.netlify.app',
            sourceCodeURL: 'https://github.com/rafael-the-dev/myteam-multi-page-website',
            name: 'Myteam Multipage Website',
            level: 'advanced',
            videoURL: '',
            imageLink: 'https://cdn-icons-png.flaticon.com/512/236/236822.png',
            content: {
                description: 'My Team Multipage is a frontend project that shows Homepage, About page and a Contact page of a company.',
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
        },
        'designo-multi-page-website': {
            backward: '/projects/myteam-multi-page-website',
            forward: '/projects/invoice-app',
            liveURL: 'https://pro-designo-multi-page-website.netlify.app',
            sourceCodeURL: 'https://github.com/rafael-the-dev/designo-multi-page-website',
            name: 'Designo multipage website',
            level: 'guru',
            videoURL: '',
            imageLink: 'https://banner2.cleanpng.com/20210611/lec/transparent-idea-icon-startup-new-business-icon-60c33b95895d19.3711961816234075095626.jpg',
            content: {
                description: 'Designo multipage website is a frontend challenge that shows startup details and services, this challenge includes 5 different templates that make up a 7-page site',
                features: [
                    "View the optimal layout for the app depending on their device's screen size", 
                    "See hover states for all interactive elements on the page",
                    "See the correct content for each team member on the About page when the + icon is clicked",
                    {
                        name: 'Receive an error message when the contact form is submitted if:',
                        list: [
                            `The Name, Email Address or Message fields are empty should show "Can't be empty"`,
                            'The Email Address is not formatted correctly should show "Please use a valid email address"'
                        ]
                    },
                    'View actual locations on the locations page maps'
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
                ]

            }
        },
        'invoice-app': {
            backward: '/projects/designo-multi-page-website',
            forward: '/projects/e-commerce-product-page',
            liveURL: 'https://pro-invoice-app.netlify.app',
            sourceCodeURL: 'https://github.com/rafael-the-dev/invoice-app',
            name: 'Invoice app',
            level: 'guru',
            videoURL: '',
            imageLink: `data:image/png;base64,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`,
            content: {
                description: 'Invoice App is a frontend challenge for invoice managment, In this I have been working with JSON data, managing state, plus a lot more.',
                features: [
                    "View the optimal layout for the app depending on their device's screen size", 
                    "See hover states for all interactive elements on the page",
                    "Create, read, update, and delete invoices",
                    "Receive form validations when trying to create/edit an invoice",
                    "Save draft invoices, and mark pending invoices as paid",
                    "Filter invoices by status (draft/pending/paid)",
                    "Toggle light and dark mode",
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
                ]

            }
        },
        'e-commerce-product-page': {
            backward: '/projects/invoice-app',
            forward: '/projects/github-user-search-app',
            liveURL: 'https://pro-e-commerce-product-page.netlify.app',
            sourceCodeURL: 'https://github.com/rafael-the-dev/e-commerce-product-page',
            name: 'E-commerce product page',
            level: 'intermediate',
            videoURL: '',
            imageLink: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTPznX_i_f2F84Dq5liTR_vkLYV-PS3EkJxQ&usqp=CAU`,
            content: {
                description: 'E-commerce product page is a frontend challenge for a product page, In this I have been putting my JS skills to the test with a lightbox product gallery and cart functionality!',
                features: [
                    "View the optimal layout for the app depending on their device's screen size", 
                    "See hover states for all interactive elements on the page",
                    "Open a lightbox gallery by clicking on the large product image",
                    "Switch the large product image by clicking on the small thumbnail images",
                    "Add items to the cart",
                    "View the cart and remove items from it",
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
                        name: 'React router dom',
                        url: ''
                    },
                    {
                        name: 'Loadable-components',
                        url: ''
                    },
                ]

            }
        },
        'github-user-search-app': {
            backward: '/projects/e-commerce-product-page',
            forward: '/projects/art-gallery-website',
            liveURL: 'https://pro-github-user-search-app.netlify.app',
            sourceCodeURL: 'https://github.com/rafael-the-dev/github-user-search-app',
            name: 'Github user search app',
            level: 'junior',
            videoURL: '',
            imageLink: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDPE1zPGQqgpiKQplYI0ZRZJv59eXrr5sQ9g&usqp=CAU`,
            content: {
                description: 'Github user search app is a frontend challenge that allow users to search github users and see their relevant information, In this I used GitHub users API to pull profile data and display it and I have been praticing 3rd-party AP!',
                features: [
                    "View the optimal layout for the app depending on their device's screen size", 
                    "See hover states for all interactive elements on the page",
                    "Search for GitHub users by their username",
                    "See relevant user information based on their search",
                    "Switch between light and dark themes",
                    "View the cart and remove items from it",
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
                        name: 'React router dom',
                        url: ''
                    },
                    {
                        name: 'Loadable-components',
                        url: ''
                    },
                ]

            }
        },
        'art-gallery-website': {
            backward: '/projects/github-user-search-app',
            forward: '/projects/clock-app',
            liveURL: 'https://pro-art-gallery-website.netlify.app',
            sourceCodeURL: 'https://github.com/rafael-the-dev/art-gallery-website',
            name: 'Art gallery website',
            level: 'junior',
            videoURL: '',
            imageLink: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHh51EDXF1Pn2Okrs7X2c2qBWDHMf3dNToeA&usqp=CAU`,
            content: {
                description: 'Art gallery website is a frontend challenge for modern art gallery, In this challenge I branched out beyond single landing pages to complex muiltipage website.',
                features: [
                    "View the optimal layout for the app depending on their device's screen size", 
                    "See hover states for all interactive elements on the page",
                    "Use Leaflet JS to create an interactive location map with custom location pin",
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
                        name: 'React router dom',
                        url: ''
                    },
                    {
                        name: 'Loadable-components',
                        url: ''
                    },
                ]

            }
        },
        'clock-app': {
            backward: '/projects/github-user-search-app',
            forward: '/projects/audiophile-e-commerce',
            liveURL: 'https://pro-clock-app-website.netlify.app',
            sourceCodeURL: 'https://github.com/rafael-the-dev/clock-app-website',
            name: 'Clock App',
            level: 'junior',
            videoURL: '',
            imageLink: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgWH3g7EKNb80WTOENdFjaa_tcuJ16Dad5v2Xvbkc5OmBEdQmbYT1c0E0JvduFykVlfrc&usqp=CAU`,
            content: {
                description: "Clock App is a frontend challenge that show user's local time, location and  generate random programming quotes. In this challenge I have been working with external APIs to set data based on a visitor's location, retrieve programming quotes and show local time.",
                features: [
                    "View the optimal layout for the app depending on their device's screen size", 
                    "See hover states for all interactive elements on the page",
                    "View the current time and location information based on their IP address",
                    "View additional information about the date and time in the expanded state",
                    "Be shown the correct greeting and background image based on the time of day they're visiting the site",
                    "Generate random programming quotes by clicking the refresh icon near the quote"
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
                        name: 'React router dom',
                        url: ''
                    },
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