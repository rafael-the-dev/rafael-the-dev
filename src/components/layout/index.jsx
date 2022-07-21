
import Header from "src/components/header"

const Container = ({ children }) => {
    return (
        <div className="bg-neutral-900 px-5 py-4">
            <Header />
            { children }
        </div>
    );
};

export default Container;