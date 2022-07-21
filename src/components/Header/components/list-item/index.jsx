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
                className={classNames('capitalize mb-2 text-bsase md:my-0 md:mr-4 hover:text-orange-700', 
                'color-transition', 
                classes.headerNavItemText, 
                pathname === pathName ? "font-bold text-orange-600": "text-white" )} 
                href={href} 
                onClick={onClick}>
                { text }
            </Link>
        </ListItem>
    );
}; 

export default ListItemContainer;