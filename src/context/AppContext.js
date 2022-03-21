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
            videoURL: 'https://player.vimeo.com/video/678030551?h=5c859c8006',
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

            },
            images: [
                'preview.jpg',
                '20220211_100124.jpg',
                '20220321_082511.jpg',
                '20220321_082551.jpg',
                '20220321_082613.jpg'
            ]
        },
        'dine-restaurant-website': {
            backward: '/projects/audiophile-e-commerce',
            forward: '/projects/coffeeroasters-subscription-site',
            liveURL: 'https://pro-dine-restaurant.netlify.app/',
            sourceCodeURL: 'https://github.com/rafael-the-dev/Dine-restaurant-website',
            name: 'Dine Restaurant Website',
            level: 'intermediate',
            videoURL: 'https://player.vimeo.com/video/678032007?h=e90765791e',
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

            },
            images: [
                'preview.jpg',
                '20220321_151321.jpg',
                '20220321_151358.jpg',
                '20220321_151343.jpg',
                '20220321_151423.jpg'
            ]
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

            },
            images: [
                'preview.jpg',
                '20220321_150910.jpg',
                '20220321_150938.jpg',
                '20220321_150925.jpg',
                '20220321_151019.jpg'
            ]
        },
        'photosnap': {
            backward: '/projects/coffeeroasters-subscription-site',
            forward: '/projects/devjobs-web-app',
            liveURL: 'https://pro-photosnap.netlify.app/',
            sourceCodeURL: 'https://github.com/rafael-the-dev/photosnap',
            name: 'Photosnap multi-page website',
            level: 'advanced',
            videoURL: 'https://player.vimeo.com/video/678033509?h=d8f2dfe75d',
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

            },
            images: [
                'preview.jpg',
                '20220321_151620.jpg',
                '20220321_151709.jpg',
                '20220321_151735.jpg',
                '20220321_151638.jpg'
            ]
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

            },
            images: [
                'preview.jpg',
                '20220211_100124.jpg',
                '20220321_082511.jpg',
                '20220321_082551.jpg',
                '20220321_082613.jpg'
            ]
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

            },
            images: [
                'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/ksbsn4xdmhyssrra7ztz.jpg',
                'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/y17tovuk40mqsuhn6ubw.jpg',
                'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/qepwv1re55fzkonws7kc.jpg',
                'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/hs1uvrojcgypiq2tjmmo.jpg',
            ]
        },
        'myteam-multi-page-website': {
            backward: '/projects/planects-fact-web-app',
            forward: '/projects/designo-multi-page-website',
            liveURL: 'https://pro-myteam-multi-page.netlify.app',
            sourceCodeURL: 'https://github.com/rafael-the-dev/myteam-multi-page-website',
            name: 'Myteam Multipage Website',
            level: 'advanced',
            videoURL: 'https://player.vimeo.com/video/677821452?h=f03b25de1b',
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

            },
            images: [
                'preview.jpg',
                '20220211_100124.jpg',
                '20220321_082511.jpg',
                '20220321_082551.jpg',
                '20220321_082613.jpg'
            ]
        },
        'designo-multi-page-website': {
            backward: '/projects/myteam-multi-page-website',
            forward: '/projects/invoice-app',
            liveURL: 'https://pro-designo-multi-page-website.netlify.app',
            sourceCodeURL: 'https://github.com/rafael-the-dev/designo-multi-page-website',
            name: 'Designo multipage website',
            level: 'guru',
            videoURL: 'https://player.vimeo.com/video/678035110?h=59fc40328b',
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

            },
            images: [
                'preview.jpg',
                '20220321_082907.jpg',
                '20220321_082948.jpg',
                '20220321_082920.jpg',
                '20220321_083001.jpg'
            ]
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

            },
            images: [
                'preview.jpg',
                '20220211_100124.jpg',
                '20220321_082511.jpg',
                '20220321_082551.jpg',
                '20220321_082613.jpg'
            ]
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

            },
            images: [
                'preview.jpg',
                '20220211_100124.jpg',
                '20220321_082511.jpg',
                '20220321_082551.jpg',
                '20220321_082613.jpg'
            ]
        },
        'github-user-search-app': {
            backward: '/projects/e-commerce-product-page',
            forward: '/projects/art-gallery-website',
            liveURL: 'https://pro-github-user-search-app.netlify.app',
            sourceCodeURL: 'https://github.com/rafael-the-dev/github-user-search-app',
            name: 'Github user search app',
            level: 'junior',
            videoURL: 'https://player.vimeo.com/video/677822611?h=86c6002a42',
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

            },
            images: [
                'preview.jpg',
                '20220211_100124.jpg',
                '20220321_082511.jpg',
                '20220321_082551.jpg',
                '20220321_082613.jpg'
            ]
        },
        'art-gallery-website': {
            backward: '/projects/github-user-search-app',
            forward: '/projects/clock-app',
            liveURL: 'https://pro-art-gallery-website.netlify.app',
            sourceCodeURL: 'https://github.com/rafael-the-dev/art-gallery-website',
            name: 'Art gallery website',
            level: 'junior',
            videoURL: 'https://player.vimeo.com/video/677825929?h=6144f60c60',
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

            },
            images: [
                'preview.jpg',
                '20220211_100124.jpg',
                '20220321_082511.jpg',
                '20220321_082551.jpg',
                '20220321_082613.jpg'
            ]
        },
        'clock-app': {
            backward: '/projects/github-user-search-app',
            forward: '/projects/payAPI-multi-page website',
            liveURL: 'https://pro-clock-app.netlify.app',
            sourceCodeURL: 'https://github.com/rafael-the-dev/clock-app',
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

            },
            images: [
                'preview.jpg',
                '20220211_100124.jpg',
                '20220321_082511.jpg',
                '20220321_082551.jpg',
                '20220321_082613.jpg'
            ]
        },
        'payAPI-multi-page website': {
            backward: '/projects/clock-app',
            forward: '/projects/scoot-multi-page-website',
            liveURL: 'https://pro-payapi-multi-page-website.netlify.app/',
            sourceCodeURL: 'https://github.com/rafael-the-dev/payapi-multi-page-website',
            name: 'PayAPI multi-page website',
            level: 'advanced',
            videoURL: 'https://player.vimeo.com/video/678028360?h=7b0d11215b',
            imageLink: `https://findicons.com/files/icons/1261/sticker_system/256/home.png`,
            content: {
                description: "PayAPI multi-page website is a frontend  4-page website challenge for a marketing purpose..",
                features: [
                    "View the optimal layout for the app depending on their device's screen size", 
                    "See hover states for all interactive elements on the page",
                    {
                        name: 'Receive an error message when the contact form is submitted if:',
                        list: [
                            `The Name, Email Address or Message fields are empty should show "This field can't be empty"`,
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
                        name: 'React router dom',
                        url: ''
                    },
                    {
                        name: 'Tailwind CSS',
                        url: ''
                    },
                    {
                        name: 'React hook form',
                        url: ''
                    },
                    {
                        name: 'classnames',
                        url: ''
                    },
                    {
                        name: 'Material UI',
                        url: ''
                    },
                ]

            },
            images: [
                'preview.jpg',
                '20220202_133105.jpg',
                '20220321_082318.jpg',
                '20220321_082336.jpg',
                '20220321_082400.jpg'
            ]
        },
        'scoot-multi-page-website': {
            backward: '/projects/payAPI-multi-page website',
            forward: '/projects/arch-studio-multi-page-website',
            liveURL: 'https://pro-scoot-multi-page-website.netlify.app/',
            sourceCodeURL: 'https://github.com/rafael-the-dev/scoot-multi-page-website',
            name: 'Scoot multi-page website',
            level: 'advanced',
            videoURL: 'https://player.vimeo.com/video/677820267?h=ac9a2a1b5c',
            imageLink: `data:image/png;base64,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`,
            content: {
                description: "Scoot multi-page website is a frontend  4-page website challenge for a marketing purpose. During this website development I improved my front-end skills from specially CSS, with help of built-in css classes of tailwind CSS I could finish it as soon as possible",
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
                        name: 'React router dom',
                        url: ''
                    },
                    {
                        name: 'Tailwind CSS',
                        url: ''
                    },
                    {
                        name: 'classnames',
                        url: ''
                    },
                    {
                        name: 'Material UI',
                        url: ''
                    },
                ]

            },
            images: [
                'preview.jpg',
                '20220321_082717.jpg',
                '20220321_082734.jpg',
                '20220321_082757.jpg',
                '20220321_082823.jpg'
            ]
        },
        'arch-studio-multi-page-website': {
            backward: '/projects/payAPI-multi-page website',
            forward: '/projects/audiophile-e-commerce',
            liveURL: 'https://pro-arch-studio-multipage.netlify.app/',
            sourceCodeURL: 'https://github.com/rafael-the-dev/arch-studio-multi-page',
            name: 'Arch Studio multi-page website',
            level: 'advanced',
            videoURL: 'https://player.vimeo.com/video/678025714?h=808d0140dc',
            imageLink: `data:image/jpeg;base64,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`,
            content: {
                description: "Scoot multi-page website is a frontend  4-page website challenge for a marketing purpose. During this website development I improved my front-end skills from specially CSS: Grid, Scrolling animations, form validation. with help of built-in css classes of tailwind CSS I could finish it as soon as possible",
                features: [
                    "View the optimal layout for the app depending on their device's screen size", 
                    "See hover states for all interactive elements on the page",
                    {
                        name: 'Receive an error message when the contact form is submitted if:',
                        list: [
                            `he Name, Email or Message fields are empty should show "Can't be empty"`,
                            `The Email is not formatted correctly should show "Please use a valid email address"`
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
                        name: 'React router dom',
                        url: ''
                    },
                    {
                        name: 'React hook form',
                        url: ''
                    },
                    {
                        name: 'AOS',
                        url: ''
                    },
                    {
                        name: 'Tailwind CSS',
                        url: ''
                    },
                    {
                        name: 'classnames',
                        url: ''
                    },
                    {
                        name: 'Material UI',
                        url: ''
                    },
                ]

            },
            images: [
                'preview.jpg',
                '20220211_100124.jpg',
                '20220321_082511.jpg',
                '20220321_082551.jpg',
                '20220321_082613.jpg'
            ]
        }
    };

    const [ currentPage, setCurrentPage ] = useState('');

    return (
        <AppContext.Provider value={{ currentPage, projects, setCurrentPage }}>
            { children }
        </AppContext.Provider>
    );
}