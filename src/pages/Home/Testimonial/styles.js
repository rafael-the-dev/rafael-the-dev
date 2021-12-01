import { makeStyles } from "@mui/styles";
import quote from '../../../assets/images/quote.png'

export const useStyles = makeStyles(theme => ({
    testimonial: {
        [theme.breakpoints.up('md')]: {
            width: '90%'
        }
    },
    testimonialDescription: {
        color: '#505054 !important',
        '&::before': { //https://www.vegvisits.com/assets/b50b74ef.png
            background: `url(${quote}) center / contain no-repeat `,
            content: "''",
            display: 'block',
            height: 80,
            width: 80
        }
    },
    testimonialAuthor: {
        color: '#051c34 !important',
        fontSize: '1.5rem !important'
    }
}));

//(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLBs2qm_5nxTqaNHxwkp2jb243M4xpj2OXSMONBjGABT1kQqj9jvKnM_WiG5993W8vNj4&usqp=CAU