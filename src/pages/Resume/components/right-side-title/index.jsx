import { Typography } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css"

const TitleContainer = ({ title }) => (
    <div className={classNames(classes.rightSideSubtitleContainer, 'bg-neutral-900 py-1 pl-4')}>
        <Typography 
            component="h3" 
            variant="h6" className={classNames(classes.rightSideSubtitleContainer, 
            'text-white')}>
            { title }
        </Typography>
    </div>
);

export default TitleContainer;