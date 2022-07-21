import { ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import { useRouter } from "next/router";
import classNames from "classnames"

import classes from "./styles.module.css";

import Link from "src/components/link"

const ListItemContainer = ({ href, onClick, pathName, text }) => {
    const { pathname } = useRouter();
    
    return (
        <ListItem disablePadding>
            <Link 
                className={classNames('text-white md:my-0 md:text-black', 'color-transition', 
                classes.headerNavItemText, 
                { [classes.currentPage]: pathname === pathName })} 
                href={href} 
                onClick={onClick}>
                { text }
            </Link>
        </ListItem>
    );
}; 

export default ListItemContainer;