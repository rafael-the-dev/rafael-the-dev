import React, { createContext} from 'react';

export const AppContext = createContext();
AppContext.displayName = 'AppContext';

export const AppContextProvider = ({ children }) => {
    const projects = {
        'audiophile e-commerce': {
            backward: 'Audiophile e-commerce',
            forward: 'Audiophile e-commerce',
            liveURL: 'https://pro-audiophile-ecommerce.netlify.app/',
            name: 'Audiophile e-commerce',
            videoURL: '',
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