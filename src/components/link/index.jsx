import Link from "next/link"
import { Typography  } from "@mui/material";


const LinkContainer = ({ children, className, href, onClick }) => {
    return (
        <Link href={href} passHref>
            <Typography
                className={className}
                component="a"
                onClick={onClick}>
                { children }
            </Typography>
        </Link>
    );
};

export default LinkContainer;