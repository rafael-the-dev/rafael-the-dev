import { useCallback, useMemo, useState } from "react"
import { CardMedia, Typography } from "@mui/material";
import classNames from "classnames";
import classes from "./styles.module.css"

import Link from "../link";

const Card = ({ id, images, name }) => {
    const [ open, setOpen ] = useState(false);

    const imageMemo = useMemo(() => (
        <CardMedia 
            alt={name}
            component="img"
            className={classNames(classes.image)}
            image={images[0]}
        />
    ), [ images, name ]);

    const nameMemo = useMemo(() => (
        <Typography
            component="h3"
            className="capitalize font-bold text-center text-white text-2xl">
            { name }
        </Typography>
    ), []);

    const mouseEnterHandler = useCallback(() => setOpen(true), []);
    const mouseLeaveHandler = useCallback(() => setOpen(false), [])

    return (
        <li 
            className={classNames(classes.root, "relative mb-4 last:mb-0")}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}>
            <Link href={`/?drawer=project&id=${id}`}>
                { imageMemo }
                <div className={classNames(classes.content, { [classes.contentShow ]: open }, 
                    `absolute flex items-end px-4 py-6`)}>
                    { nameMemo }
                </div>
            </Link>
        </li>
    );
};

export default Card;