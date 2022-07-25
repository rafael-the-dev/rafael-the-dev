import classNames from "classnames";
import classes from "./styles.module.css"

const Anchor = ({ children, href }) => (
    <a target="_blank" rel="noreferrer" className={classNames('flex items-center no-underline', 
        classes.anchor)} href={href}>
        { children }
    </a>
);

export default Anchor;