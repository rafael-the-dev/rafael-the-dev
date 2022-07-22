import { CardMedia } from "@mui/material";
import classNames from "classnames";
import classes from "./styles.module.css"

import Link from "../link";

const Card = ({ id, images, name }) => {
    return (
        <li className={classNames(classes.root, "mb-4 last:mb-0")}>
            <Link href={`/?drawer=project&id=${id}`}>
                <CardMedia 
                    alt={name}
                    component="img"
                    className={classNames(classes.image)}
                    image={images[0]}
                />
            </Link>
        </li>
    );
};

export default Card;