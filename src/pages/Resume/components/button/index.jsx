import { Button } from "@mui/material";
import classNames from "classnames";

const ButtonContainer = ({ children, onClick, selected }) => (
    <Button 
        onClick={onClick}
        className={classNames({ "bg-orange-700 text-white": selected, 
        ["text-orange-700"]: !selected}, "border border-solid border-orange-700 mr-4")}>
        { children }
    </Button>
);

export default ButtonContainer;