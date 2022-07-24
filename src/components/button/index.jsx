import { Button } from "@mui/material";
import classNames from "classnames"

import classes from "./styles.module.css";

const ButtonContainer = ({ children, className, disabled, onClick }) => (
    <Button 
        className={classNames(className, classes.button, `px-8 text-white`)}
        disabled={Boolean(disabled)}
        onClick={onClick}>
        { children }
    </Button>
);

export default ButtonContainer;