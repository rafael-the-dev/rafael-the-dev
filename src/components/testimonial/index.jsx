import { Avatar, Paper, Typography } from "@mui/material";
import classNames from "classnames"

import classes from "./styles.module.css";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Card = ({ name, image, plataform, text }) => {

    return (
        <Paper 
            component="article"
            className={classNames(classes.root, "bg-neutral-900 mb-4 px-4 py-6 relative")}>
            <div className="flex flex-col">
                <div className="flex items-center">
                    <Avatar 
                        alt={name}
                        src={image}
                    />
                    <Typography
                        component="h3"
                        className="ml-3 text-slate-100 text-lg">
                        { name }
                    </Typography>
                </div>
                <Typography
                    className="mt-3 text-slate-200">
                    { plataform }
                </Typography>
            </div>
            <Typography 
                component="blockquote" 
                className="mt-4 text-slate-300 text-base">
                "{ text }"
            </Typography>
            <FormatQuoteIcon className={classNames(classes.quoteIcon, "absolute text-slate-600")} />
        </Paper>
    );
};

export default Card;