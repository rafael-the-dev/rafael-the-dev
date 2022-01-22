import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    testimonial: {
        padding: '0 0 0 1rem',
        //backgroundColor: '#ef907b6b',
        "&:hover": {
            backgroundColor: '#acf1ff21',
        },
        '.pink-theme &:hover': {
            backgroundColor: '#ef907b54',
        },
        [theme.breakpoints.up('md')]: {
            width: '90%'
        }
    },
    quoteIcon: {
        color: '#186bbdad',
        fontSize: '5.5rem !important',
        '.pink-theme &': {
            color: '#ef907b54',
        },
    },
    testimonialDescription: {
        color: '#505054 !important',
        //width: '93`%',
        /*'&::before': { //https://www.vegvisits.com/assets/b50b74ef.png
            background: `url(${quote}) center / contain no-repeat `,
            content: "''",
            display: 'block',
            height: 80,
            width: 80
        }*/
    },
    testimonialAuthor: {
        color: '#051c34 !important',
        fontSize: '1.5rem !important'
    }
}));

//(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLBs2qm_5nxTqaNHxwkp2jb243M4xpj2OXSMONBjGABT1kQqj9jvKnM_WiG5993W8vNj4&usqp=CAU