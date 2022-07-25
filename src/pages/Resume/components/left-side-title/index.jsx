import { Typography } from "@mui/material";
import classNames from "classnames";

import classes from "./styles.module.css"

const TitleContainer = ({ title }) => (
    <div className={classNames(classes.title, 'bg-neutral-900 text-white py-1 pl-8 mb-4 md:bg-neutral-800')}>
        <Typography component="h2" variant="h5">
            { title }
        </Typography>
    </div>
);

export default TitleContainer;