import classNames from "classnames"

import classes from "./styles.module.css";

import Header from "src/components/header";
import Footer from "src/components/footer"

const Container = ({ children }) => {
    return (
        <div className={classNames(classes.root, "bg-neutral-900")}>
            <Header />
            { children }
            <Footer />
        </div>
    );
};

export default Container;